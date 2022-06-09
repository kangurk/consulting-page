import { useState } from "react"
import "./Contact.scss"

interface formState {
    name: string;
    email: string;
    number: string;
    message: string;
}

export const ContactForm = () => {
    const [state, setState] = useState<formState>({name:"", email:"", number:"", message:""})

    const handleChange = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
            <div className="contact">
                <h1>VÕTKE MINUGA ÜHENDUST</h1>
                <form>
                    <ContactFormInput
                        stateKey="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                    <ContactFormInput
                        stateKey="number"
                        value={state.number}
                        onChange={handleChange}
                    />
                    <ContactFormInput
                        stateKey="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <ContactFormInput
                        stateKey="message"
                        value={state.message}
                        onChange={handleChange}
                    />
                    <button>Saada</button>
                </form>
            </div>
    )
}

const ContactFormInput = ({ stateKey, value, onChange }) => {
    return <input value={value} onChange={(event) => onChange(stateKey, event.target.value)}/>
}