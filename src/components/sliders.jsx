import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/13612369/pexels-photo-13612369.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900"
          alt="Commodities"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Raw Commodities</h3>
          <p>Fresh produce and raw materials sourced from trusted farmers.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/addod19/farmLink/210825v1/public/images/sheabutter.jpg"
          alt="Processed Goods"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Processed Goods</h3>
          <p>High-quality processed and packaged products.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/19025067/pexels-photo-19025067.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900"
          alt="Animal Products"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Animal Products</h3>
          <p>Fresh dairy, meat, and animal-derived products.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
