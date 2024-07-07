import { Metadata } from "next";
import { getMessages,getLocale } from "next-intl/server";

export async function getMetadata() {
    const messages = await getMessages();
    const locale = await getLocale();

    return {
      title: messages['title'] || 'Hangyul Yi | Portfolio',
      description: messages['description'] || 'Portfolio website',
      icons: {
          icon: [
            {
              media: '(prefers-color-scheme: light)',
              url: '/favicon-light.ico',
              href: '/favicon-light.ico',
            },
            {
              media: '(prefers-color-scheme: dark)',
              url: '/favicon-dark.ico',
              href: '/favicon-dark.ico',
            },
          ]
        }
    }
}