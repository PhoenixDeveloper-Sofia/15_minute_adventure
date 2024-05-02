

const PayTbody = ({list}) => {
    return (
        <tbody>
            {list.map(item =>
                <tr key={item.id_project}>
                    <td>{item.id_project}</td>
                    <td>{item.project}</td>
                    <td>{item.short_name}</td>
                    <td>{item.object_information}</td>
                    <td>{item.completion_date}</td>
                    <td>{item.tip_project}</td>
                    <td>{item.tip}</td>
                    <td>{item.execution_process}</td>
                </tr>
            )}
        </tbody>
    );
};

export default PayTbody;