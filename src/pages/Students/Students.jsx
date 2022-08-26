import { Link } from "react-router-dom";

const Students = () => {
  return (
    <>
      <div>Students page</div>

      <Link type="button" to="/">
        Return
      </Link>
    </>
  );
};

export { Students };
