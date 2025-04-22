export type Occupation = {
    occupation: string;
    trained_weapon: string;
    trade_goods: string | null;
    funds: Currency;
};

export type LuckySign = {
    birth_augur: string;
    lucky_roll: string;
}

export type Attribute = {
    value: number;
    modifier: number;
}

export type Currency = {
    gp: number;
    sp: number;
    cp: number;
};

export type EquipmentItem = {
    item: string;
    cost: Currency;
};

export type Alignment = 'Lawful' | 'Neutral' | 'Chaotic';

export type Character = {
    name: string;
    alignment: Alignment;
    hit_points: number;
    level: number;
    strength: Attribute;
    agility: Attribute;
    stamina: Attribute;
    intelligence: Attribute;
    personality: Attribute;
    luck: Attribute;
    occupation: Occupation;
    luckySign: LuckySign;
    funds: Currency;
    experience_points: number;
    weapons: string[];
    equipment: string[];
    baseSpeed: number;
};