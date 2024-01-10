"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFoundPage: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#1b1b1b] text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                    404 - Seite nicht gefunden
                </h1>
                <p className="text-lg">
                    Entschuldigung, die Seite, die Sie suchen, existiert nicht.
                </p>
                <Button
                    className="text-white hover:underline mt-4 block"
                    onClick={handleButtonClick}
                >
                    Zurück zur Startseite
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
