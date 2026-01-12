import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Ismail - Software Engineer",
  description: "Backend-focused Software Engineer specializing in Java, Spring Boot, Microservices, and Full-Stack Development",
  keywords: "Software Engineer, Java Developer, Spring Boot, Microservices, React, Next.js, Full Stack Developer, Backend Developer",
  authors: [{ name: "Mohammed Ismail" }],
  openGraph: {
    title: "Mohammed Ismail - Software Engineer",
    description: "Backend-focused Software Engineer specializing in Java, Spring Boot, Microservices, and Full-Stack Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
