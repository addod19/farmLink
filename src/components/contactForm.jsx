import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [buttonState, setButtonState] = useState("idle");

  const sendMail = async(e) => {
    e.preventDefault();

    setButtonState("loading");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_kdslfir",
        "template_wcshe7l",
        form.current,
        "01AUrtrlzsFxgrT_I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully ✅!");
          setButtonState("success");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message ❌, try again later.");
          setButtonState("idle");
        }
      );
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4 bg-light">
              <form ref={form} onSubmit={sendMail}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="user_email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className={`btn btn-success btn-lg
                      ${buttonState === "idle" ? "bg-green-600 hover:bg-green-700" : ""}
                      ${buttonState === "loading" ? "bg-yellow-500 cursor-wait" : ""}
                      ${buttonState === "success" ? "bg-blue-600" : ""}
                    `}
                  >
                    {buttonState === "idle" && "Send Message"}
                    {buttonState === "loading" && "Sending..."}
                    {buttonState === "success" && "Message Sent!"}
                  </button>

                </div>
              </form>
              {status && <p className="mt-3 text-center">{status}</p>}
            </div>
            <div className="card-footer text-center bg-white">
              <small className="text-muted">
                We’ll get back to you as soon as possible 💚
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
