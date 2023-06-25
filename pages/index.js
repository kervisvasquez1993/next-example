import Link from "next/link";
import { usePost } from "../components/hooks/usePost";

const Homepage = ({ datos }) => {
    return (
        <>
            <ul>
                {datos.map((dato) => (
                    <Link href={`/${dato.id}`} key={dato.id}>
                        <li>{dato.title}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
};
export const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const datos = await res.json();
        return datos;
    } catch (e) {
        console.log(e);
    }
};

export const getStaticProps = async () => {
    const posts = await getPosts();

    return {
        props: {
            datos: posts,
        },
        revalidate: 10,
    };
};

export default Homepage;
