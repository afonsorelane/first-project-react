import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <span>Afonso</span>
        <span>Relane</span>
      </h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
};
