import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    background-color: #f9fafb;
`;

export const PersonalInfoContainer = styled.div`
    text-align: center;
    width: 20%;
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-between;
    border: 1px solid #e5e7eb;
    border-radius: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 2%;
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
    width: 60%;
    border: 1px solid #e5e7eb;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
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
    display: flex;
    padding: 3%;
    overflow-y: auto;
    max-height: 50vh;
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
`;

export const MessageRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: ${(p) => (p.$isUser ? "flex-end" : "flex-start")};
    gap: 2%;
    width: 100%;
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
