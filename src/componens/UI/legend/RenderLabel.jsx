import React from 'react';

const RenderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, countProject }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
    const x = cx + radius * Math.cos(-midAngle * RADIAN)+5;
    const y = cy + radius * Math.sin(-midAngle * RADIAN)-5;
    const thing = Math.ceil(countProject* percent)
    return (
        <g>
            {thing !== 0 && 
            <>
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="inside">
                {`${(percent * 100).toFixed(0)}% `}
            </text>
            <text x={x} y={y + 20} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="inside">
                ({thing} шт.)
            </text>
            </>}
        </g>
    );
};

export default RenderLabel;