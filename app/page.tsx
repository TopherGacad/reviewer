"use client"

import { useState } from 'react';
import { questions } from './data/questions';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const Home = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

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
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
        <h3 className="text-xl font-bold mb-2">Review Incorrect Answers:</h3>
        {questions.map((question, idx) => {
          if (userAnswers[idx] !== question.correctAnswer) {
            return (
              <div key={question.id} className="mb-4">
                <p className="font-semibold">{question.question}</p>
                <p>Your answer: {question.options[userAnswers[idx]]}</p>
                <p>Correct answer: {question.options[question.correctAnswer]}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
