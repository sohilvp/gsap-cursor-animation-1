import React, { useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";

const App = () => {
  let cursorEl = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    let cursorPoint = cursorEl.current;
    let mouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursorPoint, { left: clientX, top: clientY });
    };
    let mouseEnter = (e) => {
      gsap.to(cursorPoint, { scale: 5, duration: 0.2, ease: "power2.easeIn" });
    };
    let mouseLeave = (e) => {
      gsap.to(cursorPoint, { scale: 1, duration: 0.2, ease: "power2.easeIn" });
    };

    window.addEventListener("mousemove", mouseMove);
    let textEnter = document.querySelector("h1");
    textEnter.addEventListener("mouseenter", mouseEnter);
    textEnter.addEventListener("mouseleave", mouseLeave);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      textEnter.removeEventListener("mouseenter", mouseEnter);
      textEnter.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return (
    <div className="container">
      <div className="cursor" ref={cursorEl}></div>
      <div className="text">
        <h1 ref={textRef}>
          We are a strategic design consultancy for change-makers in business.
        </h1>
      </div>
    </div>
  );
};

export default App;
