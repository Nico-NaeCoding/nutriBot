import { Container } from './MainPage.style.js';
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
            <Header />
            <CustomButton ButtonMessage="시작하기 >" ButtonOnClick={handlechatButton} />
        </Container>
    );
}

export default MainPage;
