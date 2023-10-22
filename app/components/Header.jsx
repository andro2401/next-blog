import React from 'react';
import Link from "next/link";

import Logo from '/public/next.svg';
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex flex-col gap-5 p-1">
            <Link href="/">
                <Image
                    src={Logo}
                    alt="page logo"
                    width={120}
                />
            </Link>
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/tickets">Tickets</Link>
                    </li>
                    <li>
                        <Link href="/tickets/create">Create new ticket</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;