import ContactForm from "./contactForm";

const Contact = () => {
    return (
        <section id="contact" className="bg-success bg-opacity-10 py-5">
            <div className="container text-center">
                <h2 className="h2 fw-bold text-success mb-3">Let’s Export Together</h2>
                <p className="text-secondary mb-4">
                Whether you’re a farmer, distributor, or buyer, LinkFarm is here to connect you with global opportunities. 
                Send us a message today and let’s build your export journey.
                </p>
                <button className="btn btn-success btn-lg rounded-pill py-4" style={{ fontSize: '1rem' }}>
                    Contact Us
                </button>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;
