const About = () => {
    return (
        <section id="about" className="py-5 text-center container">
            <h2 className="h2 fw-bold text-success mb-3">Why Partner with FarmLink?</h2>
            <p className="lead text-secondary mb-3" style={{ fontSize: "14px" }}>
                We believe in fair trade, sustainable agriculture, and empowering local farmers.
                By choosing FarmLink, you get quality-assured products, transparent sourcing, 
                and a trusted partner dedicated to building long-term global trade relationships.
            </p>

            <div className="row mt-4">
            <div className="col-md-4">
                <h5 className="text-success">🌿 Sustainable Farming</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>We work with eco-conscious farmers to promote green agriculture.</p>
            </div>
            <div className="col-md-4">
                <h5 className="text-success">🌍 Global Reach</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>Supplying fresh products to markets across Europe, Asia, and North America.</p>
            </div>
            <div className="col-md-4">
                <h5 className="text-success">🤝 Trusted Partnerships</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>We prioritize integrity, reliability, and customer satisfaction.</p>
            </div>
            </div>
        </section>
    );
}

export default About;