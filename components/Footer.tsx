// "use client";
import React from "react";
import { Label } from "./ui/label";
import { useLanguage } from "./LanguageProvider";
import { Twitter } from "./socials/Twitter";
import { Instagram } from "./socials/Instagram";
import { Youtube } from "./socials/Youtube";
import { Discord } from "./socials/Discord";
import { Github } from "./socials/Github";

export const Footer: React.FC = () => {
    const { language } = useLanguage();
    return (
        <footer className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-white text-center fixed bottom-0 w-full">
            <div className="flex justify-center space-x-4">
                <Twitter />
                <Instagram />
                <Youtube />
                <Discord />
                <Github />
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
