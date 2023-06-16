import Link from "next/link";
import React from "react";

const ClientPage = () => {
    const clients = [
        { id: "cliente1", name: "Cliente 1" },
        { id: "cliente2", name: "Cliente 2" },
        { id: "cliente3", name: "Cliente 3" },
        { id: "cliente4", name: "Cliente 4" },
    ];
    return (
        <>
            <h1>List Clients</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/clients/[id]',
                            query: { id: client.id }
                        }}>
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ClientPage;
