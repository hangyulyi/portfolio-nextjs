"use client"

import { useTranslations } from "next-intl"
import { useCallback, useState } from "react";

import ButtonOne from "../components/Buttons/ButtonOne";

const MAX_CASE_SWITCHES = 3;

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

/**
 * Check switches from upper/lower to determine spam or not
 * O(n)
 */
const checkCaseSwitches = (input: string): number => {
    const letters = input.replace(/[^a-zA-Z]/g, '');
    if (letters.length < 2) return 0;
    
    let switches = 0;
    let isPrevUpper = letters[0] === letters[0].toUpperCase();

    for(let i = 1; i < letters.length; i++) {
        const isCurrentUpper = letters[i] === letters[i].toUpperCase();

        if (isCurrentUpper !== isPrevUpper) {
            switches++;
        }
        isPrevUpper = isCurrentUpper;
    }

    return switches;
};
/**
 * Filter out spam messages. Logic based on received spam messages
 */
const isSpam = (data: ContactFormData): boolean => {
    const name = data.name || "";
    const message = data.message || "";
    const lowerMessage = message.toLowerCase();

    // create list of words, ignoring single characters
    const allWords = [...name.split(/\s+/), ...message.split(/\s+/)].filter(word => word.length > 1);

    // assume legitimate words are not longer than 20 characters (may change if needed)
    const longWordRegex = new RegExp(`\\S{${17},}`);

    // Rule 1. Message too long
    if(message.length > 1500) {
        return true;
    }

    // Rule 2. Words are longer than longWordRegex indication
    if (longWordRegex.test(name) || longWordRegex.test(message)) {
        return true;
    }

    // Rule 3. More than 2 links
    const urlRegex = /(http(s)?:\/\/[^\s]+|www\.[^\s]+)/gi;
    const linkCount = (message.match(urlRegex) || []).length;
    if(linkCount >= 2) {
        return true;
    }

    // Rule 4. Detect case switching
    for (const word of allWords) {
        const wordSwitches = checkCaseSwitches(word);
        if (wordSwitches > MAX_CASE_SWITCHES) {
            console.log("Flagged word: " + word);
            return true;
        }
    }


    return false;
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [spamBlocked, setSpamBlocked] = useState<boolean>(false);

    const t = useTranslations("Contact");

    // clears spam block when user interacts with form
    const handleInputChange = useCallback(() => {
        if (spamBlocked) {
            setSpamBlocked(false);
            setErrorMessage(null); // clear error message
        }
    }, [spamBlocked])

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);
        setSpamBlocked(false);

        const data: ContactFormData = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value),
        }

        // -------- SPAM FILTER
        if (isSpam(data)) {
            console.warn("Spam message detected and blocked");
            setErrorMessage(t('spamError'));
            setSpamBlocked(true);
            setLoading(false);
            return; // stop here so it doesn't run rest of the code
        }
        // ---------- SPAM FILTER END

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
            setSpamBlocked(false)
            setLoading(false)

            // reset form
            event.target.name.value = ""
            event.target.email.value = ""
            event.target.message.value = ""
        }
        if(!response.ok) {
            console.log("Error sending message")
            setErrorMessage(t('messageError'));
            setSpamBlocked(false)
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-center">
                    <ButtonOne
                        textKey="contactSubmit"
                        disabled={loading || spamBlocked}
                    />
                </div>
            </form> 
            {successMessage && <p className="mt-4 text-[#16a34a]">{successMessage}</p>}
            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
        </div>
    )
}