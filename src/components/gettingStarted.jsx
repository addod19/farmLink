import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";
import { saveAppointment } from "../services/appointmentService";
import generateGoogleCalendarLink from "../utils/generateGoogleCalendarLink";


const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const GettingStarted = () => {
  const [show, setShow] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState("");
   const [loading, setLoading] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setShowCalendar(false);
    setSelectedDate(null);
    setEmail("");
  };

  const handleBook = () => setShowCalendar(true);

  const handleConfirm = async () => {
    if (!selectedDate || !email) {
      alert("Please enter your email and select a date.");
      return;
    }

    const startDate = selectedDate;
    const endDate = new Date(selectedDate.getTime() + 30 * 60000);

    const calendarLink = generateGoogleCalendarLink({
      title: "FarmLink Appointment",
      details: "Meeting with the FarmLink team",
      location: "Zoom / Online",
      startDate,
      endDate,
    });

    const appointmentData = {
      email,
      appointmentDate: selectedDate.toISOString(),
      calendarLink,
    };

    console.log("Using EmailJS IDs:", serviceId, templateId, publicKey);

    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          ...appointmentData,
          to_email: "addodaniellarbi@gmail.com",
          user_email: email,
        },
        publicKey
      );

      await emailjs.send(
        serviceId,
        templateId,
        {
          ...appointmentData,
          to_email: email
        },
        publicKey
      );

      // 2️⃣ Save to Firebase Firestore
      await saveAppointment(email, selectedDate.toISOString());

      alert(`✅ Appointment booked for ${selectedDate.toDateString()}`);
      handleClose();
    } catch (error) {
      console.error("Booking error:", error);
      alert("❌ Failed to book appointment. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <Button
            variant="link"
            onClick={handleClose}
            className="text-danger fw-bold p-0 me-3"
          >
            ✖
          </Button>

          <Modal.Title className="flex-grow-1 text-center">
            Getting Started 🚀
          </Modal.Title>

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

              <Form.Group className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>

          {!showCalendar ? (
            <Button variant="primary" onClick={handleBook}>
              Book an appointment
            </Button>
          ) : (
            <Button
              variant="success"
              disabled={!selectedDate || loading}
              onClick={handleConfirm}
            >
              { loading ? "Loading..." : "Confirm Appointment" }
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GettingStarted;
