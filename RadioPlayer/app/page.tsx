"use client";

import React, { Suspense } from "react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoadingScreen from "./loading";

const Home = () => {
    return (
        <LanguageProvider>
            <Suspense fallback={<LoadingScreen />}>
                <Header />
                <div className="mx-auto p-4">
                    <AudioPlayer />
                </div>
                <Footer />
            </Suspense>
        </LanguageProvider>
    );
};

export default Home;
