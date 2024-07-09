"use client"

import { useTranslations } from "next-intl"
import { useState } from "react";

import ButtonOne from "../components/Buttons/ButtonOne";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const t = useTranslations("Contact");

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

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
            setSuccessMessage(t('messageSent'));
            setLoading(false)

            // reset form
            event.target.name.value = ""
            event.target.email.value = ""
            event.target.message.value = ""
        }
        if(!response.ok) {
            console.log("Error sending message")
            setErrorMessage(t('messageError'));
            setLoading(false)
        }

    }

    return (
        <div>
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

                <div className="flex justify-center">
                    <ButtonOne
                        textKey="contactSubmit"
                        disabled={loading}
                    />
                </div>
            </form> 
            {successMessage && <p className="mt-4 text-[#16a34a]">{successMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
        </div>
    )
}