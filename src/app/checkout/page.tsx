import { Suspense } from 'react';
import CheckoutForm from './_components/CheckoutForm';

//using query paramters 
const Checkout = async ({
    searchParams
}: {
    searchParams: Promise<{ id: string, date: string, quantity: string }>
}

) => {
    const { id, date, quantity } = await searchParams;

    //saving query parameters to object
    const concertInfo = {
        id: id,
        quantity: Number(quantity),
        date: date
    }

    //passing concert info to checkoutForm component
    return (
        <div>
            <Suspense fallback={<p>Loading checkout form...</p>}>
                <CheckoutForm concertInfo={concertInfo}></CheckoutForm>
            </Suspense>
        </div>
    )
}

export default Checkout

