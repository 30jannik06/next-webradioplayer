"use client";
import React from "react";
import Image from "next/image";
import twitter from "@/img/twitter.svg";
import instagram from "@/img/insta.svg";
import youtube from "@/img/youtube.svg";
import discord from "@/img/discord.svg";
import { Label } from "./ui/label";
import { useLanguage } from "./LanguageProvider";

const Footer: React.FC = () => {
    const { language } = useLanguage();
    return (
        <footer className="bg-gray-800 p-4 text-white text-center fixed bottom-0 w-full">
            <div className="flex justify-center space-x-4">
                <a
                    href="https://twitter.com/dein_twitter_account"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={twitter} // Ersetze dies durch den Pfad zu deinem Twitter-Symbolbild
                        alt="Twitter"
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    href="https://www.instagram.com/dein_instagram_account"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={instagram} // Ersetze dies durch den Pfad zu deinem Instagram-Symbolbild
                        alt="Instagram"
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    href="https://www.youtube.com/dein_youtube_channel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={youtube} // Ersetze dies durch den Pfad zu deinem YouTube-Symbolbild
                        alt="YouTube"
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    href="https://discordapp.com/users/268084996235853824"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={discord} // Ersetze dies durch den Pfad zu deinem YouTube-Symbolbild
                        alt="Discord"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
            <Label className="mt-4">
                &copy; 2023{" "}
                {language === "de"
                    ? "Dein Web Radio Player des Vertrauens. Alle Rechte vorbehalten."
                    : "Your trusted web radio player. All rights reserved."}
            </Label>
        </footer>
    );
};

export default Footer;
