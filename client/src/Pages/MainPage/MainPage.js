import { Container } from "./MainPage.style.js";
import CustomButton from "../../Component/CustomButton/CustomButton.js";
import Header from "../../Component/Header/Header.js";
function MainPage() {
    return <Container><Header/><CustomButton ButtonMessage="시작하기 >" />  </Container>;

}

export default MainPage;
