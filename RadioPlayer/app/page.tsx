"use client";

import React, { Suspense } from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoadingScreen from "./loading";

const Home: React.FC = () => {
    return (
        <LanguageProvider>
            <Suspense fallback={<LoadingScreen />}>
                <Header />
                <div className="container mx-auto p-4">
                    <AudioPlayer />
                </div>
                <Footer />
            </Suspense>
        </LanguageProvider>
    );
};

export default Home;
