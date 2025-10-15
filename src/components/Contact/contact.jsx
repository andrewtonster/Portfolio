import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import linkedinicon from "../../assets/linkedin_img.png";
import githubicon from "../../assets/githubcolor.png";
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
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>

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
            <a
              href="https://www.linkedin.com/in/andrew-ton-367b18253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinicon} alt="" className="link" />
            </a>

            <a
              href="https://github.com/andrewtonster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubicon} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
