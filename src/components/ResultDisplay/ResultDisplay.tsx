import { FunctionComponent } from 'preact';
import { RoundResult, ResultType } from '../../models/GameResult.ts';
import { ELEMENTS, ELEMENT_INTERACTION_MESSAGES } from '../../utils/elementRelations.ts';
import './ResultDisplay.css';

interface ResultDisplayProps {
    result: RoundResult | null;
}

export const ResultDisplay: FunctionComponent<ResultDisplayProps> = ({ result }) => {
    if (!result) return null;

    const { playerElement, computerElement, result: roundResult } = result;
    const playerEmoji = ELEMENTS[playerElement].emoji;
    const computerEmoji = ELEMENTS[computerElement].emoji;

    let resultText = '';
    let resultClass = '';
    let reasonText = '';

    const getRandomDrawMessage = () => {
        const messages = [
            "¡Las fuerzas se igualan! Los elementos danzan en equilibrio.",
            "¡Ningún elemento cede! La batalla continúa.",
            "¡Poder contra poder! Los elementos se neutralizan.",
            "¡Choque de titanes! Ambas fuerzas se mantienen firmes.",
            "¡Duelo de iguales! Los elementos se respetan mutuamente."
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    };

    switch (roundResult) {
        case ResultType.WIN:
            resultText = '¡Ganaste esta ronda!';
            resultClass = 'win';
            reasonText = ELEMENT_INTERACTION_MESSAGES[computerElement]?.[playerElement] || '';
            break;
        case ResultType.LOSE:
            resultText = 'Perdiste esta ronda';
            resultClass = 'lose';
            reasonText = ELEMENT_INTERACTION_MESSAGES[playerElement]?.[computerElement] || '';
            break;
        case ResultType.DRAW:
            resultText = 'Empate';
            resultClass = 'draw';
            reasonText = getRandomDrawMessage();
            break;
    }


    return (
        <div className={`result-display ${resultClass}`}>
            <div className="elements-used">
                <div className="player-element">
                    <span className="element-emoji">{playerEmoji}</span>
                    <span>Tú</span>
                </div>
                <div className="vs">VS</div>
                <div className="computer-element">
                    <span className="element-emoji">{computerEmoji}</span>
                    <span>PC</span>
                </div>
            </div>
            {reasonText && <div className="reason-text">{reasonText}</div>}
            <div className="result-text">{resultText}</div>

        </div>
    );
};