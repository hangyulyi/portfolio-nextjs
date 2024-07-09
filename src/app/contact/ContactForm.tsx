"use client"

import { useTranslations } from "next-intl"
import ButtonOne from "../components/Buttons/ButtonOne";

export default function ContactForm() {

    const t = useTranslations("Contact");

    async function handleSubmit(event: any) {
        event.preventDefault();

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if(response.ok) {
            console.log("Message sent successfully")
        }
        if(!response.ok) {
            console.log("Error sending message")
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
                <input 
                    className="p-4 bg-gray-5 border border-gray-100 rounded-md" 
                    type="text" 
                    required
                    autoComplete="off" 
                    id="name" 
                    placeholder={t('name')}
                />
            </div>

            <div className="w-full flex flex-col my-4">
                <input 
                    className="p-4 bg-gray-5 border border-gray-100 rounded-md" 
                    type="email" 
                    required
                    autoComplete="off" 
                    id="email"
                    placeholder={t('email')}
                />
            </div>
            
            <div>
                <textarea 
                    rows={6} 
                    name="message"
                    id="message"
                    required
                    className="w-full p-4 bg-gray-5 border border-gray-100 rounded-md"
                    placeholder={t('message')}
                />
            </div>
            <ButtonOne
                textKey="contactSubmit"
            />
        </form> 
    )
}