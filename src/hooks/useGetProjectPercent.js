import React, { useCallback, useEffect, useState } from 'react';

function useGetProjectPercent(project){
    const fullProject = project.map(item => item.project).flat()
    const countProject= fullProject.length
    const [data, setData] = useState([])
    useEffect(() => getData() ,[project])
    const getData = useCallback(() => {
        let fine = 0;
        let normal = 0;
        let bad = 0;

        fullProject.forEach(item => {
            if (item.execution_process === 100){
                fine++;
            }
            else if (item.execution_process <30){
                bad++;
            }
            else{
                normal++
            }
        });
        let percent_fine = Math.ceil(fine/countProject*100 )
        let percent_normal =Math.ceil(normal/countProject*100 )
        let percent_bad =Math.ceil(bad/countProject*100 )
        setData([
            {name: "100%", label: `${percent_fine}%` , value: percent_fine, fill:"#28EE96"},
            {name: "c 30% до 99%", label:`${percent_normal}%` , value: percent_normal, fill:"#FFD900"},
            {name: "с 0% до 30%", label:`${percent_bad}% `, value: percent_bad, fill:"#FA4F56"}
        ])
    }, [fullProject, countProject]);

    return [data, countProject];
}

export default useGetProjectPercent;