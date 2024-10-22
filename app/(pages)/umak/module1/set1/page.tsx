"use client";

import { useState, useEffect } from "react";
import { questions as questionData } from "@/app/actions/module1/module1Action1/questions";
import Link from "next/link";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

// Function to shuffle the questions array
const shuffleArray = (array: Question[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Shuffle the questions when the component loads
  useEffect(() => {
    setQuestions(shuffleArray([...questionData]));
  }, []);

  if (questions.length === 0) return null; // Ensure that questions are loaded before rendering

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
    const half = totalQuestions / 2;
    const passed = score >= half;

    // Conditional result message
    let resultMessage;
    let imageSrc;

    if (score === totalQuestions) {
      resultMessage = "Bat mo Pinerfect?";
      imageSrc = "/assets/perfect.jpg"; // Path to your perfect score image
    } else if (score === half) {
      resultMessage = "Kulang yung silay mo sa naglalambaras";
      imageSrc = "/assets/muntik.jpg"; // Path to your half score image
    } else if (passed) {
      resultMessage = "Pasado yarn? bongga ka";
      imageSrc = "/assets/junie.jpg"; // Path to your pass image
    } else {
      resultMessage = "ehh? HAHAHAH";
      imageSrc = "/assets/iyak.jpg"; // Path to your fail image
    }

    return (
      <div className="p-6 text-center">
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
            passed ? "text-green-500" : "text-red-500"
          }`}
        >
          {resultMessage}
        </h2>
        <h3 className="text-xl font-bold mb-2">Review Incorrect Answers:</h3>
        {questions.map((question, idx) => {
          if (userAnswers[idx] !== question.correctAnswer) {
            return (
              <div
                key={question.id}
                className="mb-4 border-[1px] border-solid border-[#808080]"
              >
                <p className="font-semibold">{question.question}</p>
                <p>Your answer: {question.options[userAnswers[idx]]}</p>
                <p>
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
              </div>
            );
          }
          return null;
        })}
        <Link
          href={"/umak"}
          className="mt-10 flex items-center justify-center text-center w-[150px] h-[50px] bg-blue-500 text-white rounded-[5px]"
        >
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 text-center w-screen h-screen bg-[#47366D] text-[#fafafa] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#39ff14]">Module1: Set 1</h1>
        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <p className="mb-4">{currentQuestion.question}</p>
        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className=" bg-[#8a6fdf] text-white py-2 px-4 rounded hover:bg-blue-700"
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
          Return to Menu
        </Link>

        <div className="flex flex-col items-end">
          <p>&copy; topepe</p>
        </div>
      </div>
    </>
  );
};

export default Home;