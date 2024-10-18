"use client"

import { useState } from 'react';
import { questions } from '../module2/questions';
import Link from 'next/link';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const SecondSet = () => {
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
    <>
    
    <div className="p-6 text-center w-screen h-screen">
      <h1 className='text-3xl font-bold'>Set 2</h1>
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
      
        <Link href={"./"} className='mt-10 flex items-center justify-center text-center w-[200px] h-[50px] bg-blue-500 text-white rounded-[5px]'>
                <div>Go back to first set</div>
        </Link>
      
    

      <div className='flex flex-col items-end'>

        <p>&copy; topepe</p>
      </div>

    </div>
   
    </>
  );
};

export default SecondSet;
