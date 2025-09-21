import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from "./Pages/MainPage/MainPage";
import ChatPage from "./Pages/ChatPage/ChatPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<MainPage />} /> */}
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
