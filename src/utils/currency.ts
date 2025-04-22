import {Currency} from "./types";

export function totalInCopper(funds: Currency): number {
    return (funds.gp * 100) + (funds.sp * 10) + funds.cp;
}

export function addFunds(fundOne: Currency, fundTwo: Currency): Currency {
    return {
        gp: fundOne.gp + fundTwo.gp,
        sp: fundOne.sp + fundTwo.sp,
        cp: fundOne.cp + fundTwo.cp,
    };
}

export function normalizeFunds(copperTotal: number): Currency {
    const gp = Math.floor(copperTotal / 100);
    copperTotal %= 100;

    const sp = Math.floor(copperTotal / 10);
    const cp = copperTotal % 10;

    return { gp, sp, cp };
}