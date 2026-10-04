import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gowthamraj G | Web Developer",
  description:
    "Gowthamraj G is a B.Sc Computer Science student and web developer building modern responsive websites and web applications.",
  keywords: [
    "Gowthamraj G",
    "Gowthamraj",
    "Web Developer",
    "Freelance Web Developer",
    "Computer Science Student",
    "Django Developer",
    "Python Developer",
    "React Developer",
    "Portfolio",
    "Nandha Arts and Science College",
    "Erode Web Developer",
  ],
  authors: [{ name: "Gowthamraj G" }],
  openGraph: {
    title: "Gowthamraj G | Web Developer",
    description:
      "Gowthamraj G is a B.Sc Computer Science student and web developer building modern responsive websites and web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Gowthamraj G Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowthamraj G | Web Developer",
    description:
      "Gowthamraj G is a B.Sc Computer Science student and web developer building modern responsive websites and web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-text-primary bg-background">
        {children}
      </body>
    </html>
  );
}
