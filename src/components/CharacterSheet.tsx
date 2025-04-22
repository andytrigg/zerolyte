// CharacterSheet.tsx
import React from 'react';
import { Character } from '../utils/types';
import './CharacterSheet.css';

interface CharacterSheetProps {
    character: Character;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
    return (
        <div className="character-sheet">
            <header className="sheet-header">
                <h1>character.name</h1>
                <p><strong>Occupation:</strong> {character.occupation.occupation}</p>
                <p><strong>Alignment:</strong> {character.alignment}</p>
                <p><strong>Level:</strong> {character.level}</p>
                <p><strong>XP:</strong> {character.experience_points}</p>
                <p><strong>HP:</strong> {character.hit_points}</p>
                <p><strong>Lucky Sign:</strong> {character.luckySign.birth_augur}</p>
            </header>

            <section className="abilities">
                <h2>Abilities</h2>
                <ul>
                    <li>STR: {character.strength.value} ({character.strength.modifier})</li>
                    <li>AGI: {character.agility.value} ({character.agility.modifier})</li>
                    <li>STA: {character.stamina.value} ({character.stamina.modifier})</li>
                    <li>INT: {character.intelligence.value} ({character.intelligence.modifier})</li>
                    <li>PER: {character.personality.value} ({character.personality.modifier})</li>
                    <li>LCK: {character.luck.value} ({character.luck.modifier})</li>
                </ul>
            </section>

            <section className="equipment">
                <h2>Equipment</h2>
                <ul>
                    {character.equipment.map((item, index) => (
                        <li key={index}>{item.item}</li>
                    ))}
                </ul>
            </section>

            <section className="funds">
                <h2>Funds</h2>
                <p>{character.funds.gp} gp, {character.funds.sp} sp, {character.funds.cp} cp</p>
            </section>
        </div>
    );
};

export default CharacterSheet;
