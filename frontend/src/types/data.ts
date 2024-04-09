interface Quiz {
  id: number;
  name: string;
  playedCount: number;
  rating: number;
  dateOfCreation: Date;
  questions: [
    {
      id: number;
      number: number;
      title: string;
      answers: string[];
      correctAnswer: number;
    }
  ];
}

export type { Quiz };
