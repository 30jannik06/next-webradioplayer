import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import {Footer} from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Janniks Webradio",
    description: "Generated with Love 💯",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <LanguageProvider>
                    <Header />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}
