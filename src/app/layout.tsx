import { Outfit, Noto_Sans_KR } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getMetadata } from "./metadata";

import Navbar from "./components/Navbar";
import ScrollUpBtn from "./components/ScrollUpBtn";
import Footer from "./components/Footer";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  // dynamic font based on locale
  const fontClass = 
    locale === 'kr' ? 'font-neodgm' :
    locale === 'en' ? 'font-cutepixel' :
    outfit.className;
  
  const fontSize = 
    locale === 'kr' ? 'text-3xl' : 'text-4xl'

  return (
    <html lang={locale}>
      <body className={`${fontClass} ${fontSize} flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={ messages }>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollUpBtn />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export { getMetadata as metadata }