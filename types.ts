export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  rationale?: string;
  about?: string;
};

export type QuestionSet = {
  label: string;
  questions: Question[];
  description?: string;
  codeRequired?: boolean;
};
