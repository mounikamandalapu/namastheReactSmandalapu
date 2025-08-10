import Navbar from "./Navbar";
import { LOGO } from "../utils/constants";
import { useState } from "react";

const Logo = () => {
  return <img src={LOGO} alt="Food Ordering App" className="foodLogo" />;
};

export const Title = ({ name }) => {
  return <h4 className="title"> {name} </h4>;
};

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="headerContainer">
      <section className="titleContainer">
        <Logo />
        <Title name="Namansthe Food App" />
      </section>
      <Navbar />
      <button
        className="login-btn"
        onClick={(e) => {
          login === "Login" ? setLogin("LogOut") : setLogin("Login");
        }}
      >
        {login}
      </button>
    </div>
  );
};

export default Header;
