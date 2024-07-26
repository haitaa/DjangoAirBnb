import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Air Bnb",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const content = <p>Yo</p>;

    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className="pt-24">{children}</div>
                <LoginModal />
            </body>
        </html>
    );
}
