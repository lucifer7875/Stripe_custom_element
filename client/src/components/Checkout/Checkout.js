import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    LinkAuthenticationElement,
    PaymentElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { clientSecretAPI } from "../API/Api";
import '../../config';

const stripe = loadStripe(global.config.SECRET_KEY.STRIPE_SECRET_KEY);


// Customize the appearance of Elements using the Appearance API.
const appearance = {
    theme: 'stripe',

    variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
    }
};

// Enable the skeleton loader UI for the optimal loading experience.
const loader = 'auto';

export function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => { fetchClientSecret() }, [])
    const fetchClientSecret = async () => {
        await clientSecretAPI().then((res) => {
            setClientSecret(res?.data?.client_secret)
        })
    }
    return (

        <>
            {
                clientSecret &&
                < Elements stripe={stripe} options={{ clientSecret, appearance, loader }}>
                    <CheckoutForm />
                </Elements >
            }
        </>
    )
};

export default function CheckoutForm() {
    return (
        <form className="grid grid-cols-3 gap-4 py-24">
            <div></div>
            <div>
                <h3 className="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white py-5">Payment With DevITPL</h3>
                <LinkAuthenticationElement
                    // Optional prop for prefilling customer information
                    options={{
                        defaultValues: {
                            email: 'testuser@gmail.com',
                        },
                    }}
                />
                <h3 className="inline-block mb-2 text-xl font-extrabold tracking-tight text-gray-500 dark:text-white py-5">Payment</h3>
                <PaymentElement
                    // Optional prop for prefilling customer information
                    options={{
                        defaultValues: {
                            billingDetails: {
                                name: 'Test User',
                                phone: '9429899852',
                            },
                        },
                    }}
                />
                <div className="py-2.5">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">Submit</button>
                </div>
            </div>
            <div></div>
        </form>
    );
}