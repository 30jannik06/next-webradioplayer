import React from "react";
import Image from "next/image";
import discord from "@/img/discord.svg";
import Link from "next/link";

export const Discord = () => {
    return (
        <Link
            href={"https://discordapp.com/users/268084996235853824"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={discord}
                alt="Discord"
                height={38}
                loading="lazy"
            />
        </Link>
    );
};
