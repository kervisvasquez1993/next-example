import { useRouter } from "next/router";

const ClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query, "router.query");
    const { id } = router.query;
    console.log(id);
    const loadProjectHandler = () => {
        // load data...
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: { id, clientprojectid : "test" },
        });
    }
    return (
        <>
            <div>ClientProjectPage </div>
            <button onClick={loadProjectHandler}>Load Project A </button>
        </>
    );
};

export default ClientProjectPage;
