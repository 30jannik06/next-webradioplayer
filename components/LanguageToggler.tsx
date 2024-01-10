import React from "react";
import { useLanguage } from "./LanguageProvider";
import { ErrorBoundary } from "./ErrorBoundary";
import { Button } from "./ui/button";

export const LanguageToggler: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <ErrorBoundary>
            <Button
                className={`${
                    language === "de"
                        ? "bg-blue-500 text-white border border-solid border-white"
                        : "bg-white text-blue-500 border border-solid border-blue-500 hover:bg-blue-500 hover:text-white"
                } px-4 py-2 rounded-full uppercase text-xs transition-all duration-300`}
                type="button"
                onClick={toggleLanguage}
            >
                {language === "de" ? "Switch to English" : "Switch to Deutsch"}
            </Button>
        </ErrorBoundary>
    );
};
