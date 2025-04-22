import { rollDie, rollDice } from './rollDice';

describe('rollDie', () => {
    it('should return a number between 1 and the number of sides', () => {
        for (let i = 0; i < 100; i++) {
            const result = rollDie(20);
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThanOrEqual(20);
        }
    });
});

describe('rollDice', () => {
    it('should return the correct number of dice rolls', () => {
        const result = rollDice(3, 6);
        expect(result).toHaveLength(3);
    });

    it('each roll should be within expected range', () => {
        const result = rollDice(10, 12);
        result.forEach((r) => {
            expect(r).toBeGreaterThanOrEqual(1);
            expect(r).toBeLessThanOrEqual(12);
        });
    });

    it('should return an empty array when 0 dice are rolled', () => {
        expect(rollDice(0, 20)).toEqual([]);
    });
});
