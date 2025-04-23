export enum ElementType {
  FUEGO = "FUEGO",
  RAYO = "RAYO",
  AGUA = "AGUA",
  HIELO = "HIELO",
  TIERRA = "TIERRA",
  LAVA = "LAVA",
  AIRE = "AIRE",
  TORMENTA = "TORMENTA"
}

export interface Element {
  type: ElementType;
  emoji: string;
  venceA: ElementType[];
  pierdeContra: ElementType[];
}