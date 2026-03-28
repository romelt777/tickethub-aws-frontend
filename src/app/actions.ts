//define server actions
'use server'

import { ConcertDetailsType } from '@/types/concert';


//sending form to api
export const formSubmit = async (formData: ConcertDetailsType) => {
    const url = process.env.URL_SAM;
    const response = await fetch(url!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
        return ({
            status: response.status,
            message: 'Order submitted successfully!'
        });
    } else {
        return (
            {
                status: response.status,
                message: data
            }
        );
    }
}