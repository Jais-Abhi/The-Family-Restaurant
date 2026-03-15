import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import NavigationLoader from "@/components/NavigationLoader";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "L'Élégance | Modern Luxury Restaurant",
  description: "Experience the finest dining with a modern touch. Exquisite dishes, elegant ambiance, and unforgettable memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider>
          <NavigationLoader>
            <ThemeToggle />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </NavigationLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
