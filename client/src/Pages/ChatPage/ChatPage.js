import { useState } from "react";

import { Container, PersonalInfoContainer, PersonalInfoTitle, TitleImage } from "./ChatPage.style.js";
import CustomButton from "../../Component/CustomButton/CustomButton.js";
import CustomRadio from "../../Component/CustomRadio/CustomRadio.js";
import CustomInput from "../../Component/CustomInput/CustomInput.js";

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
        </Container>
    );
}

export default ChatPage;
