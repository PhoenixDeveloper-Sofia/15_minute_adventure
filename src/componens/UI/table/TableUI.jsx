import React from 'react';
import TbodyProject from './TbodyProject';
import TbodyFinancial from './TbodyFinancial';

const TableUI = ({ header, opcions }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    {header.map(hr =>
                        <th key={hr} className='table__title'>{hr}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {opcions.map(opcion =>
                    <tr key={opcion.area}>
                        <td className='table__row-area'><a className="table__link" href={opcion.link}>{opcion.area}</a></td>
                        {opcions[0].amount_contracts ?
                            <TbodyFinancial key={opcion.area} opcion={opcion} />
                            : <TbodyProject key={opcion.area} opcion={opcion} />}
                    </tr>
                )}
            </tbody>

        </table>
    );
};

export default TableUI;