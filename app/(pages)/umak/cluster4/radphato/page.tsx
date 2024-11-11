"use client";

import { useState, useEffect } from "react";
import { questions as questionData } from "@/app/actions/cluster4/RadPhatoAction/questions";
import Link from "next/link";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // Optional for better confetti rendering

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  rationale: string;
};

// Function to shuffle the questions array
const shuffleArray = (array: Question[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const SecondSet = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Get the window size for Confetti (optional)
  const { width, height } = useWindowSize();

  // Shuffle the questions when the component loads
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
    const halfScore = totalQuestions / 2;

    // Conditional result message and image logic
    let resultMessage;
    let imageSrc;

    if (score === totalQuestions) {
      resultMessage = "Claim the cash reward!";
      imageSrc = "/assets/pinisna.jpg"; // Path to your perfect score image
    } else if (score === halfScore) {
      resultMessage = "Muntik na ma-daybors";
      imageSrc = "/assets/muntik.jpg"; // Path to your half score image
    } else if (score >= halfScore) {
      resultMessage = "You Pass the Mock Exam!";
      imageSrc = "/assets/junie.jpg"; // Path to your pass image
    } else {
      resultMessage = "ehh? HAHAHAHA";
      imageSrc = "/assets/iyak.jpg"; // Path to your fail image
    }

    return (
      <div className="p-6 text-center bg-[#fafafa]">
        {/* Trigger Confetti when the user passes */}
        {score >= halfScore && <Confetti width={width} height={height} />}

        <h2 className="text-2xl font-bold mb-4">
          Your Score: {score}/{totalQuestions}
        </h2>
        {/* Display the image before the result message */}
        <img
          src={imageSrc}
          alt={resultMessage}
          className="mx-auto mb-4 w-32 h-32"
        />
        <h2
          className={`text-xl font-bold mb-4 ${
            score >= halfScore ? "text-green-500" : "text-red-500"
          }`}
        >
          {resultMessage}
        </h2>
        <h3 className="text-xl font-bold mb-2">
          Review Answers and Rationale:
        </h3>
        {questions.map((question, idx) => {
          const isCorrect = userAnswers[idx] === question.correctAnswer;

          return (
            <div
              key={question.id}
              className={`mb-4 p-4 border-4 rounded-lg ${
                isCorrect ? "border-green-500" : "border-red-500"
              }`}
            >
              <p className="font-semibold">{question.question}</p>
              <p>Your answer: {question.options[userAnswers[idx]]}</p>
              <p>Correct answer: {question.options[question.correctAnswer]}</p>
              {/* Display the rationale for each question */}
              <p className="italic">Rationale: {question.rationale}</p>
            </div>
          );
        })}
        <Link
          href={"/umak"}
          className="mt-10 flex items-center justify-center text-center w-[200px] h-[50px] bg-blue-500 text-white rounded-[5px]"
        >
          <div>Return to Menu</div>
        </Link>
      </div>
    );
  }

  if (!questions.length) return null; // To avoid rendering before the questions are loaded

  return (
    <div className="p-6 text-center w-screen h-screen bg-[#47366D] text-[#fafafa] flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-[#39ff14]">Cluster 4: Rad Phato</h1>
      <h2 className="text-2xl font-bold mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="bg-[#8a6fdf] text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <Link
        href={"/umak"}
        className="mt-10 flex items-center justify-center text-center w-[150px] h-[50px] bg-blue-500 text-white rounded-[5px]"
      >
        <div>Return to Menu</div>
      </Link>
      <div className="flex flex-col items-end">
        <p>&copy; topepe</p>
      </div>
    </div>
  );
};

export default SecondSet;
