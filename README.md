# DuelBender

## Descripción
DuelBender es un juego de estrategia inspirado en el clásico "piedra, papel, tijera", pero con un sistema de elementos como armas. Los jugadores se enfrentan utilizando diferentes elementos con fortalezas y debilidades únicas, creando una dinámica de combate estratégica y emocionante.

## Sistema de Elementos

En DuelBender, cada elemento tiene sus propias fortalezas y debilidades en un sistema interconectado:

| Elemento | Vence a | Pierde contra | Empata con |
|----------|---------|---------------|------------|
| 🔥 Fuego | ❄️ Hielo, 🌪️ Tormenta | 🌊 Agua, 🪨 Tierra | ⚡ Rayo, 🌋 Lava, 💨 Aire |
| ⚡ Rayo | 💨 Aire, ❄️ Hielo | 🌊 Agua, 🪨 Tierra | 🔥 Fuego, 🌋 Lava, 🌪️ Tormenta |
| 🌊 Agua | 🔥 Fuego, ⚡ Rayo | ❄️ Hielo, 🌋 Lava | 🪨 Tierra, 💨 Aire, 🌪️ Tormenta |
| ❄️ Hielo | 🌊 Agua, 💨 Aire | 🔥 Fuego, ⚡ Rayo | 🪨 Tierra, 🌋 Lava, 🌪️ Tormenta |
| 🪨 Tierra | ⚡ Rayo, 🔥 Fuego | 🌪️ Tormenta, 🌊 Agua | ❄️ Hielo, 🌋 Lava, 💨 Aire |
| 🌋 Lava | 🪨 Tierra, ❄️ Hielo | 🌪️ Tormenta, 💨 Aire | 🔥 Fuego, ⚡ Rayo, 🌊 Agua |
| 💨 Aire | 🌋 Lava, 🌊 Agua | ⚡ Rayo, ❄️ Hielo | 🔥 Fuego, 🪨 Tierra, 🌪️ Tormenta |
| 🌪️ Tormenta | 🪨 Tierra, 🌋 Lava | 🔥 Fuego, 💨 Aire | ⚡ Rayo, 🌊 Agua, ❄️ Hielo |

## Cómo jugar

1. **Elegir elemento**: Cada jugador selecciona un elemento de los 8 disponibles.
2. **Batalla**: Los elementos se enfrentan según la tabla de relaciones:
    - Si tu elemento vence al de tu oponente, ganas la ronda.
    - Si tu elemento es débil contra el de tu oponente, pierdes la ronda.
    - Si ambos elementos empatan, la ronda termina en empate.
3. **Puntuación**: El primer jugador en ganar 3 rondas gana la partida.

## Estrategias

- **Observa patrones**: Intenta predecir qué elemento elegirá tu oponente basándote en sus selecciones anteriores.
- **Piensa en contadores**: Si tu oponente usa frecuentemente un elemento, considera elegir uno que tenga ventaja sobre él.
- **Mezcla tus elecciones**: Evita ser predecible variando tus selecciones de elementos.

## Tecnologías utilizadas

- **Frontend**: Preact 10.26.4
- **Desarrollo**: TypeScript 5.7.2, Vite 6.3.1
- **Paquetes**: @preact/preset-vite 2.10.1
- **Gestor de paquetes**: npm

## Instalación y ejecución
### Clonar el repositorio
git clone https://github.com/henrycamposeco/duelbender.git

### Entrar al directorio
`cd duelbender`

### Instalar dependencias
`npm install`

### Iniciar el servidor de desarrollo
`npm run dev`

### Construir para producción
`npm run build`
