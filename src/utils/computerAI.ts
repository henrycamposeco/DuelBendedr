import { ElementType } from '../models/Element';

export function getRandomElement(): ElementType {
  const elements = Object.values(ElementType);
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}
