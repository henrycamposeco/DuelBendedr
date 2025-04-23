import { ElementType } from './Element';

export enum PlayerType {
  HUMAN = "HUMAN",
  COMPUTER = "COMPUTER"
}

export interface Player {
  type: PlayerType;
  health: number;
  selectedElement: ElementType | null;
}