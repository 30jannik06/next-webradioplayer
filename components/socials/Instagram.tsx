import Image from "next/image";
import instagram from "@/img/insta.svg";
import React from "react";

export const Instagram = () => {
    return (
        <a
            href="https://www.instagram.com/jannik.so/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image src={instagram} alt="Instagram" width={40} height={40} />
        </a>
    );
};
