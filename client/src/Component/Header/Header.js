import { Container, Headericone, Headertitle } from './Header.style.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
    display: flex;
    align-items: center; /* 로고랑 텍스트를 세로 중앙 정렬 */
    text-decoration: none;
    color: inherit; /* 텍스트 색상 안 바뀌게 */
`;

const Header = () => {
    return (
        <Container>
            <LogoLink to="/">
                <Headericone src="./images/green.png" alt="logo" />
                <Headertitle>NutriBot</Headertitle>
            </LogoLink>
        </Container>
    );
};

export default Header;
