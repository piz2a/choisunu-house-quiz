import {QUIZ_DATA} from "../QuizData.ts";
import {useContext} from "react";
import {UserAnswerContext} from "../App.tsx";

const getResultInfo = (count: number) => {
    if (count <= 1) {
        return {
            title: "옛집 어린이",
            description: "많이 노력하세요~",
            linkText: "옛집 도슨트 소개 보기",
            linkUrl: "https://example.com/docent",
        };
    } else if (count <= 3) {
        return {
            title: "옛집 초등학생",
            description: "좀 더 노력이 필요해요!",
            linkText: "옛집 도슨트 소개 보기",
            linkUrl: "https://example.com/docent",
        };
    } else if (count <= 5) {
        return {
            title: "옛집 고등학생",
            description: "조금만 더 공부하면 되겠는데요?",
            linkText: "옛집 도슨트 소개 보기",
            linkUrl: "https://example.com/docent",
        };
    } else {
        return {
            title: "옛집 명예박사",
            description: "자원활동가에 도전해보세요!",
            linkText: "활동 후기 보러가기",
            linkUrl: "https://example.com/volunteer",
        };
    }
};

export default function ResultPage() {
    const userAnswers = useContext(UserAnswerContext);
    const correctCount = userAnswers.reduce((acc, answer, idx) => {
        return acc + (answer === QUIZ_DATA[idx].answer ? 1 : 0);
    }, 0);

    const { title, description, linkText, linkUrl } = getResultInfo(correctCount);

    return (
        <div className="z-10 bg-gray-900 bg-opacity-90 rounded-lg p-6 w-11/12 max-w-md text-center text-white">
            <h1 className="text-3xl font-bold mb-4">퀴즈 결과</h1>
            <p className="text-xl mb-2">총 {QUIZ_DATA.length}문제 중 {correctCount}문제 정답!</p>

            <p className="text-2xl font-bold text-yellow-400 mt-6">당신은?</p>
            <p className="text-3xl font-extrabold text-yellow-300 mb-2">[{title}]</p>
            <p className="text-lg mb-4">{description}</p>

            <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-200"
            >
                {linkText}
            </a>
        </div>
    );
}