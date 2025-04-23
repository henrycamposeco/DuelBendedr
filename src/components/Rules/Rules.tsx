import './Rules.css';

export const Rules = () => {
    return (
        <div className="rules-container">
            <h1>DuelBender</h1>

            <section className="rules-section">
                <h2>Descripción</h2>
                <p>
                    DuelBender es un juego de estrategia inspirado en el clásico "piedra, papel, tijera",
                    pero con un sistema de elementos como armas. Los jugadores se enfrentan utilizando diferentes
                    elementos con fortalezas y debilidades únicas, creando una dinámica de combate estratégica y emocionante.
                </p>
            </section>

            <section className="rules-section">
                <h2>Sistema de Elementos</h2>
                <p>
                    En DuelBender, cada elemento tiene sus propias fortalezas y debilidades en un sistema interconectado:
                </p>

                <div className="element-table-container">
                    <table className="element-table">
                        <thead>
                        <tr>
                            <th>Elemento</th>
                            <th>Vence a</th>
                            <th>Pierde contra</th>
                            <th>Empata con</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>🔥 Fuego</td>
                            <td>❄️ Hielo, 🌪️ Tormenta</td>
                            <td>🌊 Agua, 🪨 Tierra</td>
                            <td>⚡ Rayo, 🌋 Lava, 💨 Aire</td>
                        </tr>
                        <tr>
                            <td>⚡ Rayo</td>
                            <td>💨 Aire, ❄️ Hielo</td>
                            <td>🌊 Agua, 🪨 Tierra</td>
                            <td>🔥 Fuego, 🌋 Lava, 🌪️ Tormenta</td>
                        </tr>
                        <tr>
                            <td>🌊 Agua</td>
                            <td>🔥 Fuego, ⚡ Rayo</td>
                            <td>❄️ Hielo, 🌋 Lava</td>
                            <td>🪨 Tierra, 💨 Aire, 🌪️ Tormenta</td>
                        </tr>
                        <tr>
                            <td>❄️ Hielo</td>
                            <td>🌊 Agua, 💨 Aire</td>
                            <td>🔥 Fuego, ⚡ Rayo</td>
                            <td>🪨 Tierra, 🌋 Lava, 🌪️ Tormenta</td>
                        </tr>
                        <tr>
                            <td>🪨 Tierra</td>
                            <td>⚡ Rayo, 🔥 Fuego</td>
                            <td>🌪️ Tormenta, 🌊 Agua</td>
                            <td>❄️ Hielo, 🌋 Lava, 💨 Aire</td>
                        </tr>
                        <tr>
                            <td>🌋 Lava</td>
                            <td>🪨 Tierra, ❄️ Hielo</td>
                            <td>🌪️ Tormenta, 💨 Aire</td>
                            <td>🔥 Fuego, ⚡ Rayo, 🌊 Agua</td>
                        </tr>
                        <tr>
                            <td>💨 Aire</td>
                            <td>🌋 Lava, 🌊 Agua</td>
                            <td>⚡ Rayo, ❄️ Hielo</td>
                            <td>🔥 Fuego, 🪨 Tierra, 🌪️ Tormenta</td>
                        </tr>
                        <tr>
                            <td>🌪️ Tormenta</td>
                            <td>🪨 Tierra, 🌋 Lava</td>
                            <td>🔥 Fuego, 💨 Aire</td>
                            <td>⚡ Rayo, 🌊 Agua, ❄️ Hielo</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="rules-section">
                <h2>Cómo jugar</h2>
                <ol className="play-steps">
                    <li>
                        <strong>Elegir elemento:</strong> Cada jugador selecciona un elemento de los 8 disponibles.
                    </li>
                    <li>
                        <strong>Batalla:</strong> Los elementos se enfrentan según la tabla de relaciones:
                        <ul>
                            <li>Si tu elemento vence al de tu oponente, ganas la ronda.</li>
                            <li>Si tu elemento es débil contra el de tu oponente, pierdes la ronda.</li>
                            <li>Si ambos elementos empatan, la ronda termina en empate.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Puntuación:</strong> El primer jugador en ganar 3 rondas gana la partida.
                    </li>
                </ol>
            </section>

            <section className="rules-section">
                <h2>Estrategias</h2>
                <ul className="strategies">
                    <li>
                        <strong>Observa patrones:</strong> Intenta predecir qué elemento elegirá tu oponente
                        basándote en sus selecciones anteriores.
                    </li>
                    <li>
                        <strong>Piensa en contadores:</strong> Si tu oponente usa frecuentemente un elemento,
                        considera elegir uno que tenga ventaja sobre él.
                    </li>
                    <li>
                        <strong>Mezcla tus elecciones:</strong> Evita ser predecible variando tus selecciones
                        de elementos.
                    </li>
                </ul>
            </section>
        </div>
    );
};