import React from 'react';
import TbodyProject from './TbodyProject';
import TbodyFinancial from './TbodyFinancial';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearProject, getDataProjectFilter__Area } from '../../../store/redecers/projectReducer';
import { setAreaFilter } from '../../../store/redecers/areaProjectReducer';

const TableUI = ({ header, opcions }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filterArea = (area) => {
            if (opcions[0].amount_contracts) return
            // dispatch(getDataProjectFilter__Area(area))
            dispatch(setAreaFilter(area))
            navigate('/payment')
    }
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
                        <td className='table__row-area'><button className="table__link" onClick={() => filterArea(opcion.area)}>{opcion.area}</button></td>
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