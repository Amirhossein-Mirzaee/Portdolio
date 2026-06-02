import { useRef } from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section px-4" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">

            <div className="contact__card">
              <i className="uil uil-envelope-upload contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">amir2021zx@gmail.com</span>
              <a href="mailto:amir2021zx@gmail.com?subject=Mail from Portfolio" className="contact__button">
                Write me <i className="uil uil-corner-down-right-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-github-alt contact__card-icon"></i>
              <h3 className="contact__card-title">GitHub</h3>
              <span className="contact__card-data">Amirhossein-Mirzaee</span>
              <a href="https://github.com/Amirhossein-Mirzaee" target="_blank" rel="noreferrer" className="contact__button">
                Visit <i className="uil uil-corner-down-right-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-telegram-alt contact__card-icon"></i>
              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">@amirhossein_mirzaee</span>
              <a href="https://t.me/amirhossein_mirzaee" target="_blank" rel="noreferrer" className="contact__button">
                Write me <i className="uil uil-corner-down-right-alt contact__button-icon"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
