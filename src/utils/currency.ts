import {Money} from "./types";

export function totalInCopper(funds: Money): number {
    return (funds.gp * 100) + (funds.sp * 10) + funds.cp;
}

export function normalizeFunds(copperTotal: number): Money {
    const gp = Math.floor(copperTotal / 100);
    copperTotal %= 100;

    const sp = Math.floor(copperTotal / 10);
    const cp = copperTotal % 10;

    return { gp, sp, cp };
}