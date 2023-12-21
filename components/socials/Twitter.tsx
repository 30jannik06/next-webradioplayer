import React from "react";
import Image from "next/image";
import twitter from "@/img/twitter.svg";

export const Twitter = () => {
    return (
        <a
            href="https://twitter.com/30jannik06"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={twitter}
                alt="Twitter"
                //width={"auto"}
                height={38}
            />
        </a>
    );
};
