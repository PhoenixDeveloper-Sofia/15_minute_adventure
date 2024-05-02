import Projects from '../pages/Projects'
import Payment from '../pages/Payment'
import Performance from '../pages/Performance'

export const routers = [
  {path:'/', element:<Projects/>, name:'Проекты'},
  {path:'/payment', element:<Payment/>, name:'Выполнение'},
  {path:'/performance', element:<Performance/>, name:'Оплата'}
]