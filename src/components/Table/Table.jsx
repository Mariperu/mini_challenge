const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Career</th>
          <th scope="col">Hobbie</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.nombre}</td>
              <td>{item.edad}</td>
              <td>{item.carrera}</td>
              <td>{item.hobbie}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Table };
