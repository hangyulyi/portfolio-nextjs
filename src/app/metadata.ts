import { Metadata } from "next";
import { getMessages } from "next-intl/server";

export async function getMetadata(locale: string): Promise<Metadata> {
    const messages = await getMessages();
    const title = typeof messages['title'] === 'string' ? messages['title'] : 'Hangyul Yi | Portfolio';
    const description = typeof messages['description'] === 'string' ? messages['description'] : 'Hangyul Yi\'s portfolio site';

    return {
        title,
        description,
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