import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

export const Container = styled.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    // width: 100%;
    height: 80vh;
    // background-color: #f9fafb;
    padding: 2%;
    // margin-top: 3%;
    gap: 3%;
`;

export const PersonalInfoContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e5e7eb;
    border-radius: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 2%;
    height: 70%;
    // gap: 10%;
`;

export const PersonalInfoTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    gap: 5%;
`;

export const TitleImage = styled.img`
    width: 35px;
`;

export const ChattingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    border: 1px solid #e5e7eb;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    height: 100%;
`;

export const ChattingTop = styled.div`
    display: flex;
    background-color: #059669;
    gap: 1.5%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 3%;
`;

export const TopIcon = styled.img`
    width: 40px;
    height: 40px;
    background-color: #37ab87;
    padding: 1%;
    border-radius: 100%;
`;

export const TopTitleAndDes = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TopTitle = styled.div`
    font-weight: bold;
    font-size: 22px;
`;

export const TopDescription = styled.div`
    font-size: 17px;
`;

export const ChattingCenter = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 3%;
`;

export const ChatImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #e5e7eb;
    padding: 1%;
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 22px;
    flex: 0;
`;

export const MessageRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: ${(p) => (p.$isUser ? "flex-end" : "flex-start")};
    gap: 2%;
    width: 100%;
    flex: 1;
`;

export const Bubble = styled.div`
    max-width: 70%;
    white-space: pre-wrap;
    word-break: break-word;
    padding: 2%;
    border-radius: 20px;
    border-top-left-radius: ${(p) => (p.$isUser ? "20px" : "1px")};
    border-bottom-right-radius: ${(p) => (p.$isUser ? "1px" : "20px")};
    background: ${(p) => (p.$isUser ? "#059669" : "white")};
    color: ${(p) => (p.$isUser ? "white" : "#111827")};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
`;

export const ChattingBottom = styled.div`
    display: flex;
    padding: 3%;
    gap: 2%;
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top: 1px solid #e5e7eb;
`;

export const SendImage = styled.img`
    width: 30px;
`;
//////////
export const Chatbot = styled.div`
    display: flex;
    gap: 1%;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const LoadingIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: gray;
    height: 50%;

    &::after {
        content: "...";
        animation: ${blinkAnimation} 1.5s infinite;
    }
`;

export const Profile = styled.img`
    width: 4rem;
    height: 5rem;
`;

export const Answer = styled.div`
    background-color: #ffffff;
    width: 35%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.5%;
    height: auto;
    font-size: 1.1rem;
    word-wrap: break-word;
`;

export const User = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Question = styled.div`
    width: 35%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.5%;
    height: auto;
    color: #ffffff;
    font-size: 1.1rem;
    word-wrap: break-word;
    background-color: ${(props) => (props.$switchState ? "#2196f3" : "#505050")};
`;
