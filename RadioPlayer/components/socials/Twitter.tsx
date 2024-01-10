import React from "react";
import Image from "next/image";
import twitter from "@/img/twitter.svg";
import Link from "next/link";

export const Twitter = () => {
    return (
        <Link
            href="https://twitter.com/30jannik06"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={twitter}
                alt="Twitter"
                height={38}
                loading="lazy"
            />
        </Link>
    );
};
