import React from 'react';

const RenderLegend = (props) => {
    const { payload } = props;
    let legend = []
    let i = 0;
    { payload[0].payload.innerRadius ? legend = ["100%", "с 30% до 99%"] : legend = ["Сумма заключенных контрактов/договоров, руб.", "Кассовое исполнение, руб."] }

    payload[0].value = legend[0]
    payload[1].value = legend[1]

    return (
        <ul className={payload[0].payload.innerRadius && 'legend_pie'}>
            {payload.map((entry, index) => (
                <div className={entry.payload.innerRadius ? 'legend_pie__box' : 'legend'} key={`item-${index}`}>
                    <div className='legend__circle' style={{ backgroundColor: entry.color }} />
                    <span className='legend__text'>{entry.value}</span>
                </div>
            ))}
        </ul>
    );
}


export default RenderLegend;