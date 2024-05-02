import React, {  useEffect, useState } from 'react';

const CheckboxUI = ({isChecked, title, handleChange }) => {

    useEffect(() => {isChecked !== null && setChecked(isChecked.checked)} , [isChecked])

    const [checked, setChecked] = useState(false);

    const checkedFilter = (e) => {
        const newFilter = e.target.value
        setChecked(e.target.checked)
        handleChange(newFilter)
    }
    return (
        <label className='checkbox'>
            <input type="checkbox" checked={checked} className='checkbox__marker' value={title} onChange={checkedFilter} />
            {title}
        </label>
    );
};

export default CheckboxUI;