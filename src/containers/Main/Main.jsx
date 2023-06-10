import React from "react";
import { useEffect } from "react";

const Main = ({ children }) => {
  /** use Effect Hooks */
  useEffect(() => {
    document.body.className = "bg-light-grayish-cyan-background";
  }, []);

  /** Render */
  return (
    <main
      className={` relative `}
    >
      {children}
    </main>
  );
};

export default Main;
