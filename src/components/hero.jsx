import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showServices, setShowServices] = useState(false);

  const services = [
    { title: "Charcoals", description: "High-quality charcoal for export." },
    { title: "Food Crops", description: "Fresh agricultural produce for global markets." },
    { title: "Shea Butter", description: "Organic shea butter sourced responsibly." },
    { title: "Cashew Nuts", description: "Premium cashews for export." },
  ];

  return (
    <div className="container text-center py-5">
      <section className="mx-auto my-5">
        <motion.h2
          className="display-4 fw-bold text-success mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Export Fresh Agricultural Products Worldwide
        </motion.h2>
        <p className="lead text-muted mb-4">
          We connect farmers to global markets with high-quality, sustainable agricultural products.
        </p>

        {/* Bootstrap button */}
        <button
          onClick={() => setShowServices(!showServices)}
          className="btn btn-success btn-lg d-inline-flex align-items-center gap-2"
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
                  <div className="card-body">
                    <h3 className="h5 fw-bold text-success">{service.title}</h3>
                    <p className="text-muted mt-2">{service.description}</p>
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
