import React from "react";
import EventList from "../../components/evenets/EventList";
import EventsSearch from "../../components/evenets/EventsSearch";
import { getFeaturedEvents, getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
const EventsPage = () => {
    const featuredEvents = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    };
    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList events={featuredEvents} />
        </div>
    );
};

export default EventsPage;
