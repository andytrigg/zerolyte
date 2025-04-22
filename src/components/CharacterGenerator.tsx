import React, {useState} from 'react';
import {Alignment, Character} from '../utils/types';
import {generateCharacter} from '../utils/generateCharacter';
import './CharacterGenerator.css';
import CharacterCard from "./CharacterCard"; // Or wherever you put the shake animation

const CharacterGenerator: React.FC = () => {
    const [characterName, setCharacterName] = useState('');
    const [character, setCharacter] = useState<Character | null>(null);

    const [selectedAlignment, setSelectedAlignment] = useState<Alignment>('Neutral');

    const handleGenerate = () => {
        setCharacter(generateCharacter(characterName, selectedAlignment));
    };

    return (
        <div className="character-generator">
            <h2>🧙 Generate Level 0 DCC Character</h2>

            <div className="character-controls">
                <div className="name-input">
                    <label htmlFor="characterName">Character Name:</label>
                    <input
                        type="text"
                        id="characterName"
                        value={characterName}
                        onChange={(e) => setCharacterName(e.target.value)}
                    />
                </div>
                <div className="alignment-selector">
                    <label htmlFor="alignment">Choose Alignment:</label>
                    <select
                        id="alignment"
                        value={selectedAlignment}
                        onChange={(e) => setSelectedAlignment(e.target.value as Alignment)}
                    >
                        <option value="Lawful">Lawful</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Chaotic">Chaotic</option>
                    </select>
                </div>

                <div className="generate-button">
                    <button className="generate-btn" onClick={handleGenerate}>
                        Roll New Character
                    </button>
                </div>
            </div>

            {character && (
                <>
                    <CharacterCard character={character}/>
                </>
            )}
        </div>
    );
};

export default CharacterGenerator;
