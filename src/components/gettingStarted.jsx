import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GettingStarted = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="text-center my-5">
      <Button variant="success" size="lg" onClick={handleShow} style={{ fontSize: '1rem' }}>
        Get Started
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="custom-header-pos">Getting Started 🚀 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>How to Become a Partner</h5>
          <ol className="mt-3">
            <li>📩 <b>Reach out:</b> Contact us via the form below or email.</li>
            <li>📦 Select your export category.</li>
            <li>🚢 <b>Kickstart:</b> Begin exporting high-quality agricultural goods worldwide.</li>
          </ol>

          <div className="alert alert-success mt-4">
            Ready to scale your export business? Let’s grow together!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger outline" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Book an appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GettingStarted;
