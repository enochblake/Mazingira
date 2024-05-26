import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalPayment({ defaultAmount = 0, onSuccess, onCancel }) {
  const paypalOptions = {
    'client-id': 'Ad1HQW9v7ZswtKfhytUZHZ6XFoDPmUgM23iPtpZUgflbzYtyiy36oJG-qnUj0NQ0q7jOg15xY1vZnLBS', 
    currency: 'USD',
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: defaultAmount, 
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      onSuccess(details, data);
    });
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
          <PayPalButtons
              className='rounded-xl mx-auto '
        createOrder={createOrder}
        onApprove={onApprove}
        onCancel={onCancel}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalPayment;

