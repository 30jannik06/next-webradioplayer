import React from "react";
import Image from "next/image";
import discord from "@/img/discord.svg";

export const Discord = () => {
    return (
        <a
            href="https://discordapp.com/users/268084996235853824"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={discord} 
                alt="Discord"
                width={40}
                height={40}
            />
        </a>
    );
};
