"use client";
import React, { createContext, useContext, useState } from "react";
import { ILanguageContextProps } from "../interfaces/ILanguageContextProps";
import { ILanguageProviderProps } from "@/interfaces/ILanguageProviderProps";

const LanguageContext = createContext<ILanguageContextProps | undefined>(
    undefined
);

export const LanguageProvider: React.FC<ILanguageProviderProps> = ({
    children,
}: ILanguageProviderProps) => {
    const [language, setLanguage] = useState("de");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "de" ? "en" : "de"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): ILanguageContextProps => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
};
