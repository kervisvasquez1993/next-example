import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
const EventId = () => {
    const router = useRouter();
    const { eventId } = router.query;
    const event = getEventById(eventId);
    console.log(event);
    if (!event) {
        return <ErrorAlert>No event found</ErrorAlert>;
    }
    // conso
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics props={event} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventId;
