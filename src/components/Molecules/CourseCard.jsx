import React from "react";

const CourseCard = ({ title, image, price, teacher }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">{teacher}</div>
      <div className="s-main-center">
        <a href="https://ed.team" className="button-ghost-alert button--tiny">
          $ {price} USD
        </a>
      </div>
    </div>
  </article>
);

export default CourseCard;
