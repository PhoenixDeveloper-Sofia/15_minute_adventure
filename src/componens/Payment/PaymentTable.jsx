import React, { useEffect, useRef, useState } from 'react';
import PayTbody from './PayTbody';
import { useSelector } from 'react-redux'
import PaymentTablePagination from './PaymentTablePagination';

const PaymentTable = () => {
    const headers = ['Код проекта', 'Проект', 'short-name', 'Информация по Контактам', 'Фактическая Дата окончание проекта', 'Тип проекта', 'ТипП...', 'Процент выполнения проекта'];
    const limitBut = [20, 100, 1000]

    const pagination = useRef({
        limit: 20,
        page: 0
    })

    const project = useSelector((state) => state.project)
    const defaultList = project.map(item => item.project).flat()
    let totalPages = Math.ceil(defaultList.length / pagination.current.limit)


    const getPagesArray = () => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result;
    }
    const [pagesArray, setPagesArray] = useState(getPagesArray())

    //slice
    const slice = {
        start: 0,
        end: 20
    }


    const [list, setList] = useState(defaultList.slice(slice.start, slice.end))

    const updatePage = (page) => {
        pagination.current = {
            ...pagination.current,
            page: page
        }
        getPaginationList()
    }

    const updateLimit = (limit) => {
        pagination.current = {
            ...pagination.current,
            limit: limit
        }
        totalPages = Math.ceil(defaultList.length / pagination.current.limit)
        {
            totalPages < pagination.current.page + 1 ?
            pagination.current = {
                ...pagination.current,
                page: 0
            } : ""
        }
        getPaginationList()
        setPagesArray(getPagesArray())

    }

    const getPaginationList = () => {
        slice.start = pagination.current.limit * pagination.current.page
        slice.end = pagination.current.limit * pagination.current.page + pagination.current.limit
        const rez = defaultList.slice(slice.start, slice.end)
        setList(rez)
    }

    useEffect(() => {
        getPaginationList();
        setPagesArray(getPagesArray())
    }, [project])

    return (
        <section className='paymentTable'>
            <h1>Выполнение работ</h1>
            <table className='paymentTable__table'>
                <thead>
                    <tr>
                        {headers.map(header =>
                            <th key={header}>{header}</th>
                        )}
                    </tr>
                </thead>
                <PayTbody list={list} />
            </table>
            <PaymentTablePagination upPage={updatePage} upLimit={updateLimit} pagination={pagination.current} limitBut={limitBut} pagesArray={pagesArray} />
        </section>
    );
};

export default PaymentTable;