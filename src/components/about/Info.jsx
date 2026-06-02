import React from "react";

const Info = () => {
  return (
    <div className="about__info grid pr-5">
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4+ Years</span>
      </div>
      <div className="about__box">
        <i className="uil uil-bag-alt about__icon"></i>
        <h3 className="about__title">Companies</h3>
        <span className="about__subtitle">3 Companies</span>
      </div>
      <div className="about__box">
        <i className="uil uil-comment-question about__icon"></i>
        <h3 className="about__title">Response</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
