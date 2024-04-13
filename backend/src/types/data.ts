interface QuizQuestion {
  id: number;
  title: string;
  answers: string[];
  correctAnswer: number;
}

interface Quiz {
  id: number;
  name: string;
  playedCount: number;
  rating: number[];
  dateOfCreation: Date;
  questions: QuizQuestion[];
}

export type { QuizQuestion, Quiz };
