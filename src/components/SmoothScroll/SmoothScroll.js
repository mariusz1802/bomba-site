import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import "../../index.module.scss";
const options = {
  damping: 0.07,
};

// const scrollbar = document.getElementById("scrollbar");

let scrollbar = document.getElementById('scrollbar')


const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(scrollbar, options);
  }, []);
  return () => {
    if (Scrollbar) Scrollbar.destroy(scrollbar);
  };
};

export default Scroll;
