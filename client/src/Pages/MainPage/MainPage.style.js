import styled from 'styled-components';

export const Container = styled.div`
    line-height: 1.6;
`;

export const Herosection = styled.div`
    text-align: center;
    padding: 100px;
    background-color: #ffffff;
    margin-bottom: 100px;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;

    span {
        color: #16a34a;
    }
`;

export const Highlight = styled.span`
    color: #16a34a;
`;

export const Subtitle = styled.p`
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 24px;
    color: #555;
    line-height: 1.6;
    max-width: 100%;
    /* 자동 줄바꿈 */
    word-break: keep-all;
    white-space: normal;
`;

export const CTAbutton = styled.button`
    margin-top: 30px;
    padding: 12px;
    background-color: #16a34a;
    color: white;
    font-size: 1px;
    boerder: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #15803d;
    }
`;

export const Whysection = styled.section`
    text-align: center;
    padding: 60px 20px;
    background: #f9fafb;

    h2 {
        font-size: 1.8rem;
        margin-bottom: 12px;
    }
`;

export const Featuressection = styled.section`
    background: #fff;
    padding: 80px;
    text_align: center;
    margin-bottom: 150px;
`;

export const Featurestitle = styled.h2`
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
`;

export const Stepscontainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로 나열 */
    gap: 30px; /* 단계 사이 간격 */
    max-width: 600px;
    margin: 0 auto;
`;

export const Step = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    gap: 30px; /* 숫자랑 글자 사이 간격 */
    padding: 20px; /* 하나로 통일 */
    border-radius: 12px;
    background-color: #ffffff;
    // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

/* Why Section */
export const WhySectionContainer = styled.div`
    text-align: center;
    padding: 80px 20px;
    background-color: #f9fafb;
    width: 100%;
`;

// MainPage.style.js
export const WhySection = styled.section`
    background-color: #f9fafb; /* 회색 배경 */
    padding: 80px 20px;
    text-align: center;
`;

export const WhyTitle = styled.h2`
    font-weight: bold;
    font-size: 35px; /* 원하는 크기로 조정 (기본 h2는 ~24px) */
    margin-bottom: 0px;
`;

export const BeforeAfterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* 요소 사이 간격 */
    margin-top: 0px;
`;

export const BeforeImg = styled.img`
    width: 180px; /* 원하는 크기로 줄이기 */
    height: auto;
    margin-top: 50px;
`;

export const AfterImg = styled.img`
    width: 200px; /* 원하는 크기로 줄이기 */
    height: auto;
`;

export const ArrowImg = styled.img`
    width: 250px; /* 화살표 크기 조절 */
    height: auto;
    margin-bottom: 100px;
`;
/* 단계 번호 */
export const Stepnumber = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 20%;
    background-color: ${(props) => props.color || '#16a34a'};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 0;
    font-size: 20px; /* 1.2rem ≈ 19px → 20px */
    flex-shrink: 0; /* 숫자 영역 크기 고정 */
`;

export const StepContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
    /* 크기 늘리기 */
    flex: 1; /* 남는 공간 전부 차지 */
    width: 100%; /* 부모 기준 가로 전체 */
    /* 필요하면 최대 크기 제한 */
`;

/* 단계 제목 */
export const Steptitle = styled.h3`
    font-size: 20px; /* 1.2rem ≈ 19px → 20px */
    font-weight: bold;
    margin: 0.1px;
`;

/* 단계 설명 */
export const Stepdescription = styled.p`
    font-size: 16px; /* 1rem ≈ 16px */
    color: #555;
    line-height: 24px; /* 1.5 × 16px */
    margin: 5px 0 0 0;
    white-space: nowrap; /* 기본은 무조건 한 줄 */
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1024px) {
        white-space: normal; /* 좁아지면 줄바꿈 허용 */
        overflow: visible;
        text-overflow: unset;
    }
`;

// 포터 전체
export const FooterContainer = styled.footer`
    background-color: #111827; /* 네가 스포이트로 뽑은 색 */
    color: white;
    text-align: center;
    padding: 40px 20px;
`;

export const FooterLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* 로고랑 텍스트 간격 */
    margin-bottom: 10px;
`;

export const FooterLogo = styled.img`
    width: 40px;
    height: auto;
`;

export const FooterText = styled.h2`
    font-size: 24px;
    color: #f0f1f2;
    margin: 0;
    font-weight: bold;
`;
