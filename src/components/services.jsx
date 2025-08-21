const Services = () => {
    return (
        <section id="services" className="py-16 bg-green-50">
            <div className="container">
                <div className='row g-4'>
                    {["Grains & Cereals", "Fresh Fruits", "Organic Vegetables"].map((item, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className='card-body text-center'>
                                    <h3 className="h5 text-success mb-3">{item}</h3>
                                    <p className="text-secondary">
                                    High-quality {item.toLowerCase()} sourced directly from trusted farms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;