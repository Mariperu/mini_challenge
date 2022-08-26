import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";

const Form = () => {
  const [name, setName] = useState("");
  const [hobbie, setHobbie] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorHobbie, setErrorHobbie] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    console.log("send click");

    if (name === "") {
      setErrorName("Please write your name.");
      setTimeout(() => {
        setErrorName("");
      }, 4000);
    } else if (hobbie === "") {
      setErrorHobbie("Please write your hobbie.");
      setTimeout(() => {
        setErrorHobbie("");
      }, 4000);
    } else {
      const data = { name, hobbie };
      console.log(data);
      alert("thank you!");

      setName("");
      setHobbie("");
    }
  };

  return (
    <>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <h1>
            <strong>Form</strong>
          </h1>

          <Link
            type="button"
            to="/"
            className="btn btn-primary"
            style={{
              alignSelf: "center",
            }}
          >
            Return
          </Link>
        </section>

        <form>
          <div className="mb-3">
            <Input
              label="Name"
              type="text"
              placeholder="Write your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errorName}
            />
            <Input
              label="Hobbie"
              type="text"
              placeholder="Write your hobbie"
              name="hobbie"
              value={hobbie}
              onChange={(e) => setHobbie(e.target.value)}
              error={errorHobbie}
            />
          </div>

          <button className="btn btn-primary" type="submit" onClick={sendForm}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export { Form };
