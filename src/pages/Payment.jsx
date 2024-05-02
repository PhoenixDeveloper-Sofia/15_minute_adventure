import React from 'react';
import PaymenteTable from '../componens/Payment/PaymentTable'
import PaymentSchedule from '../componens/Payment/PaymentSchedule'


const Payment = () => {
    return (
        <div className='payment'>
            <PaymenteTable/>
            <PaymentSchedule/>
        </div>
    );
};

export default Payment;