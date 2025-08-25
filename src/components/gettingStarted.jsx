import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GettingStarted = () => {
  const [show, setShow] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setShowCalendar(false);
  };

  const handleBook = () => setShowCalendar(true);

  return (
    <div className="text-center my-5">
      <Button
        variant="success"
        size="lg"
        onClick={handleShow}
        style={{ fontSize: "1rem" }}
      >
        Get Started
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="d-flex justify-content-between align-items-center">
          {/* Custom close button on the left */}
          <Button
            variant="link"
            onClick={handleClose}
            className="text-danger fw-bold p-0 me-3"
          >
            ✖
          </Button>

          {/* Centered title */}
          <Modal.Title className="flex-grow-1 text-center">
            Getting Started 🚀
          </Modal.Title>

          {/* Spacer for balance */}
          <div style={{ width: "24px" }}></div>
        </Modal.Header>

        <Modal.Body>
          {!showCalendar ? (
            <>
              <h5>How to Become a Partner</h5>
              <ol className="mt-3">
                <li>
                  📩 <b>Reach out:</b> Contact us via the form below or email.
                </li>
                <li>📦 Select your export category.</li>
                <li>
                  🚢 <b>Kickstart:</b> Begin exporting high-quality agricultural
                  goods worldwide.
                </li>
              </ol>

              <div className="alert alert-success mt-4">
                Ready to scale your export business? Let’s grow together!
              </div>
            </>
          ) : (
            <div className="text-center">
              <h5>Select Appointment Date 📅</h5>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
              />
              {selectedDate && (
                <p className="mt-3">
                  ✅ You selected: <b>{selectedDate.toDateString()}</b>
                </p>
              )}
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          {/* Left-aligned Close button */}
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

          {/* Right-aligned Book button */}
          {!showCalendar ? (
            <Button variant="primary" onClick={handleBook}>
              Book an appointment
            </Button>
          ) : (
            <Button
              variant="success"
              disabled={!selectedDate}
              onClick={() => {
                alert(`Appointment booked for ${selectedDate.toDateString()}`);
                handleClose();
              }}
            >
              Confirm Appointment
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GettingStarted;
