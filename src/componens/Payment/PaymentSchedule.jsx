import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";
import RenderLegend from '../UI/legend/RenderLegend';
import useGetProjectPercent from "../../hooks/useGetProjectPercent";
import RenderLabel from "../UI/legend/RenderLabel";
import { useSelector } from 'react-redux'


const PaymentSchedule = () => {
    const project = useSelector((state) => state.project)
    const [data, countProject] = useGetProjectPercent(project)
    return (
        <section className="paymentSchedule">
            <h2 className='schedule__title'>Исполнение проектов</h2>
            <div className="schedule">
                <ResponsiveContainer >
                    <PieChart >
                        <Legend content={RenderLegend} verticalAlign="top" />
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={110}
                            outerRadius={190}
                            fill={data.fill}
                            label={<RenderLabel countProject={countProject} />}
                            labelLine={false}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <p className="schedule__countProject">Проектов: {countProject} шт.</p>
            </div>
        </section>
    );
};

export default PaymentSchedule;