"use client";

import ScoreBox from "@/components/Scorebox";
import { useEffect, useState } from "react";

type Score = {
  label: string;
  score: number;
  totalQuestions: number;
  taken: number;
};

const Scores = () => {
  const [scores, setScores] = useState<Score[]>([]);

  const clearHistory = () => {
    if (!confirm("Are you sure you want to clear all scores?")) return;
    localStorage.removeItem("scores");
    setScores([]);
  };

  useEffect(() => {
    const raw = localStorage.getItem("scores");
    if (!raw) return;

    try {
      const parsed: Score[] = JSON.parse(raw);
      parsed.sort((a, b) => b.taken - a.taken);
      setScores(parsed);
    } catch (err) {
      console.error("Invalid scores data:", err);
      localStorage.removeItem("scores");
    }
  }, []);

  return (
    <div className="container mx-auto max-w-screen-sm w-11/12 flex flex-col gap-4 my-2">
      <p className="font-bold text-4xl my-5 text-green-400 ">Score History</p>
      {scores.length > 0 && (
        <button
          onClick={clearHistory}
          className="gap-2 flex items-center justify-evenly text-center p-2 border border-red-400 text-red-400 rounded-md"
        >
          <span>Clear History</span>
        </button>
      )}
      {scores.length > 0 ? (
        scores.map((score, index) => (
          <ScoreBox
            key={index}
            label={score.label}
            score={score.score}
            totalQuestions={score.totalQuestions}
            taken={score.taken}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">No scores found.</p>
      )}
    </div>
  );
};

export default Scores;
