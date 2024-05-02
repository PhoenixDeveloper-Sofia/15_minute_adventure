import {configureStore} from '@reduxjs/toolkit'
import projectReducer from './redecers/projectReducer';
import financeReducer from './redecers/financeReducer';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    finance: financeReducer,
  },
})
export default store;