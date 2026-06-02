import React, { useState } from "react";
import "./qualificatin.css";

const Qualificatin = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <section className="qualification section px-4" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>
      <div className="qualification__container">
        <div className="qualification__tabs">
          <div
            className={toggle === 1 ? "button--flex" : "qualification__button button--flex"}
            onClick={() => setToggle(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
          <div
            className={toggle === 2 ? "button--flex" : "qualification__button button--flex"}
            onClick={() => setToggle(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Experience */}
          <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-end Developer</h3>
                <span className="qualification__subtitle">Arsess Financial Information — Tehran</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2025 – Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Front-end Developer</h3>
                <span className="qualification__subtitle">DGEA — Tehran</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 – 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-end Developer</h3>
                <span className="qualification__subtitle">Aseman Sooye Parsian — Tehran</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 (9 months)
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

          </div>

          {/* Education */}
          <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Petroleum Engineering</h3>
                <span className="qualification__subtitle">University of Payam-e-Noor — Tehran</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 – Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">JavaScript / SabzLearn</h3>
                <span className="qualification__subtitle">Self-study</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React / Kent C. Dodds</h3>
                <span className="qualification__subtitle">Self-study</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 – 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificatin;
