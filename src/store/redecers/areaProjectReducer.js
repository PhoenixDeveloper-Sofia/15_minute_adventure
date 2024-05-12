import { createSlice } from '@reduxjs/toolkit'

const area =[]
export const areaSlice = createSlice({
  name: 'area',
  initialState: area,
  reducers: {
    setAreaFilter(state, { payload }){
        const newArea=[payload]
        return newArea
    }
  }
})

export const {setAreaFilter} = areaSlice.actions

export default areaSlice.reducer