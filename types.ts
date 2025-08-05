export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  rationale?: string;
};

export type QuestionSet = {
  label: string;
  questions: Question[];
  codeRequired?: boolean; 
};
