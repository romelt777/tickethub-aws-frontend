import { Suspense } from 'react';
import CheckoutForm from './_components/CheckoutForm';
import { ConcertDetailsType } from '@/types/concert';

const Checkout = async (params: ConcertDetailsType) => {

    const id = params.id;
    const quantity = params.quantity;
    const date = params.date;
    const concertInfo = {
        id: id,
        quantity: quantity,
        date: date
    }


    return (
        <div>
            <Suspense fallback={<p>Loading checkout form...</p>}>
                <CheckoutForm concertInfo={concertInfo}></CheckoutForm>
            </Suspense>
        </div>
    )
}

export default Checkout

