import { useRouter } from "next/router";

const ClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    return <div>ClientProjectPage</div>;
};

export default ClientProjectPage;
