import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CheckboxUI = ({isChecked, title, handleChange }) => {

    const areaFilter = useSelector(state => state.area)

    useEffect(() => {isChecked !== null && setChecked(isChecked.checked)} , [isChecked])

    const [checked, setChecked] = useState(false);

    const checkedFilter = (e) => {
        const newFilter = e.target.value
        setChecked(e.target.checked)
        handleChange(newFilter)
    }

    useEffect(() => {
        if(areaFilter.length !== 0 && areaFilter == title){
            setChecked(true)
            handleChange(areaFilter[0])
        }
    }, [areaFilter])
    return (
        <label className='checkbox'>
            <input type="checkbox" checked={checked} className='checkbox__marker' value={title} onChange={checkedFilter} />
            {title}
        </label>
    );
};

export default CheckboxUI;