import React from "react";
import "./contact.css";
import snorlax from "../../assets/snorlax.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setTimeout(() => {
      toast.success("📧 Email sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }, 500);

    emailjs
      .sendForm(
        "service_0gst4ur",
        "template_uigoaqp",
        form.current,
        "QkwwQkOH_hVUbf72Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contactPage">
      {/* <div className="clients">
        <h1 className="contactPageTitle">Other Interests</h1>
        <p className="clientDesc">This is some more information about me</p>
        <div className="clientImgs">
          <img src="src/assets/ucsdImg.png" alt="" className="clientImg" />
          <img src={snorlax} alt="" className="clientImg" />
          <img src={snorlax} alt="" className="clientImg" />
          <img src={snorlax} alt="" className="clientImg" />
        </div>
      </div> */}
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Feel free to reach out! Simply enter your name, email, and message
          below, then click "Submit." Thank you—I’ll get back to you shortly!
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
            required
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <ToastContainer />
          <div className="links">
            <img src={snorlax} alt="" className="link" />
            <img src={snorlax} alt="" className="link" />
            <img src={snorlax} alt="" className="link" />
            <img src={snorlax} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
