import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <div className="flex flex-col min-h-screen text-primary-foreground">
            <BrowserRouter>
                <header className="bg-yellow-800 text-center text-3xl font-bold py-4 pb-5" style={{fontFamily: 'Wolin'}}>
                    <a href="/">나도 이제 옛집 박사</a>
                </header>
                <main className="relative min-h-screen flex flex-col items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <img src="/background.jpg" alt="background"
                             className="w-full h-full object-cover brightness-30"/>
                    </div>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/quiz" element={<QuizPage/>}/>
                        <Route path="/result" element={<ResultPage/>}/>
                        <Route path="/*" element={<NotFoundPage/>}/>
                    </Routes>
                </main>
                <footer className="bg-gray-800 text-white py-10 px-4">
                    <div
                        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                        <div>
                            <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                                <a href="http://www.ntculture.or.kr/" target="_blank"><img src="/logo.png" alt="logo" className="invert grayscale h-10"/></a>
                            </div>
                            <div className="flex justify-center md:justify-start gap-4 text-lg mb-2">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                            <p className="font-bold text-lg">문의</p>
                            <p>02-3675-3401~2</p>
                            <p>ntfund@naver.com</p>
                            <p>자원활동가 <a href="https://linktr.ee/zihoahn" target="_blank">안지호</a></p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">후원</p>
                            <p>신한은행 100-020-297069</p>
                            <p>(예금주: 내셔널트러스트문화)</p>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-8 text-gray-400">
                        © 2025 The National Trust of Korea, Cultural Heritage Foundation.<br/>All rights reserved.
                    </div>
                </footer>
            </BrowserRouter>
        </div>
    )
}

export default App
