import React from 'react';
import useGetStatistics from '../../hooks/useGetStatistics';
import TableUI from '../UI/table/TableUI';

const Statistics = () => {
    const project =  useGetStatistics()
   const header = ['MP/ГО','Проект','Проект Выполнен','Проект не Выполнен','Процент выполнения']
   return (
        <section className="statistics">
            <h1>Выполнено работ в рамере МО</h1>
            <TableUI header={header} opcions={project} />
        </section>
    );
};

export default Statistics;