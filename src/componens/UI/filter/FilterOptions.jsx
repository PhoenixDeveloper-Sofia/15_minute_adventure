import CheckboxUI from '../checkbox/CheckboxUI'
import SelectedValues from '../../../img/header/SelectedValues.svg'
import { useDispatch } from 'react-redux'
import { clearFilterFinance, getDataFilterFinance } from '../../../store/redecers/financeReducer';
import { clearProject, getDataProjectFilter__Area, getDataProjectFilter__Completion_date } from '../../../store/redecers/projectReducer';
import { useEffect, useRef, useState } from 'react';
const FilterOptions = ({ options, getCount, close }) => {
    useEffect(() => cancel(), [close])
    const dispatch = useDispatch()
    const toggleFilter = useRef([])
    const [isChecked, setIsChecked] = useState({ checked: false });
    const handleChange = (newFilter) => {
        const isExists = toggleFilter.current.some(item => item === newFilter)
        if (isExists) {
            toggleFilter.current = toggleFilter.current.filter(item => item !== newFilter)
        }
        else {
            toggleFilter.current.push(newFilter)
        }
    }

    const countSub = (length) => {
        getCount(length)
    }

    const filterData = () => {
        if (toggleFilter.current.length === 0) {
            if( typeof options[0] === "number"){
                dispatch(clearProject("date"))
            }
            else {
                dispatch(clearProject("area"))
                dispatch(clearFilterFinance())
            }
        }
        else {
            const split = toggleFilter.current[0].split('')
            if (split[0] == 2) {
                dispatch(getDataProjectFilter__Completion_date(toggleFilter.current))
            }
            else {
                dispatch(getDataProjectFilter__Area(toggleFilter.current))
                dispatch(getDataFilterFinance(toggleFilter.current))
            }
        }
        countSub(toggleFilter.current.length)
    }

    const cancel = () => {
        if (toggleFilter.current.length !== 0) {
            const split = toggleFilter.current[0].split('')
            if (split[0] == 2) {
                dispatch(clearProject("date"))
            }
            else {
                dispatch(clearProject("area"))
                dispatch(clearFilterFinance())
            }
        }
        setIsChecked({ checked: false })
        countSub(0)
        toggleFilter.current = []
    }



    return (
        <div className='filterOptions'>
            <header className='filterOptions__header'>
                <button>Выбранные значения <img src={SelectedValues} alt="SelectedValues" /></button>
                <div className="filterOptions__subheader">
                    <button className='subheader__button' onClick={() => { setIsChecked({ checked: true });  toggleFilter.current = options.map(item => item.toString())}}>ВЫБРАТЬ ОТОБРАЖАЕМЫЕ</button>
                    <button className='subheader__button' onClick={() => { setIsChecked({ checked: false }); toggleFilter.current = [] ; }}>СНЯТЬ ВЫДЕЛЕНИЕ</button>
                </div>
            </header>
            <main className='filterOptions__main'>
                {options.map(option =>
                    <div key={option} className="filterOptions__item">
                        <CheckboxUI isChecked={isChecked} title={option} handleChange={handleChange} />
                    </div>
                )}
            </main>
            <footer className='filterOptions__footer'>
                <button className='filterOptions__button' onClick={cancel}>Отмена</button>
                <button className='filterOptions__button-color' onClick={filterData}>Применить</button>
            </footer>
        </div>
    );
};

export default FilterOptions;
