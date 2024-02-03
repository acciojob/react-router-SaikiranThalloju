import React from 'react'
import { NavLink} from "react-router-dom";
const About = () => {
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
        <h1>About</h1>
      <p>This is a sample React Router program.</p>
    </div>
  )
}

export default About
