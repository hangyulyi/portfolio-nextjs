import { Outfit, Noto_Sans_KR } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getMetadata } from "./metadata";

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
  const fontClass = locale === 'kr' ? notoSansKR.className : outfit.className;
  
  return (
    <html lang={locale}>
      <body className={fontClass}>
        <NextIntlClientProvider messages={ messages }>
          { children }
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export { getMetadata as metadata }
