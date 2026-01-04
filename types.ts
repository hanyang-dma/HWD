export type GameState = 'intro' | 'playing' | 'feedback' | 'finished';

export type ChallengeType = 'archive' | 'commission'; // Archive = Identify, Commission = Choose for client

export interface Option {
  id: string;
  label: string;
  isCorrect: boolean;
  feedbackText: string;
}

export interface LevelData {
  id: number;
  era: string; // e.g., "1750-1850"
  title: string; // e.g., "工业革命前奏"
  description: string;
  type: ChallengeType;
  question: string;
  options: Option[];
  visualKeyword: string; // For generating decorative background hints
}
