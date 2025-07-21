import {useLocation, useNavigate} from "react-router-dom";
import {QUIZ_DATA} from "../QuizData.ts";
import {useAnswerStore} from "../stores/answerStore.ts";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function QuizPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {/* userAnswers, */setAnswer } = useAnswerStore();

    // ex: "#2_1" → ["2", "1"]
    const hash = location.hash.replace("#", "");
    const [rawIndex, rawAnswer] = hash.split("_");

    const quizIndex = parseInt(rawIndex, 10);
    const userAnswer = rawAnswer === "1" ? true : rawAnswer === "0" ? false : null;

    const quiz = QUIZ_DATA[quizIndex];

    if (!quiz) {
        return <p>문제가 존재하지 않습니다.</p>;
    }

    const handleClickOX = (answer: boolean) => {
        setAnswer(quizIndex, answer);
        // console.log(quizIndex, userAnswers, answer);
        navigate(`#${quizIndex}_${answer ? 1 : 0}`);
    }

    const isCorrect = userAnswer === quiz.answer;
    const showExplanation = userAnswer !== null;

    return (
        <Card className="z-10 bg-gray-900 rounded-lg p-6 max-w-md text-center w-11/12 h-150">
            <CardHeader className="mt-10">
                <CardTitle>
                    <h2 className="text-2xl font-bold mb-2">박사 퀴즈 {quizIndex + 1}</h2>
                </CardTitle>
                <CardDescription>
                    {quiz.question}
                </CardDescription>
                <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex justify-center gap-6">
                    <Button
                        className={
                            "text-3xl w-16 h-16 text-foreground border-0 " +
                            (showExplanation
                                ? quiz.answer
                                    ? "bg-green-400 hover:bg-green-200"
                                    : isCorrect
                                        ? "bg-gray-300 hover:bg-gray-400"
                                        : "bg-red-400 hover:bg-red-200"
                                : "bg-gray-300 hover:bg-gray-400")
                        }
                        onClick={() => (showExplanation ? null : handleClickOX(true))}
                    >
                        O
                    </Button>
                    <Button
                        className={
                            "text-3xl w-16 h-16 text-foreground border-0 " +
                            (showExplanation
                                ? quiz.answer
                                    ? isCorrect
                                        ? "bg-gray-300 hover:bg-gray-400"
                                        : "bg-red-400 hover:bg-red-200"
                                    : "bg-green-400 hover:bg-green-200"
                                : "bg-gray-300 hover:bg-gray-400")
                        }
                        onClick={() => (showExplanation ? null : handleClickOX(false))}
                    >
                        X
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col mt-10 items-center gap-5">
                {showExplanation ? (
                    <>
                        <p className={`mb-2 font-bold text-lg text-gray-300`}>
                            {isCorrect ? "정답입니다!" : "아쉽습니다..!"}
                            <br/>정답: {quiz.answer ? "O" : "X"}
                        </p>
                        <Textarea placeholder={quiz.explanation} disabled className="bg-gray-800 rounded-md p-6 w-11/12 h-30 pt-2 pl-3 pr-3" />
                        {quizIndex === QUIZ_DATA.length - 1 ? (
                            <Button
                                className="text-3xl bg-blue-600 hover:bg-blue-500 rounded-lg w-40 h-16"
                                onClick={() => navigate("/result")}
                            >
                                결과 보기
                            </Button>
                        ) : (
                            <Button
                                className="text-3xl bg-gray-700 hover:bg-gray-600 rounded-lg w-40 h-16"
                                onClick={() => navigate(`#${quizIndex + 1}`)}
                            >
                                다음 문제
                            </Button>
                        )}
                    </>
                ) : <></>}
            </CardFooter>
        </Card>
    )
}