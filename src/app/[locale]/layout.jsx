import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import WordProvider from "../../context/WordProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spelling Bee",
  description: "Spelling Bee Game",
};

export default async function RootLayout({ children, ...props }) {
  const { locale } = props.params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <WordProvider>
            <Navbar />
            {children}
            <ToastContainer />
          </WordProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
