import React from "react";
import Image from "next/image";
import github from "@/img/github.svg";
import Link from "next/link";

export const Github = () => {
    return (
        <Link
            href={"https://github.com/30jannik06/next-webradioplayer"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image src={github} alt="Github" height={38} loading="lazy" />
        </Link>
    );
};
