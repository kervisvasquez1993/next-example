import Link from "next/link";
import style from "./event-item.module.css";
import BtnPrimary from "../ui/button";

const EventShow = ({ item }) => {
    const { id, title, description, location, date, image, isFeatured } = item;
    const humandReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;
    return (
        <li className={style.item}>
            <img src={`/${image}`} alt={title} />
            <div className={style.content}>
                <header>
                    <h2>{title}</h2>
                </header>
                <div className={style.data}>
                    <time>{formattedAddress}</time>
                </div>
                <div className={style.data}>
                    <address>{humandReadableDate}</address>
                </div>
                <div className={style.actions}>
                    <BtnPrimary link={exploreLink}>Explore Event</BtnPrimary>
                </div>
            </div>
        </li>
    );
};

export default EventShow;
