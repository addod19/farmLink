import { Carousel } from "react-bootstrap";
import processed from "../assets/palm_oil_in_glass_bowl.png"
import animal from "../assets/group1.jpeg"
import commodities from "../assets/commodities.jpg"

const slides = [
  {
    title: "Raw Commodities",
    description: "Fresh produce and raw materials sourced from trusted farmers.",
    src: commodities,
    alt: "Commodities",
  },
  {
    title: "Processed Goods",
    description: "High-quality processed and packaged products.",
    src: processed,
    alt: "Processed Goods",
  },
  {
    title: "Animal Products",
    description: "Fresh dairy, meat, and animal-derived products.",
    src: animal,
    alt: "Animal Products",
  },
];

const fallbackImage =
  "https://images.pexels.com/photos/13612369/pexels-photo-13612369.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt={slide.alt}
            style={{ height: "400px", objectFit: "cover" }}
            onError={(e) => (e.currentTarget.src = fallbackImage)}
          />
          <Carousel.Caption className="custom-caption">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
