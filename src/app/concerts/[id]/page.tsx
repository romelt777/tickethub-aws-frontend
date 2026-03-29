import ConcertDetails from "../_components/ConcertDetails";

//receive params from url,
const Concert = async ({
    params,
    searchParams
}: {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ date: string }>
}) => {
    //await params
    const { id } = await params;
    const { date } = await searchParams;

    //setting info from params to object
    const concert = {
        id: id,
        date: date,
    }

    //pass concert values to <ConcertDetails> for rendering.
    return (
        <>
            <ConcertDetails concert={concert}></ConcertDetails>
        </>
    )
}

export default Concert