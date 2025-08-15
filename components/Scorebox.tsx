type ScoreBoxProps = {
  label: string;
  score: number;
  totalQuestions: number;
  taken: number;
};

export default function ScoreBox({ label, score, totalQuestions, taken }: ScoreBoxProps) {
  const percentage = (score / totalQuestions) * 100;
  const isPassing = percentage >= 75;

  return (
    <div className="w-full  rounded-md bg-white shadow-md border border-gray-200 p-4 flex flex-col gap-1">
      <h3 className="text-lg font-semibold text-gray-800">{label || "Untitled Exam"}</h3>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Score</span>
        <span className={`text-xl font-bold ${isPassing ? "text-green-600" : "text-red-600"}`}>
          {score} / {totalQuestions}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Percentage</span>
        <span className={`text-sm font-medium ${isPassing ? "text-green-600" : "text-red-600"}`}>
          {percentage.toFixed(0)}%
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-2">
        <span className="text-sm text-gray-500">Date Taken</span>
        <span className="text-sm text-gray-700">
          {new Intl.DateTimeFormat(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(taken))}
        </span>
      </div>
    </div>
  );
}
