import React from "react";
import { thunk } from "@modules/home/dux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [users, updateUsers] = React.useState([]);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(thunk.fetchUser((data) => updateUsers(data)))}
      >
        Get data
      </button>
      <Link to="/404"> He </Link>
    </>
  );
}
export default Home;
