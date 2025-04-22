export function rollDie(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
}

export function rollDice(numDice: number, sides: number): number[] {
    const rolls: number[] = [];
    for (let i = 0; i < numDice; i++) {
        rolls.push(rollDie(sides));
    }
    return rolls;
}