import React from "react";
import { Card } from "../../components/Card/Card";

const Home = () => {
  const options = [
    {
      image: "https://travelsgist.com/wp-content/uploads/2022/05/test.jpg",
      title: "Students",
      description: "Information about students",
      path: "/students",
    },
    {
      image:
        "https://tiposdetexto.org/wp-content/uploads/2020/05/formulario.png",
      title: "Form",
      description: "Register your information",
      path: "/form",
    },
  ];
  return (
    <div
      className="home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h1 style={{ padding: "1rem" }}>
        <strong>Welcome students!</strong>
      </h1>

      {options.map((item, index) => {
        return (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            path={item.path}
          />
        );
      })}
    </div>
  );
};

export { Home };
