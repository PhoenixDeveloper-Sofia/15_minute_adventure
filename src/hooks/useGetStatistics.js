import React, { useRef } from 'react';
import { useSelector } from 'react-redux'

function useGetStatistics() {
    const list = useSelector((state) => state.project)
    const statistics = useRef([])
    statistics.current=[];
    let projct_finish = 0;
    let projct_no_finish = 0;
    let percent = 0;

    list.forEach(item => {
        item.project.forEach(pr =>{
            if (pr.execution_process === 100)
            {
                projct_finish++;
            }
            else
            {
                projct_no_finish++; 
            }
        } )
        percent = Math.round(projct_finish / item.project.length * 100);
        statistics.current = ([...statistics.current, { area: item.area, link: item.link, project: item.project.length, projct_finish: projct_finish, projct_no_finish: projct_no_finish, percent:percent }])
        projct_finish = 0;
        projct_no_finish = 0;
    }
)
    return statistics.current;
}

export default useGetStatistics;