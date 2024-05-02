import { memo, useState } from "react";
import FilterOptions from "./FilterOptions";
import OpenBut from "../../../img/header/ButtonOpen.svg";
import CloseBut from "../../../img/header/ButtonClose.svg";

const Filter = ({ options, title }) => {
  const [close, setClose] = useState(true)
  const [countFilter, setCountFilter] = useState('Все')
  const getCount = (count) => {
    count !== 0 ? setCountFilter(`Выбранно: ${count}`) : setCountFilter('Все')
  }

  return (
    <div className="filter">
      <p className="filter__text">{title}</p>
      <details className="filter__box">
        <summary className="filter__summary-title">
          {countFilter}
          <button className="filter__button" onClick={() => setClose(!close)}><img src={countFilter === 'Все' ? OpenBut : CloseBut} alt="Filter button" /></button>
        </summary>
        <FilterOptions close={close} options={options} getCount={getCount} />
      </details>
    </div>
  );
}
export const FilterUI = memo(Filter);

