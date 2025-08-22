import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GettingStarted = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="text-center my-5">
      <Button variant="success" size="lg" onClick={handleShow}>
        Get Started
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🚀 Getting Started with Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>How to Become a Partner</h5>
          <ol className="mt-3">
            <li>📄 Send us a message through the 'Contact Us' form.</li>
            <li>📦 Select your export category (Charcoals, Food Crops, Spices, etc.).</li>
            <li>✅ Verify your business documents with our team.</li>
            <li>🌍 Start connecting with international buyers.</li>
          </ol>

          <div className="alert alert-success mt-4">
            Ready to scale your export business? Let’s grow together!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => alert("Redirect to Signup!")}>
            Join Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GettingStarted;
