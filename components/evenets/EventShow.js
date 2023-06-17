import Link from "next/link";

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
        <li>
            <img src={`/${image}`} alt={title} />
            <div>
                <header>
                    <h2>{title}</h2>
                </header>
                <div>
                    <time>{formattedAddress}</time>
                </div>
                <div>
                    <address>{humandReadableDate}</address>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
};

export default EventShow;
