import { createSlice } from '@reduxjs/toolkit'
import finance from '../../utils/finance'

export const financeSlice = createSlice({
    name: 'finance',
    initialState: finance,
    reducers: {
        getDataFilterFinance(state, { payload }) {
            const filteredFinance = finance.filter(item => payload.includes(item.area))
            return filteredFinance;
        },

        clearFilterFinance(state) {
            return finance
        }
    },
})

export const { getDataFilterFinance, clearFilterFinance } = financeSlice.actions

export default financeSlice.reducer