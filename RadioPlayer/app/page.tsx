"use client";

import React from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { radioStreamUrl } from "@/components/utils/Radiostations";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Home: React.FC = () => {
    return (
        <LanguageProvider>
            <Header />
            <div className="container mx-auto p-4">
                <AudioPlayer streamUrl={radioStreamUrl} />
            </div>
            <Footer />
        </LanguageProvider>
    );
};

export default Home;
