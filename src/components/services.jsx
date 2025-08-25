const Services = () => {
    return (
        <section id="services" className="py-16 bg-green-50">
            <div className="container">
                <div className='row g-4'>
                    {[
                        { title: "Commodities", desc: "Services for exporting primary agricultural products like cocoa, coffee, shea nuts, cashew nuts, and grains. " },
                        { title: "Processed Goods", desc: "Services for exporting processed foods, such as food and agriculture produce, palm oil, and fruit and vegetable juices. " },
                        { title: "Animal Products", desc: "Services for meat, poultry, and fish, as well as eggs. " },
                        
                    ].map((item, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className='card-body text-center' style={{ fontSize: "14px" }}>
                                    <h3 className="h5 text-success mb-3">{item.title}</h3>
                                    <p className="text-secondary">
                                    High-quality {item.desc.toLowerCase()}
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