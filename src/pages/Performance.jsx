import React from 'react';
import PerformanceTable from '../componens/Performance/PerformanceTable';
import PerformanceSchedule from '../componens/Performance/PerformanceSchedule';

const Performance = () => {
    return (
        <div className='performance'>
            <PerformanceTable/>
            <PerformanceSchedule/>
        </div>
    );
};

export default Performance;