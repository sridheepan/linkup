'use client';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const paymentElementOptions = {
    layout: 'accordion',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/bookingconfirmation',
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <form
      className='w-[40vw] min-w-[350px] p-[20px] rounded-xl shadow-md self-center bg-paper'
      onSubmit={handleSubmit}>
      <PaymentElement options={paymentElementOptions} className='mb-[24px]' />
      <button
        disabled={isLoading || !stripe || !elements}
        id='submit'
        className='bg-primaryMain hover:brightness-110 text-paper rounded-lg mt-4 py-[12px] px-[16px] cursor-pointer block transition-all duration-200 font-semibold text-lg w-full shadow-md'>
        <span id='button-text'>
          {isLoading ? <Loader2 className='animate-spin w-6 h-6 text-gray-500' /> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div
          id='payment-message'
          className='text-grey600 text-[16px] leading-[20px] text-center pt-[12px]'>
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
