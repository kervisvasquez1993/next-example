import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
const EventId = () => {
    const router = useRouter();
    const { eventId } = router.query;
    const event = getEventById(eventId);
    if (!event) {
        return <p>No event found</p>;
    }
    // conso
    return <div>EventId</div>;
};

export default EventId;
