import {useNavigate} from "react-router-dom";
import {Card} from "@/components/ui/card.tsx";

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <Card className="z-10 bg-gray-900 rounded-lg p-6 max-w-md text-center w-11/12 h-150 flex flex-col justify-center gap-5">
            <h1 className="text-3xl font-bold mb-10">최순우 옛집</h1>
            <h2 className="text-4xl font-bold mb-2">나도 이제 옛집 박사</h2>
            <p className="mb-4 text-lg/9">
                옛집 도슨트를 전부 들은 당신,<br/>
                과연 옛집 명예박사가 될 수 있을까?
            </p>
            <div className="flex justify-center gap-6 mb-10">
                <button className="text-3xl bg-gray-700 hover:bg-gray-600 rounded-lg w-40 h-16" onClick={() => navigate("/quiz#0")}>퀴즈 시작</button>
            </div>
        </Card>
    )
}