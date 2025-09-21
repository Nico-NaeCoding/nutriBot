import { useState } from "react";

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
    ChattingBottom,
    SendImage,
} from "./ChatPage.style.js";
import CustomButton from "../../Component/CustomButton/CustomButton.js";
import CustomRadio from "../../Component/CustomRadio/CustomRadio.js";
import CustomInput from "../../Component/CustomInput/CustomInput.js";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function ChatPage() {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    return (
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
                <ChattingCenter>중앙</ChattingCenter>
                <ChattingBottom>
                    <TextField
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
    );
}

export default ChatPage;
