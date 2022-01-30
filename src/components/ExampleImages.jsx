import React from "react";

export const ExampleImages = ({ img, text }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};
