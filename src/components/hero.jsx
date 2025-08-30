import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showServices, setShowServices] = useState(true);

  const services = [
    { title: "Export logistics & shipping", description: "We handle the entire export process, from documentation and packaging to international shipping, ensuring your commodities reach global markets efficiently and safely.",
      image: "https://raw.githubusercontent.com/addod19/farmLink/210825v1/public/images/export-logistics.jpeg" },
    { title: "Quality control", description: "Our team enforces strict quality assurance protocols, verifying that all agricultural products meet international standards and certification requirements.",
      image: "https://raw.githubusercontent.com/addod19/farmLink/210825v1/public/images/Farmer-assessing-quality.png" },
    { title: "Market linkage for farmers", description: "We connect local farmers and clients with global buyers, creating sustainable trade opportunities and ensuring fair prices for producers.",
      image: "https://raw.githubusercontent.com/addod19/farmLink/210825v1/public/images/linkf.png" },
    { title: "Bulk sourcing and supply", description: "We specialize in sourcing agricultural commodities in bulk, ensuring reliable supply chains, competitive pricing, and consistent quality for international clients.",
      image: "https://raw.githubusercontent.com/addod19/farmLink/210825v1/public/images/bult-sourcing.jpg" },
  ];

  return (
    <div className="container text-center py-5" id="services">
      <section className="mx-auto my-5">
        <motion.h2
          className="display-4 fw-bold text-success mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
           Connecting Africa’s Farms to the World 🌍
        </motion.h2>
        <p className="lead text-muted mb-4" style={{ fontSize: "14px" }}>
          At FarmLink, we bridge the gap between local farmers and international markets,
          delivering fresh, sustainable, and organic agricultural products globally.
        </p>

        <button
          onClick={() => setShowServices(!showServices)}
          className="btn btn-success btn-lg d-inline-flex align-items-center gap-2"
          style={{ fontSize: '1rem' }}
        >
          {showServices ? "Hide Services" : "Explore Our Services"} 
          <ArrowRight size={20} />
        </button>
      </section>

      <AnimatePresence>
        {showServices && (
          <motion.div
            key="services"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="row justify-content-center mt-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="col-12 col-md-6 mb-4"
              >
                <div className="card shadow-sm h-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  
                  <div className="card shadow-sm h-100">
                    <div className="card-body" style={{ fontSize: "14px" }}>
                      <h3 className="h5 fw-bold text-success">{service.title}</h3>
                      <p className="text-muted mt-2">{service.description}</p>
                    </div>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
