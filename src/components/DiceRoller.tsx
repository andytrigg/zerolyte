// src/components/DiceRoller.tsx

import React, { useState } from 'react';
import { rollDice } from '../utils/rollDice';
import './DiceRoller.css'; // Or wherever you put the shake animation

const DiceRoller: React.FC = () => {
    const [sides, setSides] = useState<number>(20);
    const [result, setResult] = useState<number[]>([]);
    const [isShaking, setIsShaking] = useState<boolean>(false);

    const handleRoll = () => {
        setIsShaking(true);

        setTimeout(() => {
            const roll = rollDice(1, sides);
            setResult(roll);
            setIsShaking(false);
        }, 500); // Match shake animation duration
    };

    return (
        <div>
            <h2>🎲 DCC Dice Roller</h2>
            <select onChange={(e) => setSides(Number(e.target.value))} value={sides}>
                {[3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 30].map((s) => (
                    <option key={s} value={s}>d{s}</option>
                ))}
            </select>
            <button onClick={handleRoll}>Roll</button>

            <div className={`dice-display ${isShaking ? 'shake' : ''}`}>
                {result.length > 0 && <p>Result: {result.join(', ')}</p>}
            </div>
        </div>
    );
};

export default DiceRoller;
