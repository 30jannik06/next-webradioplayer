"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { ILanguageContextProps } from "../interfaces/ILanguageContextProps";

const LanguageContext = createContext<ILanguageContextProps | undefined>(
    undefined
);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}: LanguageProviderProps) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "de" : "en"));
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
