// import fs from "fs";

const Homepage = ({ datos }) => {
    return (
        <>
            <ul>
                {datos.map((dato) => (
                    <li key={dato.id}>{dato.title}</li>
                ))}{" "}
            </ul>
        </>
    );
};
export const getStaticProps = async () => {
    // fetch data from an API
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datos = await res.json();
    return {
        props: {
            datos,
        },
    };
};

export default Homepage;
