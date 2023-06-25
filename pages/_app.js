import { PostProvider } from "../components/context/PostProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <PostProvider>
            <Component {...pageProps} />
        </PostProvider>
    );
}

export default MyApp;
