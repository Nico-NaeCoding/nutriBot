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

async function GptOpenApi(messagesToSend) {
    const systemMessage = {
        role: "system",
        content: "이후 프롬프트 역할",
    };

    const messages = [systemMessage, ...messagesToSend];

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
    const handleInformSend = () => {
        console.log({ gender, age, height, weight });
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
            const response = await GptOpenApi([{ role: "user", content: text }]);
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
