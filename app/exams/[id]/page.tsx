"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { questions as rawQuestions } from "@/data/questions";
import HomeButton from "@/components/HomeButton";
import ExamResultSummary from "@/components/ExamResultSummary";
import PageNotFound from "@/components/PageNotFound";
import { Question } from "@/types";
import { useUnlockCode } from "@/hooks/useUnlockCode";

const shuffleArray = (array: Question[], sampleSize = 40): Question[] =>
  array.toSorted(() => Math.random() - 0.5).slice(0, Math.min(sampleSize, array.length));

const Exam = () => {
  const params = useParams();
  const router = useRouter();
  const { isUnlocked } = useUnlockCode();

  const id = params.id as keyof typeof rawQuestions;

  const isValidSetId = id in rawQuestions;

  if (!isValidSetId) {
    return <PageNotFound />;
  }

  const set = rawQuestions[id];

  const questionData = set.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions(shuffleArray(questionData));
  }, []);

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleAnswer = (selectedOptionIndex: number) => {
    setUserAnswers([...userAnswers, selectedOptionIndex]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, idx) => {
      if (answer === questions[idx].correctAnswer) {
        score++;
      }
      return score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const totalQuestions = questions.length;

    return (
      <ExamResultSummary
        score={score}
        totalQuestions={totalQuestions}
        questions={questions}
        userAnswers={userAnswers}
      />
    );
  }

  if (!questions.length) {
    return <div className="flex justify-center items-center min-h-[80vh] text-blue-500 text-2xl">Loading exam...</div>;
  }

  if (set.codeRequired && !isUnlocked) {
    return router.push("/unlock");
  }

  return (
    <div className="my-container">
      <HomeButton />
      <div className="max-w-screen-xl mx-auto p-6 text-center min-h-[80vh]   flex flex-col justify-center gap-6">
        <div>
          <h1 className="text-xl font-bold text-pink-400">{set.label}</h1>
          <h2 className="text-2xl font-bold text-white">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
        </div>
        <p className="text-3xl my-4 text-[#6BE07B] font-semibold max-w-screen-md mx-auto">{currentQuestion.question}</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="bg-[#8a6fdf] text-white py-4 px-4 rounded hover:bg-blue-700 w-full lg:w-[48%]"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exam;
