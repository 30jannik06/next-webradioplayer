"use client";
import React from "react";
import { LanguageToggler } from "./LanguageToggler";
import { Logo } from "./Logo";
import Link from "next/link";
import { Label } from "./ui/label";

export const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-6">
            <div className="container mx-auto flex items-center justify-between">
                <Link href={"https://www.youtube.com/watch?v=BBJa32lCaaY"}>
                    <Logo />
                </Link>
                <div className="flex items-center space-x-4">
                    <LanguageToggler />
                </div>
            </div>
            {/* <div className="container mx-auto mt-4">
                <Label className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Janniks Web Radio
                </Label>
            </div> */}
        </header>
    );
};
