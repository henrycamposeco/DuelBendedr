import { Element, ElementType } from '../models/Element.ts';

// Definición de mensajes para cada combinación de derrota
export const ELEMENT_INTERACTION_MESSAGES: Record<any, any> = {
  [ElementType.FUEGO]: {
    [ElementType.AGUA]: "El fuego ruge con furia, pero es domado por el fluir sereno del agua que lo apaga sin esfuerzo.",
    [ElementType.TIERRA]: "Aunque el fuego devora, la tierra permanece firme, sofocando su llama bajo su peso ancestral."
  },
  [ElementType.RAYO]: {
    [ElementType.AGUA]: "El rayo danza veloz por el cielo, pero al tocar el agua, se dispersa y pierde su poder.",
    [ElementType.TIERRA]: "La tierra, sólida y cargada, absorbe la energía del rayo y la disipa en su interior como si fuera nada."
  },
  [ElementType.AGUA]: {
    [ElementType.HIELO]: "El agua es fluida, pero el hielo la congela y la encierra, robándole su libertad.",
    [ElementType.LAVA]: "La lava hierve con furia y transforma al agua en vapor, anulando su fuerza."
  },
  [ElementType.HIELO]: {
    [ElementType.FUEGO]: "El hielo resiste con dureza, pero ante el calor del fuego, se derrite sin oponer resistencia.",
    [ElementType.RAYO]: "Un rayo lo atraviesa con tal intensidad que lo rompe en mil cristales sin que pueda reaccionar."
  },
  [ElementType.TIERRA]: {
    [ElementType.TORMENTA]: "La tierra es fuerte, pero la tormenta la azota con furia, levantando polvo y rocas hasta desintegrarla.",
    [ElementType.AGUA]: "La tierra es fuerte, pero el agua la erosiona lentamente hasta quebrarla."
  },
  [ElementType.LAVA]: {
    [ElementType.TORMENTA]: "La tormenta la dispersa, apagando su fuego con lluvias y viento devastador.",
    [ElementType.AIRE]: "La lava avanza con poder, pero el aire la enfría hasta convertirla en piedra inerte."
  },
  [ElementType.AIRE]: {
    [ElementType.RAYO]: "El aire se mueve libre, pero el rayo lo atraviesa, partiéndolo como una lanza celestial.",
    [ElementType.HIELO]: "El hielo condensa la bruma y la vuelve sólida, atrapando al aire en prisión de escarcha."
  },
  [ElementType.TORMENTA]: {
    [ElementType.FUEGO]: "La tormenta ruge, pero el fuego la convierte en vapor, secando su furia.",
    [ElementType.AIRE]: "El aire la entiende y la divide desde dentro, rompiendo su estructura hasta calmarla."
  }
};

export const ELEMENTS: Record<ElementType, Element> = {
  [ElementType.FUEGO]: {
    type: ElementType.FUEGO,
    emoji: "🔥",
    venceA: [ElementType.HIELO, ElementType.TORMENTA],
    pierdeContra: [ElementType.AGUA, ElementType.TIERRA]
  },
  [ElementType.RAYO]: {
    type: ElementType.RAYO,
    emoji: "⚡",
    venceA: [ElementType.AIRE, ElementType.HIELO],
    pierdeContra: [ElementType.AGUA, ElementType.TIERRA]
  },
  [ElementType.AGUA]: {
    type: ElementType.AGUA,
    emoji: "🌊",
    venceA: [ElementType.FUEGO, ElementType.RAYO],
    pierdeContra: [ElementType.HIELO, ElementType.LAVA]
  },
  [ElementType.HIELO]: {
    type: ElementType.HIELO,
    emoji: "❄️",
    venceA: [ElementType.AGUA, ElementType.AIRE],
    pierdeContra: [ElementType.FUEGO, ElementType.RAYO]
  },
  [ElementType.TIERRA]: {
    type: ElementType.TIERRA,
    emoji: "🪨",
    venceA: [ElementType.RAYO, ElementType.FUEGO],
    pierdeContra: [ElementType.TORMENTA, ElementType.AGUA]
  },
  [ElementType.LAVA]: {
    type: ElementType.LAVA,
    emoji: "🌋",
    venceA: [ElementType.TIERRA, ElementType.HIELO],
    pierdeContra: [ElementType.TORMENTA, ElementType.AIRE]
  },
  [ElementType.AIRE]: {
    type: ElementType.AIRE,
    emoji: "💨",
    venceA: [ElementType.LAVA, ElementType.AGUA],
    pierdeContra: [ElementType.RAYO, ElementType.HIELO]
  },
  [ElementType.TORMENTA]: {
    type: ElementType.TORMENTA,
    emoji: "🌪️",
    venceA: [ElementType.TIERRA, ElementType.LAVA],
    pierdeContra: [ElementType.FUEGO, ElementType.AIRE]
  }
};