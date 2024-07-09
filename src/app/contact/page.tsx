import ContactForm from "./ContactForm"
import { useTranslations } from "next-intl"

export default function ContactPage() {
    const t = useTranslations('Contact')

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 my-10 text-center">
            
            <h1 className="font-bold text-4xl pt-2 pb-4 uppercase tracking-wider">{t('title')}</h1>
            <p>{t('title_blurb')}</p>
            
            <ContactForm />
        </div>
    )
}