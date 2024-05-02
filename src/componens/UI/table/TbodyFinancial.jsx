import React from 'react';

const TbodyFinancial = ({ opcion }) => {
    return (
        <>
            <td>{opcion.financial_value}</td>
            <td>{opcion.amount_contracts}</td>
            <td>{opcion.cash_execution}</td>
            <td>{opcion.level_of_contracting}</td>
            <td>{opcion.level_of_cash_execution}</td>
        </>
    );
};

export default TbodyFinancial;