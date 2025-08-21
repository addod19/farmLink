import ContactForm from "./contactForm";

const Contact = () => {
    return (
        <section id="contact" className="bg-success bg-opacity-10 py-5">
            <div className="container text-center">
            <h2 className="h2 fw-bold text-success mb-3">Start Your Export Journey</h2>
            <p className="text-secondary mb-4">Get in touch with our export specialists today.</p>
            <button className="btn btn-success btn-lg rounded-pill py-4">Contact Us</button>
            <ContactForm />
            </div>
        </section>
    );
}

export default Contact;
