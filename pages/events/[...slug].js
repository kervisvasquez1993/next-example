import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/evenets/EventList";
import ErrorAlert from "../../components/error-alert/error-alert";
import BtnPrimary from "../../components/ui/button";

const SlugEventPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData);
    if (!filterData) {
        return <p className="center">Loading...</p>;
    }
    const filterYear = filterData[0];
    const filterMonth = filterData[1];
    const numYear = +filterYear;
    const numMonth = +filterMonth;
    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <p>Invalid filter. Please adjust your values!</p>;
    }
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>Evento no encontrado </ErrorAlert>
                <div className="center">
                    <BtnPrimary link="/events">Show All Events</BtnPrimary>
                </div>
            </>
        );
    }
    const data = new Date(numYear, numMonth - 1);
    return (
        <>
            {/* <h1>{data}</h1> */}
            <EventList events={filteredEvents} />
        </>
    );
};

export default SlugEventPage;
