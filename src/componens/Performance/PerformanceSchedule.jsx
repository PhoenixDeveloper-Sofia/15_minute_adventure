import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import RenderLegend from '../UI/legend/RenderLegend';
import { useSelector } from 'react-redux'
import CustomTooltip from './tooltip/CustomTooltip';


const PerformanceSchedule = () => {
    const finance = useSelector((state) => state.finance)
    return (
        <section className='performanceSchedule'>
               <h2 className='performanceSchedule__title'>Кассовое исполнение</h2>
            <ResponsiveContainer>
                <BarChart
                    data={finance}
                    margin={{
                        top: 20,
                        right: 60,
                        left: 65,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical=""/>
                    <XAxis dataKey="area"/>
                    <YAxis tickCount={16} domain={[0,7500000]}/>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={RenderLegend} />
                    <Bar dataKey="amount_contracts" fill="#40EF98" />
                    <Bar dataKey="cash_execution" fill="#FCD92B" />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default PerformanceSchedule;