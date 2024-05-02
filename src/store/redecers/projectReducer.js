import { createSlice } from '@reduxjs/toolkit'
import projectItem from '../../utils/project'

const filterState = {
  area: [],
  date: []
}

export const projectSlice = createSlice({
  name: 'project',
  initialState: projectItem,
  reducers: {
    getDataProjectFilter__Completion_date: ( _ , { payload }) => {
      const filterCompletionDates = payload.map(str => parseInt(str));

      let filteredProjects = projectItem.map(area => ({
        ...area,
        project: area.project.filter(project => filterCompletionDates.includes(project.completion_date))
      }));

      if (filterState.area.length !== 0) {
        filteredProjects = filteredProjects.filter(item => filterState.area.includes(item.area))
      }

      filterState.date = filterCompletionDates

      return filteredProjects;
    },

    getDataProjectFilter__Area: ( _ , { payload }) => {
      let filteredProjects = projectItem.filter(item => payload.includes(item.area))

      if (filterState.date.length !== 0) {
        filteredProjects = filteredProjects.map(area => ({
          ...area,
          project: area.project.filter(project => filterState.date.includes(project.completion_date))
        }));
      }
      filterState.area = payload
      return filteredProjects;
    },

    clearProject( _ , {payload} ) {
      let newState = projectItem

      if (payload === "date" && filterState.area.length !== 0){
        newState = projectItem.filter(item => filterState.area.includes(item.area))
        filterState.date= []
      }
      else if (payload === "area" && filterState.date.length !== 0){
        newState = projectItem.map(area => ({
          ...area,
          project: area.project.filter(project => filterState.date.includes(project.completion_date))
        }));   
        filterState.area= []
      }
      else{
        filterState.area= []
        filterState.date= []
      }
      return newState
    }
  }
})

export const { getDataProjectFilter__Area, getDataProjectFilter__Completion_date, clearProject } = projectSlice.actions

export default projectSlice.reducer


