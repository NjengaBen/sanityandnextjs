import { Navbar, Providers } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white selection:bg-gray-50 h-full`}
      >
        <Providers>
          <Navbar />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
