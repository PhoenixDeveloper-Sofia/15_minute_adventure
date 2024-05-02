import React from 'react';
import TableUI from '../UI/table/TableUI';
import { useSelector } from 'react-redux'

const PerformanceTable = () => {
    const financial =  useSelector((state) => state.finance)
    const header = ['MP/ГО','Финансовая сторона стоимость, руб. ','Сумма заключенныхных контрактов в/ договоров, руб','Кассовое исполнение, руб','Уровень контрактиции', 'Уровень кассового исполнения, %']
    return (
        <section>
            <TableUI header={header} opcions={financial}/>
        </section>
    );
};

export default PerformanceTable;