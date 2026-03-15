import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import NavigationLoader from "@/components/NavigationLoader";

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
    <html lang="en" style={{ backgroundColor: 'white' }} suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white text-black`}
      >
        <NavigationLoader>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </NavigationLoader>
      </body>
    </html>
  );
}
