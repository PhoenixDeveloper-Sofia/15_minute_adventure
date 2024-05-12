import React from 'react';

const TbodyProject = ({ opcion }) => {
    
    return (
        <>
            <td>{opcion.project}</td>
            <td>{opcion.projct_finish}</td>
            <td>{opcion.projct_no_finish}</td>
            <td className={opcion.percent === 100 ? 'percent-fine' : opcion.percent > 0 ? 'percent-normal' : 'percent-bad'}>{opcion.percent}</td>
        </>
    );
};

export default TbodyProject;