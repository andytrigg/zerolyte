import React, {useState} from 'react';
import {Character} from '../utils/types';
import {generateCharacter} from '../utils/generateCharacter';
import './CharacterGenerator.css';
import CurrencyDisplay from "./CurrencyDisplay"; // Or wherever you put the shake animation

function formatMod(mod: number) {
    const sign = mod > 0 ? '+' : '';
    const className =
        mod > 0 ? 'mod-positive' :
            mod < 0 ? 'mod-negative' :
                'mod-neutral';

    return <span className={className}>{`(${sign}${mod})`}</span>;
}

const CharacterGenerator: React.FC = () => {
    const [character, setCharacter] = useState<Character | null>(null);

    const handleGenerate = () => {
        setCharacter(generateCharacter());
    };

    return (
        <div className="character-generator">
            <h2>🧙 Generate Level 0 DCC Character</h2>
            <button className="generate-btn" onClick={handleGenerate}>Roll New Character</button>

            {character && (
                <div className="character-card">
                    <h3>{character.occupation.occupation}</h3>
                    <p><em>Lucky Sign:</em> {character.luckySign.birth_augur}</p>
                    <p>
                        <strong>Level:</strong> {character.level} | <strong>XP:</strong> {character.experience_points} | <strong>HP:</strong> {character.hit_points}
                    </p>

                    <div className="abilities">
                        <div><strong>STR:</strong> {character.strength.value} {formatMod(character.strength.modifier)}
                        </div>
                        <div><strong>AGI:</strong> {character.agility.value} {formatMod(character.agility.modifier)}
                        </div>
                        <div><strong>STA:</strong> {character.stamina.value} {formatMod(character.stamina.modifier)}
                        </div>
                        <div>
                            <strong>INT:</strong> {character.intelligence.value} {formatMod(character.intelligence.modifier)}
                        </div>
                        <div>
                            <strong>PER:</strong> {character.personality.value} {formatMod(character.personality.modifier)}
                        </div>
                        <div><strong>LCK:</strong> {character.luck.value} {formatMod(character.luck.modifier)}</div>
                    </div>

                    <p>
                        <strong>Funds:</strong> <CurrencyDisplay funds={character.funds} />
                    </p>

                    <p><strong>Equipment:</strong></p>
                    <ul>
                        {character.equipment.map((eq, idx) => (
                            <li key={idx}>{eq.item} (<CurrencyDisplay funds={eq.cost} />)</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterGenerator;
