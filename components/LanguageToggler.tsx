import React from "react";
import { useLanguage } from "./LanguageProvider";

const LanguageToggler: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            className="text-white cursor-pointer bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={toggleLanguage}
        >
            {language === "en" ? "Switch to Deutsch" : "Switch to English"}
        </button>
    );
};

export default LanguageToggler;
