import { useTranslations } from "next-intl"

export default function ContactForm() {

    const t = useTranslations("Contact");

    return (
        <form>
            <div className="w-full flex flex-col my-4">
                <input 
                    className="p-4 bg-gray-5- border border-gray-100 rounded-md" 
                    type="text" 
                    autoComplete="off" 
                    id="name" 
                    placeholder={t('name')}
                />
            </div>

            <div className="w-full flex flex-col my-4">
                <input 
                    className="p-4 bg-gray-5- border border-gray-100 rounded-md" 
                    type="text" 
                    autoComplete="off" 
                    id="email"
                    placeholder={t('email')}
                />
            </div>
            
            <div>
                <textarea 
                    rows={6} 
                    name="message"
                    className="w-full p-4 bg-gray-5 border border-gray-100 rounded-md"
                    placeholder={t('message')}
                />
            </div>
        </form> 
    )
}