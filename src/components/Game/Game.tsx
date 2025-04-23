import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Player, PlayerType } from '../../models/Player';
import { RoundResult, GameResult } from '../../models/GameResult';
import { HealthBar } from '../HealthBar/HealthBar';
import { GameBoard } from '../GameBoard/GameBoard';
import { updatePlayerHealth, checkGameOver, resetGame } from '../../utils/gameLogic';
import './Game.css';

export const Game: FunctionComponent = () => {
    const [human, setHuman] = useState<Player>({
        type: PlayerType.HUMAN,
        health: 100,
        selectedElement: null
    });

    const [computer, setComputer] = useState<Player>({
        type: PlayerType.COMPUTER,
        health: 100,
        selectedElement: null
    });

    const [gameResult, setGameResult] = useState<GameResult>({
        winner: null,
        isGameOver: false
    });

    const handleRoundComplete = (roundResult: RoundResult) => {
        // Actualizar la salud basado en el resultado
        const updatedHuman = updatePlayerHealth(
            human,
            roundResult.result === 'LOSE' ? 'LOSE' : 'WIN'
        );

        const updatedComputer = updatePlayerHealth(
            computer,
            roundResult.result === 'WIN' ? 'LOSE' : 'WIN'
        );

        setHuman(updatedHuman);
        setComputer(updatedComputer);

        // Comprobar si el juego ha terminado
        const gameOverStatus = checkGameOver(updatedHuman, updatedComputer);
        setGameResult(gameOverStatus);
    };

    const handleRestart = () => {
        const [newHuman, newComputer] = resetGame();
        setHuman(newHuman);
        setComputer(newComputer);
        setGameResult({
            winner: null,
            isGameOver: false
        });
    };

    return (
        <div className="game-container">
            <h1>DuelBender</h1>

            <div className="health-bars">
                <HealthBar playerType={PlayerType.HUMAN} health={human.health} />
                <HealthBar playerType={PlayerType.COMPUTER} health={computer.health} />
            </div>

            {gameResult.isGameOver ? (
                <div className="game-over">
                    <h2>
                        {gameResult.winner === PlayerType.HUMAN
                            ? '¡Has ganado el duelo!'
                            : 'Has perdido el duelo'}
                    </h2>
                    <button className="restart-button" onClick={handleRestart}>
                        Jugar de nuevo
                    </button>
                </div>
            ) : (
                <GameBoard onRoundComplete={handleRoundComplete} />
            )}
        </div>
    );
};