import { ElementType } from './Element';
import { PlayerType } from './Player';

export enum ResultType {
  WIN = "WIN",
  LOSE = "LOSE",
  DRAW = "DRAW"
}

export interface RoundResult {
  playerElement: ElementType;
  computerElement: ElementType;
  result: ResultType;
}

export interface GameResult {
  winner: PlayerType | null;
  isGameOver: boolean;
}