import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <h2 className="custom-tooltip__title">{label}</h2>
          <p className="custom-tooltip__label">Сумма заключенныхных контрактов в/ договоров, руб: <span className='custom-tooltip__span'>{payload[0].value}</span></p>
          <p className="custom-tooltip__label">Кассовое исполнение, руб: <span className='custom-tooltip__span'>{payload[1].value}</span></p>
        </div>
      );
    }
  
    return null;
  };

export default CustomTooltip;