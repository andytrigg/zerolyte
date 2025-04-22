// CharacterCard.tsx
import React from 'react';
import { Character } from '../utils/types';
import CurrencyDisplay from './CurrencyDisplay';
import AttributeDisplay from './AttributeDisplay';
import './CharacterCard.css';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <div className="character-card">
            <h1>{character.name}</h1>
            <h3>{character.occupation.occupation}</h3>
            <p>
                <em>Lucky Sign:</em> {character.luckySign.birth_augur}
            </p>
            <p>
                <em>Alignment:</em>{' '}
                <span className={`alignment-${character.alignment.toLowerCase()}`}>
          {character.alignment}
        </span>
            </p>
            <p>
                <strong>Level:</strong> {character.level} | <strong>XP:</strong>{' '}
                {character.experience_points} | <strong>HP:</strong> {character.hit_points}
            </p>
            <div className="abilities">
                <AttributeDisplay label="STR" value={character.strength.value} modifier={character.strength.modifier}/>
                <AttributeDisplay label="AGI" value={character.agility.value} modifier={character.agility.modifier}/>
                <AttributeDisplay label="STA" value={character.stamina.value} modifier={character.stamina.modifier}/>
                <AttributeDisplay label="INT" value={character.intelligence.value}
                                  modifier={character.intelligence.modifier}/>
                <AttributeDisplay label="PER" value={character.personality.value}
                                  modifier={character.personality.modifier}/>
                <AttributeDisplay label="LCK" value={character.luck.value} modifier={character.luck.modifier}/>
            </div>
            <p>
                <strong>Speed:</strong> {character.baseSpeed}
            </p>
            <p>
                <strong>Funds:</strong> <CurrencyDisplay funds={character.funds}/>
            </p>
            <p>
                <strong>Equipment:</strong>
            </p>
            <ul>
                {character.equipment.map((eq, idx) => (
                    <li key={idx}>
                        {eq.item} (<CurrencyDisplay funds={eq.cost}/>)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterCard;
