export function getAbilityModifier(score: number): number {
    if (score === 3) return -3;
    if (score >= 4 && score <= 5) return -2;
    if (score >= 6 && score <= 8) return -1;
    if (score >= 9 && score <= 12) return 0;
    if (score >= 13 && score <= 15) return +1;
    if (score >= 16 && score <= 17) return +2;
    if (score === 18) return +3;
    return 0; // fallback, should never hit this
}