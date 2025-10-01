// src/Pages/ChatPage/ChatPage.js
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import {
    Container,
    PersonalInfoContainer,
    PersonalInfoTitle,
    TitleImage,
    ChattingContainer,
    ChattingTop,
    TopIcon,
    TopTitleAndDes,
    TopTitle,
    TopDescription,
    ChattingCenter,
    ChatImage,
    Messages,
    MessageRow,
    Bubble,
    ChattingBottom,
    SendImage,
} from "./ChatPage.style.js";
import CustomButton from "../../Component/CustomButton/CustomButton.js";
import CustomRadio from "../../Component/CustomRadio/CustomRadio.js";
import CustomInput from "../../Component/CustomInput/CustomInput.js";
import { TextField, Button } from "@mui/material";
import Header from "../../Component/Header/Header.js";

const REQUEST_ADDRESS = "https://api.openai.com/v1/chat/completions";
const CHATGPT_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;

async function GptOpenApi(messagesToSend, profile) {
    const systemMessage = {
        role: "system",
        content: "너는 전문적인 식단 관리 AI 코치이다. \
        사용자의 성별, 키, 몸무게, 식단 기록을 기반으로 맞춤형 식단 분석과 조언을 한국어로만 제공한다. \
        언제나 친절하고 따뜻한 말투를 사용하며, 사용자가 상처받지 않도록 긍정적이고 응원하는 태도를 유지한다. \
        체중, 외모, 외형에 대한 평가나 비교는 절대 하지 않으며, 오직 건강, 영양, 생활 습관 개선에만 초점을 맞춘다. \
        조언은 반드시 영양학적 근거와 전문 지식을 바탕으로 하며, 의학적으로 위험하거나 지속 불가능한 식단(예: 과도한 단식, 극단적 제한)은 권하지 않는다. \
        답변은 가독성을 위해 문단별로 정리하고, \
        각 문단은 (1) 현재 상황 분석 (2) 개선 방법 (3) 식단 예시 및 권장 식품 (4) 동기부여 메시지 의 흐름을 따르도록 한다. \
        모든 답변은 반드시 한국어로만 작성해야 하며, 외국어, 이모티콘, 불필요한 장식은 사용하지 않는다."
    };

    const profileSystem = profile
        ? {
              role: "system",
              content:
                  `다음은 사용자의 프로필입니다. 이후 답변에서 참고하세요.\n` +
                  `- 성별: ${profile.gender || "미입력"}\n` +
                  `- 나이: ${profile.age || "미입력"}\n` +
                  `- 키(cm): ${profile.height || "미입력"}\n` +
                  `- 몸무게(kg): ${profile.weight || "미입력"}`,
          }
        : null;

    const messages = profileSystem
        ? [systemMessage, profileSystem, ...messagesToSend]
        : [systemMessage, ...messagesToSend];

    const response = await axios.post(
        REQUEST_ADDRESS,
        {
            model: "gpt-3.5-turbo",
            messages,
            max_tokens: 1000,
            temperature: 0.7,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${CHATGPT_API_KEY}`,
            },
        }
    );
    return response;
}

export default function ChatPage() {
    // 개인 정보
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [questionInput, setQuestionInput] = useState("");
    const [profile, setProfile] = useState(null);
    const [messagesState, setMessagesState] = useState([
        {
            id: crypto.randomUUID(),
            role: "bot",
            content: "안녕하세요! 저는 NutriBot입니다. 먼저 왼쪽에서 개인 정보를 입력해주시고, 식단에 대해 알려주세요!",
        },
    ]);
    const [loading, setLoading] = useState(false);

    // 스크롤 제어
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messagesState, loading]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    // 개인 정보 전송
    // const handleInformSend = async () => {
    //     try {
    //         const response = await axios.post("http://127.0.0.1:5000/profile", {
    //             gender,
    //             age,
    //             height,
    //             weight,
    //         });

    //         console.log("📌 서버 응답:", response.data);
    //     } catch (error) {
    //         console.error("❌ 서버 요청 실패:", error);
    //     }
    // };

    const handleInformSend = () => {
        const p = { gender, age, height, weight };
        setProfile(p);
        setMessagesState((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                role: "bot",
                content: `프로필이 업데이트되었어요! (성별: ${p.gender}, 나이: ${p.age}, 키: ${p.height}, 몸무게: ${p.weight})`,
            },
        ]);
    };

    // 메시지 전송
    const handleSend = async () => {
        const text = questionInput.trim();
        if (!text) return;

        // 사용자 메시지 추가
        const newUserMsg = { id: crypto.randomUUID(), role: "user", content: text };
        setMessagesState((prev) => [...prev, newUserMsg]);
        setQuestionInput("");
        setLoading(true);

        try {
            const historyForOpenAI = [...messagesState, newUserMsg].map((m) => ({
                role: m.role === "bot" ? "assistant" : "user",
                content: m.content,
            }));

            const response = await GptOpenApi(historyForOpenAI, profile);
            const botText = response.data.choices?.[0]?.message?.content ?? "응답 없음";
            const newBotMsg = {
                id: crypto.randomUUID(),
                role: "bot",
                content: botText,
            };
            setMessagesState((prev) => [...prev, newBotMsg]);
        } catch (e) {
            console.error(e);
            setMessagesState((prev) => [
                ...prev,
                { id: crypto.randomUUID(), role: "bot", content: "에러가 발생했습니다." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <Container>
                {/* 개인정보 입력란 */}
                <PersonalInfoContainer>
                    <PersonalInfoTitle>
                        <TitleImage src="./images/greenhuman.png" />
                        개인 정보
                    </PersonalInfoTitle>

                    <CustomRadio
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        options={[
                            { value: "male", label: "남성" },
                            { value: "female", label: "여성" },
                        ]}
                    />
                    <CustomInput label="나이" value={age} onChange={(e) => setAge(e.target.value)} />
                    <CustomInput label="키(cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
                    <CustomInput label="몸무게(kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <CustomButton ButtonMessage="내 정보 알려주기" ButtonOnClick={handleInformSend} fullWidth />
                </PersonalInfoContainer>

                {/* 채팅창 */}
                <ChattingContainer>
                    <ChattingTop>
                        <TopIcon src="./images/white.png" />
                        <TopTitleAndDes>
                            <TopTitle>NutriBot</TopTitle>
                            <TopDescription>AI 식단 분석 전문가</TopDescription>
                        </TopTitleAndDes>
                    </ChattingTop>

                    <ChattingCenter ref={bottomRef}>
                        <Messages>
                            {messagesState.map((m) => {
                                const isUser = m.role === "user";
                                return (
                                    <MessageRow key={m.id} $isUser={isUser}>
                                        {!isUser && <ChatImage src="./images/gray.png" alt="bot" />}
                                        <Bubble $isUser={isUser}>{m.content}</Bubble>
                                    </MessageRow>
                                );
                            })}
                            {loading && (
                                <MessageRow $isUser={false}>
                                    <ChatImage src="./images/gray.png" alt="bot" />
                                    <Bubble>...</Bubble>
                                </MessageRow>
                            )}
                        </Messages>
                    </ChattingCenter>

                    <ChattingBottom>
                        <TextField
                            value={questionInput}
                            onChange={(e) => setQuestionInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            fullWidth
                            multiline
                            minRows={4}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderRadius: "12px" },
                                    "&.Mui-focused fieldset": { borderColor: "#059669" },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            onClick={handleSend}
                            sx={{
                                backgroundColor: "#059669",
                                "&:hover": { backgroundColor: "#047857" },
                                borderRadius: "12px",
                            }}
                        >
                            <SendImage src="./images/upload.png" />
                        </Button>
                    </ChattingBottom>
                </ChattingContainer>
            </Container>
        </>
    );
}
