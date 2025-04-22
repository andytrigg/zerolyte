import React, {useState} from 'react';
import {Character} from '../utils/types';
import {generateCharacter} from '../utils/generateCharacter';
import './CharacterGenerator.css'; // Or wherever you put the shake animation

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
        <div>
            <h2>👶 Generate Level 0 DCC Character</h2>
            <button onClick={handleGenerate}>Generate Character</button>

            {character && (
                <div style={{marginTop: '1rem'}}>
                    <p><strong>Level:</strong> {character.level}</p>
                    <p><strong>Experience Points:</strong> {character.experience_points}</p>
                    <p><strong>Hit points:</strong> {character.hit_points}</p>
                    <p><strong>Occupation:</strong> {character.occupation.occupation}</p>
                    <p><strong>Lucky Sign:</strong> {character.luckySign.birth_augur}</p>
                    <ul>
                        <li><strong>STR:</strong> {character.strength.value} {formatMod(character.strength.modifier)}
                        </li>
                        <li><strong>AGI:</strong> {character.agility.value} {formatMod(character.agility.modifier)}
                        </li>
                        <li><strong>STA:</strong> {character.stamina.value} {formatMod(character.stamina.modifier)}
                        </li>
                        <li>
                            <strong>INT:</strong> {character.intelligence.value} {formatMod(character.intelligence.modifier)}
                        </li>
                        <li>
                            <strong>PER:</strong> {character.personality.value} {formatMod(character.personality.modifier)}
                        </li>
                        <li><strong>LCK:</strong> {character.luck.value} {formatMod(character.luck.modifier)}</li>
                        <li>
                            <strong>Funds:</strong> {character.funds.gp} gp, {character.funds.sp} sp, {character.funds.cp} cp</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterGenerator;
