import Link from "next/link";

const Homepage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/portafolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/about">About us</Link>
                </li>
                <li>
                    <Link href="/clients">Clientes</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </>
    );
};

export default Homepage;
