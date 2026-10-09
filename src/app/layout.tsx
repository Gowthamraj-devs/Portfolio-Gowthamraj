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
  metadataBase: new URL("https://gowthamraj-devs.github.io/Portfolio-Gowthamraj"),
  title: "Gowthamraj G | Web Developer & B.Sc Computer Science Student",
  description:
    "Portfolio of Gowthamraj G — Web Developer & B.Sc Computer Science Student skilled in HTML, CSS, JavaScript, Node.js, Python, C, and Java.",
  keywords: [
    "Gowthamraj G",
    "Gowthamraj",
    "Web Developer",
    "Software Developer",
    "Python Developer",
    "JavaScript Developer",
    "Node.js",
    "C Developer",
    "Java Developer",
    "Freelance Web Developer",
    "Nandha Arts and Science College",
    "Erode Web Developer",
    "OD Application Management System",
  ],
  authors: [{ name: "Gowthamraj G" }],
  alternates: {
    canonical: "https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/",
  },
  openGraph: {
    title: "Gowthamraj G | Web Developer & B.Sc Computer Science Student",
    description:
      "Gowthamraj G builds responsive websites and software applications with HTML, CSS, JavaScript, Node.js, Python, C, and Java.",
    url: "https://gowthamraj-devs.github.io/Portfolio-Gowthamraj/",
    type: "website",
    locale: "en_US",
    siteName: "Gowthamraj G Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowthamraj G | Web Developer",
    description:
      "Gowthamraj G builds responsive websites and software applications with HTML, CSS, JavaScript, Node.js, Python, C, and Java.",
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
