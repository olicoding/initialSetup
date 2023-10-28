import { useContext, useState } from "react";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Context } from "../../context/ContextProvider";
import "../../styles/components/auth/auth.scss";

function Auth() {
  const { user, setUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("register - response.user: ", response.user);

      setUser(response.user);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      console.log("login - response.user: ", response.user);

      setUser(response.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await auth.signOut();

      console.log("signing out...");

      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      {user ? (
        <button className="auth-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <div className="auth-form">
            <div className="auth-form-inputs">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="auth-form-btns">
              <button className="auth-btn" onClick={(e) => handleLogin(e)}>
                Login
              </button>
              <button className="auth-btn" onClick={(e) => handleRegister(e)}>
                Register
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Auth;
