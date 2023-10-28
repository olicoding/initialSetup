import Logo from "./Logo";
import Auth from "../components/auth/Auth";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/ContextProvider";
import "../styles/layout/header.scss";

function Header() {
  const { user } = useContext(Context);
  return (
    <div className="header-container">
      <header className="header-box">
        <div>
          <Logo />
        </div>
        <nav>
          <ul>
            <NavLink className="nav-link" to="/">
              home
            </NavLink>
            {user && (
              <NavLink className="nav-link" to="/eShop">
                eShop
              </NavLink>
            )}
          </ul>
        </nav>

        <div className="auth-container">
          <Auth />
        </div>
      </header>
    </div>
  );
}

export default Header;
