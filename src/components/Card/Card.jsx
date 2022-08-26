import React from "react";

const Card = ({ image, title, description, path }) => {
  return (
    <section className="card" style={{ width: "18rem", marginBottom: "1rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt="..."
        style={{ height: "12rem", width: "100%" }}
      ></img>
      <section className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={path} className="btn btn-primary">
          Go
        </a>
      </section>
    </section>
  );
};

export { Card };
