import { rollDice } from './rollDice';
import occupationData from '../data/occupations.json';
import luckSignsData from '../data/luckSigns.json';
import equipmentData from '../data/equipment.json';
import {Occupation, Character, LuckySign, Currency, EquipmentItem} from './types';
import {getAbilityModifier} from "./modifiers";
import {normalizeFunds} from "./currency"; // if you split your types

function generateStartingFunds(): Currency {
    const copper = rollDice(5, 12).reduce((sum, roll) => sum + roll, 0);
    return normalizeFunds(copper);
}

export function generateCharacter(): Character {
    const roll3d6 = () => rollDice(3, 6).reduce((a, b) => a + b, 0);
    const roll1d4 = () => rollDice(1, 4).reduce((a, b) => a + b, 0);
    const occupation: Occupation = occupationData[Math.floor(Math.random() * occupationData.length)];
    const luckySign: LuckySign = luckSignsData[Math.floor(Math.random() * luckSignsData.length)];
    const startingEquipment: EquipmentItem = equipmentData[Math.floor(Math.random() * equipmentData.length)];
    let strength = roll3d6();
    let agility = roll3d6();
    let stamina = roll3d6();
    let intelligence = roll3d6();
    let personality = roll3d6();
    let luck = roll3d6();
    let staminaModifier = getAbilityModifier(stamina);
    return {
        level: 0,
        experience_points: 0,
        strength: {
            value: strength,
            modifier: getAbilityModifier(strength)
        },
        agility: {
            value: agility,
            modifier: getAbilityModifier(agility)
        },
        stamina: {
            value: stamina,
            modifier: staminaModifier
        },
        intelligence: {
            value: intelligence,
            modifier: getAbilityModifier(intelligence)
        },
        personality: {
            value: personality,
            modifier: getAbilityModifier(personality)
        },
        luck: {
            value: luck,
            modifier: getAbilityModifier(luck)
        },
        occupation,
        luckySign: luckySign,
        hit_points: roll1d4() + Math.max(0, staminaModifier),
        funds: generateStartingFunds(),
        equipment: [startingEquipment]
    };
}
