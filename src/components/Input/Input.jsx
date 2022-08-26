const Input = ({ label, type, placeholder, name, value, onChange, error }) => {
  return (
    <>
      <section style={{ paddingBottom: "1rem" }}>
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label"
          style={{ display: "flex", textAlign: "left", paddingLeft: "5px" }}
        >
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        ></input>

        <p style={{ textAlign: "left", paddingLeft: "5px", color: "red" }}>
          {error}
        </p>
      </section>
    </>
  );
};

export { Input };
