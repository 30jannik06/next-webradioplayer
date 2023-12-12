"use client";
import { Logo } from "./Logo";
import { useState } from "react";

interface Translations {
    [key: string]: {
        title: string;
        selectLanguage: string;
    };
}

export const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("de");

    const translations: Translations = {
        en: {
            title: "Web Radio Player",
            selectLanguage: "Select Language:",
        },
        de: {
            title: "Web Radio Spieler",
            selectLanguage: "Sprache auswählen:",
        },
        // Füge hier weitere Sprachen hinzu
    };

    const handleChangeLanguage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        // Hier könntest du weitere Aktionen durchführen, um die Spracheinstellung zu aktualisieren
        console.log(`Selected language: ${newLanguage}`);
    };

    return (
        <header className="bg-[#213b8d] flex items-center p-4">
            <Logo />
            <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ml-4 sm:ml-6">
                {translations[selectedLanguage].title}
            </h1>
            <div className="ml-auto flex items-center">
                <label className="text-white mr-2 hidden sm:block">
                    {translations[selectedLanguage].selectLanguage}
                </label>
                <select
                    onChange={handleChangeLanguage}
                    value={selectedLanguage}
                    className="bg-gray-700 text-white p-2 rounded"
                >
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                    {/* Weitere Sprachen */}
                </select>
            </div>
        </header>
    );
};
