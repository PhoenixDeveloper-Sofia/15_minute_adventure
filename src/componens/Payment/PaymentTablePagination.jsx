import React, { useEffect, useState } from 'react';

const PaymentTablePagination = ({limitBut, pagesArray, pagination, upLimit, upPage}) => {
   const [pageActive, setPageActive] = useState(pagination.page)
   const [limitActive, setLimitActive] = useState(pagination.limit)
    return (
        <div className='paymentTable__pagination'>
            <div className="button_inner">
                {limitBut.map(limitB =>
                    <button key={limitB} className={limitB == limitActive ? 'active' : ''} onClick={() =>{ upLimit(limitB) ; setLimitActive(limitB)}}>{limitB}</button>
                )}
            </div>
            <div className="button_inner">
                {pagesArray.map(page =>
                    <button key={page} className={page == pageActive + 1 ? 'active' : ''} onClick={() => {upPage(page - 1); setPageActive(page - 1)}}>{page}</button>
                )}
            </div>
        </div>
    );
};

export default PaymentTablePagination;