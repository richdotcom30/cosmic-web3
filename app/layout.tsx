import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COSMIC - To the Moon and Beyond",
  description: "The next generation meme coin taking the crypto universe by storm. Join the cosmic journey!",
  keywords: ["crypto", "memecoin", "web3", "cosmic", "blockchain"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
