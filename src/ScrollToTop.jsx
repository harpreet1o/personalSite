import React, { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    const scrollToTop = () => {
      const link = document.querySelector('a[href="#hero"]');
      link.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    };

    scrollToTop();

    return () => {
      document
        .querySelector('a[href="#hero"]')
        .removeEventListener("click", scrollToTop);
    };
  }, []);

  return null;
}

export default ScrollToTop;
