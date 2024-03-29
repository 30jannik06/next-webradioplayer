import Image from "next/image";
import instagram from "@/img/insta.svg";
import React from "react";
import Link from "next/link";

export const Instagram = () => {
    return (
        <Link
            href="https://www.instagram.com/jannik.so/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={instagram}
                alt="Instagram"
                height={38}
                loading="lazy"
            />
        </Link>
    );
};
