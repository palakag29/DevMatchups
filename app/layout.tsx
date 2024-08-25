import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "./StoreProvider";
import { NextAuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Matchups",
  description: "Find teams for hackathons worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          
        >
          <NextAuthProvider>
            <StoreProvider>
              {children}
            </StoreProvider>
          </NextAuthProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
