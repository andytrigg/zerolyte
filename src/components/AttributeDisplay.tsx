import React from 'react';
import './AttributeDisplay.css';

interface AttributeDisplayProps {
    label: string;
    value: number;
    modifier: number;
}

const AttributeDisplay: React.FC<AttributeDisplayProps> = ({ label, value, modifier }) => {
    const sign = modifier > 0 ? '+' : '';
    const className =
        modifier > 0 ? 'mod-positive' :
            modifier < 0 ? 'mod-negative' :
                'mod-neutral';

    return (
        <div className="attribute">
            <strong>{label}:</strong> {value} <span className={className}>({sign}{modifier})</span>
        </div>
    );
};

export default AttributeDisplay;
