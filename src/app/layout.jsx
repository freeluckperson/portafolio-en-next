import { Footer } from "@/components";
import NavBar from "@/components/NavBar";
import { Inter, Wendy_One, JetBrains_Mono } from "next/font/google";
// import "./globals.css";

const inter = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Erick Segura",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
