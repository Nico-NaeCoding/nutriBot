import { useState, useEffect, useRef } from "react";

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
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Header from "../../Component/Header/Header.js";

function ChatPage() {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            id: "hello",
            role: "bot",
            text: "안녕하세요! 저는 NutriBot입니다. 먼저 왼쪽에서 개인 정보를 입력해주시고, 식단에 대해 알려주세요!",
        },
    ]);

    // 채팅장 자동으로 아래 스크롤
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const send = () => {
        const text = input.trim();
        if (!text) return;

        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", text }]);
        setInput("");

        setMessages((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                role: "bot",
                text: "메시지 확인했습니다. ",
            },
        ]);
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
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
                    <CustomButton ButtonMessage="내 정보 알려주기" fullWidth />
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
                    <ChattingCenter>
                        <Messages>
                            {messages.map((m) => {
                                const isUser = m.role === "user";
                                return (
                                    <MessageRow key={m.id} $isUser={isUser}>
                                        {!isUser && <ChatImage src="./images/gray.png" alt="bot" />}
                                        <Bubble $isUser={isUser}>{m.text}</Bubble>
                                    </MessageRow>
                                );
                            })}
                            <div ref={bottomRef} />
                        </Messages>
                    </ChattingCenter>
                    <ChattingBottom>
                        <TextField
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            fullWidth
                            multiline
                            minRows={4}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderRadius: "12px",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#059669",
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            onClick={send}
                            sx={{
                                backgroundColor: "#059669",
                                "&:hover": {
                                    backgroundColor: "#047857",
                                },

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

export default ChatPage;
