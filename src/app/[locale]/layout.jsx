import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import WordProvider from "../../context/WordProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spelling Bee",
  description: "Spelling Bee Game",
};

export default function RootLayout({ children, ...props }) {
  const { locale } = props.params;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <WordProvider>
          <Navbar />
          {children}
        </WordProvider>
      </body>
    </html>
  );
}
