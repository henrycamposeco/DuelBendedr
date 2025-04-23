import { FunctionComponent } from 'preact';
import { PlayerType } from '../../models/Player.ts';
import './HealthBar.css';

interface HealthBarProps {
    playerType: PlayerType;
    health: number;
}

export const HealthBar: FunctionComponent<HealthBarProps> = ({ playerType, health }) => {
    return (
        <div className="health-bar-container">
            <div className="health-bar-label">
                {playerType === PlayerType.HUMAN ? 'Jugador' : 'Computadora'}
            </div>
            <div className="health-bar">
                <div
                    className="health-bar-fill"
                    style={{ width: `${health}%` }}
                />
            </div>
            <div className="health-text">{health}%</div>
        </div>
    );
};