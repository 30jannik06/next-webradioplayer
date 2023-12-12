"use client";
import { useLanguage } from "./LanguageProvider";
import LanguageToggler from "./LanguageToggler";
import { Logo } from "./Logo";
import { Label } from "./ui/label";

export const Header = () => {
    const { language } = useLanguage();

    return (
        <header className="bg-[#213b8d] flex items-center p-4">
            <Logo />
            <Label className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ml-4 sm:ml-6">
                {language === "de" ? "Web Radio Spieler" : "Web Radio Player"}
            </Label>
            <div className="ml-auto flex items-center">
                {/* <Label className="text-white mr-2 hidden sm:block">
                    {language === "de"
                        ? "Sprache auswählen:"
                        : "Select Language:"}
                </Label> */}
                <LanguageToggler />
            </div>
        </header>
    );
};
