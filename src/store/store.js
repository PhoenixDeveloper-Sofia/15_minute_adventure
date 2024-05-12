import {configureStore} from '@reduxjs/toolkit'
import projectReducer from './redecers/projectReducer';
import financeReducer from './redecers/financeReducer';
import areaProjectReducer from './redecers/areaProjectReducer';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    finance: financeReducer,
    area: areaProjectReducer
  },
})
export default store;