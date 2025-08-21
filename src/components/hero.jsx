import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="text-center py-20 px-6 max-w-4xl mx-auto">
            <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            >
            Export Fresh Agricultural Products Worldwide
            </motion.h2>
            <p className="text-lg text-gray-600 mb-8 nunito">
            We connect farmers to global markets with high-quality, sustainable agricultural products.
            </p>
            <button className="btn btn-success btn-lg rounded-pill d-inline-flex align-items-center mb-5 mt-2">
            Explore Our Services <ArrowRight className="ml-2" />
            </button>
        </section>
    );
}

export default Hero;
