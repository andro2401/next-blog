import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <h1>Page not found</h1>
            <p>Something went wrong!</p>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </>
    );
};

export default NotFound;