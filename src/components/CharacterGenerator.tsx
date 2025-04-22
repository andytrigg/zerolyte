import React, {useState} from 'react';
import {Alignment, Character} from '../utils/types';
import {generateCharacter} from '../utils/generateCharacter';
import './CharacterGenerator.css';
import CurrencyDisplay from "./CurrencyDisplay";
import AttributeDisplay from "./AttributeDisplay"; // Or wherever you put the shake animation

const CharacterGenerator: React.FC = () => {
    const [character, setCharacter] = useState<Character | null>(null);

    const [selectedAlignment, setSelectedAlignment] = useState<Alignment>('Neutral');

    const handleGenerate = () => {
        setCharacter(generateCharacter(selectedAlignment));

    };

    return (
        <div className="character-generator">
            <h2>🧙 Generate Level 0 DCC Character</h2>
            <button className="generate-btn" onClick={handleGenerate}>Roll New Character</button>
            <label>
                Choose Alignment:
                <select
                    value={selectedAlignment}
                    onChange={(e) => setSelectedAlignment(e.target.value as Alignment)}
                >
                    <option value="Lawful">Lawful</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Chaotic">Chaotic</option>
                </select>
            </label>

            {character && (
                <div className="character-card">
                    <h3>{character.occupation.occupation}</h3>
                    <p><em>Lucky Sign:</em> {character.luckySign.birth_augur}</p>
                    <p>
                        <em>Alignment:</em>{' '}
                        <span className={`alignment-${character.alignment.toLowerCase()}`}>{character.alignment}</span>
                    </p>
                    <p>
                        <strong>Level:</strong> {character.level} | <strong>XP:</strong> {character.experience_points} | <strong>HP:</strong> {character.hit_points}
                    </p>
                    <div className="abilities">
                        <AttributeDisplay label="STR" value={character.strength.value}
                                          modifier={character.strength.modifier}/>
                        <AttributeDisplay label="AGI" value={character.agility.value}
                                          modifier={character.agility.modifier}/>
                        <AttributeDisplay label="STA" value={character.stamina.value}
                                          modifier={character.stamina.modifier}/>
                        <AttributeDisplay label="INT" value={character.intelligence.value}
                                          modifier={character.intelligence.modifier}/>
                        <AttributeDisplay label="PER" value={character.personality.value}
                                          modifier={character.personality.modifier}/>
                        <AttributeDisplay label="LCK" value={character.luck.value}
                                          modifier={character.luck.modifier}/>
                    </div>

                    <p>
                        <strong>Funds:</strong> <CurrencyDisplay funds={character.funds}/>
                    </p>

                    <p><strong>Equipment:</strong></p>
                    <ul>
                        {character.equipment.map((eq, idx) => (
                            <li key={idx}>{eq.item} (<CurrencyDisplay funds={eq.cost}/>)</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterGenerator;
