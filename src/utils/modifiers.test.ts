import { getAbilityModifier } from './modifiers';

describe('getAbilityModifier', () => {
    it('returns -3 for score of 3', () => {
        expect(getAbilityModifier(3)).toBe(-3);
    });

    it('returns -2 for scores 4-5', () => {
        expect(getAbilityModifier(4)).toBe(-2);
        expect(getAbilityModifier(5)).toBe(-2);
    });

    it('returns -1 for scores 6-8', () => {
        [6, 7, 8].forEach(score => {
            expect(getAbilityModifier(score)).toBe(-1);
        });
    });

    it('returns 0 for scores 9-12', () => {
        [9, 10, 11, 12].forEach(score => {
            expect(getAbilityModifier(score)).toBe(0);
        });
    });

    it('returns +1 for scores 13-15', () => {
        [13, 14, 15].forEach(score => {
            expect(getAbilityModifier(score)).toBe(1);
        });
    });

    it('returns +2 for scores 16-17', () => {
        expect(getAbilityModifier(16)).toBe(2);
        expect(getAbilityModifier(17)).toBe(2);
    });

    it('returns +3 for score of 18', () => {
        expect(getAbilityModifier(18)).toBe(3);
    });

    it('returns 0 for out-of-bound values', () => {
        expect(getAbilityModifier(0)).toBe(0);
        expect(getAbilityModifier(25)).toBe(0);
    });
});
