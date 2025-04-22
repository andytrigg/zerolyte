import React, {JSX} from 'react';
import {Currency} from "../utils/types";
import './CurrencyDisplay.css';

interface CurrencyDisplayProps {
    funds: Currency;
}

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({funds}) => {
    const parts: JSX.Element[] = [];

    if (funds.gp > 0) {
        parts.push(<span className="coin-gp">{funds.gp} gp</span>);
    }
    if (funds.sp > 0) {
        parts.push(<span className="coin-sp">{funds.sp} sp</span>);
    }
    if (funds.cp > 0) {
        parts.push(<span className="coin-cp">{funds.cp} cp</span>);
    }
    return (
        <>
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    {index > 0 && ', '}
                    {part}
                </React.Fragment>
            ))}
        </>
    );
};

export default CurrencyDisplay;
