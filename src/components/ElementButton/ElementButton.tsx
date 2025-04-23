import {FunctionComponent} from 'preact';
import {ElementType} from '../../models/Element.ts';
import {ELEMENTS} from '../../utils/elementRelations.ts';
import './ElementButton.css';

interface ElementButtonProps {
    element: ElementType;
    onClick: (element: ElementType) => void;
    selected?: boolean;
}

export const ElementButton: FunctionComponent<ElementButtonProps> = ({
                                                                         element,
                                                                         onClick,
                                                                         selected = false
                                                                     }) => {
    const elementData = ELEMENTS[element];

    return (
        <button
            className={`element-button ${selected ? 'selected' : ''}`}
            onClick={() => onClick(element)}
        >
            <span className="element-emoji">{elementData.emoji}</span>
            <span className="element-name">{element}</span>
        </button>
    );
};