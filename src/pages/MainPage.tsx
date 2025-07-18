import {useNavigate} from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img src="/public/background.jpg" alt="background" className="w-full h-full object-cover brightness-50"/>
            </div>

            <div className="z-10 bg-gray-900 bg-opacity-90 rounded-lg p-6 w-11/12 max-w-md text-center">
                <h2 className="text-2xl font-bold mb-2">나도 이제 옛집 박사</h2>
                <p className="mb-6">
                    옛집 도슨트를 전부 들은 당신,<br/>
                    과연 옛집 명예박사가 될 수 있을까?
                </p>
                <div className="flex justify-center gap-6">
                    <button className="text-3xl bg-gray-700 hover:bg-gray-600 rounded-lg w-40 h-16" onClick={() => navigate("/quiz#0")}>퀴즈 시작</button>
                </div>
            </div>
        </main>
    )
}