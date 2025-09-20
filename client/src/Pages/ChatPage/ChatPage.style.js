import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #f9fafb;
`;

export const PersonalInfoContainer = styled.div`
    text-align: center;
    width: 25%;
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
    font-size: 30px;
    font-weight: bold;
    gap: 5%;
`;

export const TitleImage = styled.img`
    width: 40px;
`;
