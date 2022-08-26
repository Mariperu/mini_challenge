import React from "react";
import { Link } from "react-router-dom";
import DataStudents from "../../data/data.json";
import { Table } from "../../components/Table/Table";

const Students = () => {
  const data = DataStudents.students;
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
            <strong>Students</strong>
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

        <Table data={data} />
      </div>
    </>
  );
};

export { Students };
