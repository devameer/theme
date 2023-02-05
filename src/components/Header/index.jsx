import "./style.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { ThemeContext } from "../../App";
const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <header>
      <h1>Logo</h1>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>

        <li>
          <NavLink to="/gifs">gifs</NavLink>
        </li>

        <li>
          <NavLink to="/posts">posts</NavLink>
        </li>

        <li>
          <NavLink to="/slider">slider</NavLink>
        </li>

        <li>
          <NavLink to="/todos">todos</NavLink>
        </li>

        <li>
          <NavLink to="/todo">todo</NavLink>
        </li>
        <li>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Toggle
          </button>
        </li>
        <li>{theme}</li>
      </ul>
    </header>
  );
};

export default Header;
