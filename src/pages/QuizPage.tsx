import {useLocation, useNavigate} from "react-router-dom";
import {QUIZ_DATA} from "../QuizData.ts";

export default function QuizPage({ handleClickOX }: { handleClickOX: (quizIndex: number, answer: boolean) => void }) {
    const location = useLocation();
    const navigate = useNavigate();

    // ex: "#2_1" → ["2", "1"]
    const hash = location.hash.replace("#", "");
    const [rawIndex, rawAnswer] = hash.split("_");

    const quizIndex = parseInt(rawIndex, 10);
    const userAnswer = rawAnswer === "1" ? true : rawAnswer === "0" ? false : null;

    const quiz = QUIZ_DATA[quizIndex];

    if (!quiz) {
        return <p>문제가 존재하지 않습니다.</p>;
    }

    const isCorrect = userAnswer === quiz.answer;
    const showExplanation = userAnswer !== null;

    return (
        <div className="z-10 bg-gray-900 bg-opacity-90 rounded-lg p-6 w-11/12 max-w-md text-center">
            <h2 className="text-2xl font-bold mb-2">박사 퀴즈 {quizIndex + 1}</h2>
            <p className="mb-6">
                {quiz.question}
            </p>
            {showExplanation ? (
                <>
                    <p className={`mb-2 font-bold text-lg ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                        {isCorrect ? "정답입니다!" : "틀렸습니다."}
                    </p>
                    <p className="text-white">{quiz.explanation}</p>
                    {quizIndex === QUIZ_DATA.length - 1 ? (
                        <button
                            className="text-3xl bg-blue-700 hover:bg-blue-600 rounded-lg w-40 h-16"
                            onClick={() => navigate("/result")}
                        >
                            결과 보기
                        </button>
                    ) : (
                        <button
                            className="text-3xl bg-gray-700 hover:bg-gray-600 rounded-lg w-40 h-16"
                            onClick={() => navigate(`#${quizIndex + 1}`)}
                        >
                            다음 문제
                        </button>
                    )}
                </>
            ) : (
                <div className="flex justify-center gap-6">
                    <button
                        className="text-3xl bg-gray-700 hover:bg-gray-600 rounded-lg w-16 h-16"
                        onClick={() => handleClickOX(quizIndex, true)}
                    >
                        O
                    </button>
                    <button
                        className="text-3xl bg-gray-700 hover:bg-gray-600 rounded-lg w-16 h-16"
                        onClick={() => handleClickOX(quizIndex, false)}
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    )
}