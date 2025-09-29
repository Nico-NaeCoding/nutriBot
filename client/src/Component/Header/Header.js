import { Container, Headertitle } from './Header.style.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MotionLink = motion(Link); // motion 버전의 Link

const LogoLink = styled(MotionLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
`;

const Header = () => {
    return (
        <Container>
            <LogoLink
                to="/"
                whileTap={{ scale: 0.95 }} // 로고+텍스트 같이 눌리는 효과
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
                <img src="./images/green.png" alt="logo" style={{ width: 40, height: 40, marginRight: 8 }} />
                <Headertitle>NutriBot</Headertitle>
            </LogoLink>
        </Container>
    );
};

export default Header;
