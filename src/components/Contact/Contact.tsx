import { ContactDetails } from "./ContactDetails.tsx"
import { ContactForm } from "./ContactForm.tsx"
import "./Contact.scss"

export const Contact = () => {
    return (
        <div className="contactContainer">
            <ContactDetails/>
            <ContactForm/>
        </div>
    )
}