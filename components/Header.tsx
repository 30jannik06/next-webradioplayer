"use client";
import React from "react";
import {LanguageToggler} from "./LanguageToggler";
import { Logo } from "./Logo";

export const Header = () => {
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
                    Web Radio Player
                </h1>
            </div>
        </header>
    );
};
