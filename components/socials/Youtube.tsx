import React from "react";
import Image from "next/image";
import youtube from "@/img/youtube.svg";

export const Youtube = () => {
    return (
        <a
            href="https://www.youtube.com/channel/UClTsYh2A1Dbh086sh7OyVQg"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image src={youtube} alt="YouTube" width={40} height={40} />
        </a>
    );
};
