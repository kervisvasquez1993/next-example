import EventShow from "./EventShow";
import style from "./event-list.module.css";
const EventList = ({ events = [] }) => {
    return events.length > 0 ? (
        <ul className={style.list}>
            
            {events?.map((event) => (
                <EventShow key={event.id} item={event} />
            ))}
        </ul>
    ) : (
        <div>No events</div>
    );
};

export default EventList;
