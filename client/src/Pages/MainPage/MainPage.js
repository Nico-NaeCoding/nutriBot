import {
    Container,
    Herosection,
    Subtitle,
    Title,
    Featuressection,
    Featurestitle,
    Stepscontainer,
    Step,
    Stepnumber,
    Steptitle,
    Stepdescription,
    WhySection,
    WhyTitle,
    BeforeAfterWrapper,
    AfterImg,
    BeforeImg,
    ArrowImg,
    StepContent,
    Footer,
    FooterLogo,
    FooterText,
    FooterContainer,
    FooterLogoWrapper,
} from './MainPage.style.js';
import CustomButton from '../../Component/CustomButton/CustomButton.js';
import Header from '../../Component/Header/Header.js';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();
    const handlechatButton = () => {
        navigate('/chat');
    };

    return (
        <Container>
            {/* 헤더 */}
            <Header />

            {/* Hero Section */}
            <Herosection>
                <Title>
                    AI 기반 <span>식단 분석</span> 챗봇
                </Title>
                <Subtitle>개인 맞춤형 영양 분석과 식단 개선 제안을 통해 더 건강한 식습관을 만들어가세요.</Subtitle>
                <CustomButton ButtonMessage="시작하기 >" ButtonOnClick={handlechatButton} />
            </Herosection>

            {/* Why Section (글자만) */}
            <WhySection>
                <WhyTitle>왜 NutriBot일까요?</WhyTitle>

                <p>나의 잘못된 식습관을 함께 고민하며 더 성장한 나의 모습을 기대해볼 수 있으니까!</p>

                <BeforeAfterWrapper>
                    <BeforeImg src="/images/멸치맨.png" alt="Before" />
                    <ArrowImg src="/images/화살표.png" alt="Arrow" />
                    <AfterImg src="/images/근육맨.png" alt="After" />
                </BeforeAfterWrapper>
            </WhySection>
            {/* <BeforeAfter src="/images/BeforeAfter.png" alt="Before and After" /> */}
            {/* Features Section */}
            <Featuressection>
                <Featurestitle>간단한 3단계</Featurestitle>
                <Stepscontainer>
                    <Step>
                        <Stepnumber color="#16a34a">1</Stepnumber>
                        <StepContent>
                            <Steptitle>기본 정보 입력</Steptitle>
                            <Stepdescription>
                                성별, 나이, 키, 몸무게와 같은 기본 정보를 입력해 개인 맞춤 기준을 설정합니다.
                            </Stepdescription>
                        </StepContent>
                    </Step>

                    <Step>
                        <Stepnumber color="#2563eb">2</Stepnumber>
                        <StepContent>
                            <Steptitle>식단 정보 입력</Steptitle>
                            <Stepdescription>
                                오늘 섭취한 음식이나 계획 중인 식단에 대해 자연스럽게 대화하듯 알려주세요.
                            </Stepdescription>
                        </StepContent>
                    </Step>

                    <Step>
                        <Stepnumber color="#9333ea">3</Stepnumber>
                        <StepContent>
                            <Steptitle>분석 결과 확인</Steptitle>
                            <Stepdescription>
                                AI가 분석한 영양 상태와 개선점을 확인하고 더 나은 식습관을 실천해보세요.
                            </Stepdescription>
                        </StepContent>
                    </Step>
                </Stepscontainer>
            </Featuressection>
            {/* Footer */}
            <FooterContainer>
                <FooterLogoWrapper>
                    <FooterLogo src="/images/icon.png" alt="NutriBot Logo" />
                    <FooterText>NutriBot</FooterText>
                </FooterLogoWrapper>
                <p>2025 니코내코딩 Team01 박소정 전한나 이수진 김해진</p>
            </FooterContainer>
        </Container>
    );
}

export default MainPage;
