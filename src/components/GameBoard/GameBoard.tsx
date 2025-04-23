import {FunctionComponent} from 'preact';
import {useState} from 'preact/hooks';
import {ElementType} from '../../models/Element.ts';
import {RoundResult} from '../../models/GameResult.ts';
import {ElementButton} from '../ElementButton/ElementButton.tsx';
import {ResultDisplay} from '../ResultDisplay/ResultDisplay.tsx';
import {determineRoundResult} from '../../utils/gameLogic.ts';
import {getRandomElement} from '../../utils/computerAI.ts';
import './GameBoard.css';

interface GameBoardProps {
    onRoundComplete: (result: RoundResult) => void;
}

export const GameBoard: FunctionComponent<GameBoardProps> = ({onRoundComplete}) => {
    const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
    const [roundResult, setRoundResult] = useState<RoundResult | null>(null);

    const handleElementSelect = (element: ElementType) => {
        setSelectedElement(element);
    };

    const handlePlayRound = () => {
        if (!selectedElement) return;

        const computerElement = getRandomElement();
        const result = determineRoundResult(selectedElement, computerElement);

        const newRoundResult = {
            playerElement: selectedElement, computerElement, result
        };

        setRoundResult(newRoundResult);
        onRoundComplete(newRoundResult);

        // Reiniciamos la selección para la siguiente ronda
        setSelectedElement(null);
    };

    return (<div className="game-board">
            <div className="elements-grid">
                {Object.values(ElementType).map(element => (<ElementButton
                        key={element}
                        element={element}
                        onClick={handleElementSelect}
                        selected={selectedElement === element}
                    />))}
            </div>

            <button
                className="play-button"
                disabled={!selectedElement}
                onClick={handlePlayRound}
            >
                Jugar Ronda
            </button>

            {roundResult && <ResultDisplay result={roundResult}/>}
        </div>);
};