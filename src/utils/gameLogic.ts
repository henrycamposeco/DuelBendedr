import { ElementType } from '../models/Element.ts';
import { ELEMENTS } from './elementRelations.ts';
import {GameResult, ResultType} from "../models/GameResult.ts";
import {Player, PlayerType} from "../models/Player.ts";

const HEALTH_DECREASE_PERCENTAGE = 20;
const MAX_HEALTH = 100;

export function determineRoundResult(playerElement: ElementType, computerElement: ElementType): ResultType {
  if (playerElement === computerElement) {
    return ResultType.DRAW;
  }

  const playerElementObj = ELEMENTS[playerElement];
  
  if (playerElementObj.venceA.includes(computerElement)) {
    return ResultType.WIN;
  } else if (playerElementObj.pierdeContra.includes(computerElement)) {
    return ResultType.LOSE;
  }
  
  // Si no es una victoria ni una derrota directa, es un empate
  return ResultType.DRAW;
}

export function updatePlayerHealth(player: Player, result: ResultType | unknown): Player {
  if (result === ResultType.LOSE) {
    const newHealth = Math.max(0, player.health - HEALTH_DECREASE_PERCENTAGE);
    return { ...player, health: newHealth };
  }
  return player;
}

export function checkGameOver(human: Player, computer: Player): GameResult {
  if (human.health <= 0) {
    return { winner: PlayerType.COMPUTER, isGameOver: true };
  }
  
  if (computer.health <= 0) {
    return { winner: PlayerType.HUMAN, isGameOver: true };
  }
  
  return { winner: null, isGameOver: false };
}

export function resetGame(): [Player, Player] {
  const human: Player = {
    type: PlayerType.HUMAN,
    health: MAX_HEALTH,
    selectedElement: null
  };
  
  const computer: Player = {
    type: PlayerType.COMPUTER,
    health: MAX_HEALTH,
    selectedElement: null
  };
  
  return [human, computer];
}