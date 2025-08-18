import HomeButton from "./HomeButton";
import { Question } from "@/types";

type Props = {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: string[];
  examId: string;
};

const ExamResultSummary: React.FC<Props> = ({ score, totalQuestions, questions, userAnswers }) => {
  const halfScore = totalQuestions / 2;

  let resultMessage: string;
  let imageSrc: string;

  if (score === totalQuestions) {
    resultMessage = "Perfect ka kasi";
    imageSrc = "/perfect.jpg";
  } else if (score === halfScore) {
    resultMessage = "Listen - Look and Listetn & Learn";
    imageSrc = "/muntik.jpg";
  } else if (score >= halfScore) {
    resultMessage = "Lagi ka naman pasado sakin be";
    imageSrc = "/junie.jpg";
  } else {
    resultMessage = "laban lang be!";
    imageSrc = "/iyak.jpg";
  }

  return (
    <div className="my-container text-white">
      <HomeButton message="Finish Exam" />

      <div className="flex flex-col lg:flex-row items-center mt-10 p-2 lg:p-20 justify-center gap-8 mb-6 text-center">
        <div className="flex flex-col items-center">
          <img
            src={imageSrc}
            alt={resultMessage}
            className={`mb-4 w-72 h-72 object-cover rounded-full border-4 shadow-lg ${
              score >= halfScore ? "border-green-500" : "border-red-500"
            }`}
          />
          <h2 className={`text-xl font-bold ${score >= halfScore ? "text-green-500" : "text-red-500"}`}>
            {resultMessage}
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div
            className={`w-40 h-40 flex items-center justify-center rounded-full text-white text-5xl font-extrabold shadow-inner ${
              score === totalQuestions
                ? "bg-gradient-to-br from-green-400 to-green-600"
                : score >= halfScore
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {score}/{totalQuestions}
          </div>
          <p className="mt-2 text-lg font-medium text-gray-300">Your Score</p>
        </div>
      </div>

      <h3 className="text-2xl my-6 text-white text-center">Review Your Answers</h3>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-center">
        {questions.map((question, idx) => {
          const selected = userAnswers[idx] ?? "";
          const isCorrect = selected === question.correctAnswer;

          const cardBg = isCorrect ? "bg-green-100" : "bg-red-100";
          const cardBorder = isCorrect ? "border border-green-500" : "border-2 border-red-500";

          return (
            <div
              key={question.id}
              className={`w-full lg:w-[48%] rounded-2xl shadow-md p-6 flex flex-col gap-4 text-gray-900 ${cardBg} ${cardBorder}`}
            >
              <h2 className="text-lg font-semibold">{question.question}</h2>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">Your answer:</span>
                  <span className={`font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                    {selected || "—"}
                  </span>
                </div>
                {!isCorrect && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Correct answer:</span>
                    <span className="text-green-600 font-semibold">{question.correctAnswer}</span>
                  </div>
                )}
              </div>

              {question.rationale && (
                <div className="bg-gray-50 border-l-4 border-blue-500 text-blue-900 p-4 rounded">
                  <p className="text-sm">
                    <span className="font-semibold">Rationale:</span> {question.rationale}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center items-center gap-2">
        <HomeButton message="Finish Exam" />
      </div>
    </div>
  );
};

export default ExamResultSummary;
