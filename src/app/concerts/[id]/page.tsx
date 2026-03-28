import ConcertDetails from "../_components/ConcertDetails";

type ConcertParams = {
    id: string;
    date: string;
    quantity: number
};

const Concert = async ({ params }: { params: ConcertParams }) => {
    const concertParams = await params;
    const id = concertParams.id;
    const date = concertParams.date;
    const quantity = concertParams.quantity;

    const concert = {
        id: id,
        date: date,
        quantity: quantity

    }

    return (
        <>
            <ConcertDetails concert={concert}></ConcertDetails>
        </>
    )
}

export default Concert