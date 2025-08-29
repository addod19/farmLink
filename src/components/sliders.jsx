import { Carousel } from "react-bootstrap";

const slides = [
  {
    title: "Raw Commodities",
    description: "Fresh produce and raw materials sourced from trusted farmers.",
    src: "https://images.pexels.com/photos/13612369/pexels-photo-13612369.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    alt: "Commodities",
  },
  {
    title: "Processed Goods",
    description: "High-quality processed and packaged products.",
    src: "https://images.pexels.com/photos/16211537/pexels-photo-16211537.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    alt: "Processed Goods",
  },
  {
    title: "Animal Products",
    description: "Fresh dairy, meat, and animal-derived products.",
    src: "https://images.pexels.com/photos/18973339/pexels-photo-18973339.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    alt: "Animal Products",
  },
];

const fallbackImage =
  "https://github.com/addod19/farmLink/blob/210825v1/public/images/commodities.jpg";

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
