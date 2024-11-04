import ContactForm from "./ContactForm";

function ContactSection () {
    return (
        <section id="contato" className="flex bg-primary-500 flex-col items-center">
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Contato</h1>
                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
export default ContactSection;