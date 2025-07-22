import {QUIZ_DATA} from "../QuizData.ts";
import { useAnswerStore } from '../stores/answerStore'
import {Card} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

const getResultInfo = (count: number) => {
    if (count <= 1) {
        return {
            title: "옛집 어린이",
            description: "많이 노력하세요~",
            linkText: "옛집 도슨트 소개 보기",
            linkUrl: "https://www.youtube.com/watch?v=FU7UATaPVGs",
        };
    } else if (count <= 3) {
        return {
            title: "옛집 초등학생",
            description: "좀 더 노력이 필요해요!",
            linkText: "옛집 도슨트 소개 보기",
            linkUrl: "https://www.youtube.com/watch?v=FU7UATaPVGs",
        };
    } else if (count <= 5) {
        return {
            title: "옛집 고등학생",
            description: "조금만 더 공부하면 되겠는데요?",
            linkText: "옛집 도슨트 소개 보기",
            linkUrl: "https://www.youtube.com/watch?v=FU7UATaPVGs",
        };
    } else {
        return {
            title: "옛집 명예박사",
            description: "자원활동가에 도전해보세요!",
            linkText: "활동 후기 보러 가기",
            linkUrl: "https://cafe.naver.com/f-e/cafes/11020990/menus/40?viewType=L",
        };
    }
};

export default function ResultPage() {
    const { userAnswers } = useAnswerStore();
    const correctCount = userAnswers.reduce((acc, answer, idx) => {
        return acc + (answer === QUIZ_DATA[idx].answer ? 1 : 0);
    }, 0);

    const { title, description, linkText, linkUrl } = getResultInfo(correctCount);

    return (
        <Card className="z-10 bg-transparent rounded-lg p-6 w-11/12 max-w-md text-center text-white h-150 flex flex-col justify-center gap-5 items-center">
            <h1 className="text-3xl font-bold mb-4" style={{fontFamily: 'Kanibuk'}}>퀴즈 결과</h1>
            <p className="text-xl mb-2">총 {QUIZ_DATA.length}문제 중 {correctCount}문제 정답!</p>

            <p className="text-2xl font-bold mt-6">당신은</p>
            <p className="text-4xl font-extrabold text-blue-300 mb-2" style={{fontFamily: 'Wolin'}}>[{title}]</p>
            <p className="text-lg mb-4">{description}</p>

            <Button
                onClick={() => window.open(linkUrl, '_blank')}
                style={{fontFamily: 'Kanibuk'}}
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 rounded-lg w-50 h-16 text-lg"
            >
                {linkText}
            </Button>
        </Card>
    );
}