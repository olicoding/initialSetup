import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Context = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log("auth from context --> ", auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Context.Provider value={{ setUser, user }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
