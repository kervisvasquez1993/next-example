import React from "react";

const ShowIdPage = ({ product }) => {
    //   console.log(product);
    const { title, body } = product;
    return <>
        <h1>{title}</h1>
        <p>{body}</p>
    </>;
};

const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const datos = await res.json();
        return datos;
    } catch (e) {
        console.log(e);
    }
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const productId = params.id;
    const posts = await getPosts();
    const product = posts.find((post) => post.id === parseInt(productId, 10));
    return {
        props: {
            product,
        },
    };
};

export const getStaticPaths = async () => {
    const posts = await getPosts();
    const ids = posts.map((post) => post.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};

export default ShowIdPage;
