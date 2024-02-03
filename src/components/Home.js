import React from "react";
import { NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
        <a href='/'>Home</a>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
      <h1>Welcome to my website!</h1>
    </div>
  );
};

export default Home;
