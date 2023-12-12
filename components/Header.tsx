"use client";
import React from "react";
import { useLanguage } from "./LanguageProvider";
import LanguageToggler from "./LanguageToggler";
import { Logo } from "./Logo";

export const Header = () => {
    const { language } = useLanguage();

    return (
        <header className="bg-blue-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <Logo />
                <div className="flex items-center">
                    <LanguageToggler />
                </div>
            </div>
            <div className="container mx-auto mt-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {language === "de"
                        ? "Web Radio Spieler"
                        : "Web Radio Player"}
                </h1>
            </div>
        </header>
    );
};
