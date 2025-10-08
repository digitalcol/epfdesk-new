"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./Upskills.module.css";

const Upskills = ({ title, paragraphs }) => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/illus-1.json", // keep the same Lottie file
    });
    return () => anim.destroy();
  }, []);

  return (
    <div className={styles["s-content-1"]} data-plr-component="s-content-1">
      <div className={styles["u-container"]}>
        <div className={styles["s__inner"]}>
          <div
            className={styles["s__content"]}
            data-lg-parallax=""
            data-lg-parallax-amplitude="0.2"
            style={{ transform: "translate3d(0px, 62.2px, 0px)" }}
          >
            <h2 className={`${styles["s__title"]} ${styles["t-h-3xs"]}`}>
              {title}
            </h2>

            <div className={`${styles["s__text"]} ${styles["rte"]}`}>
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <a
              className={`${styles["btn-plain"]} ${styles["s__cta"]}`}
              onClick={() => {
                const phone = "919980511980";
                const text = encodeURIComponent(
                  "Hello EPFDesk,\n\n" +
                    "I’d like to know more about your compliance services.\n\n" +
                    "Company/Organisation Name:\n" +
                    "No. of Employees:\n" +
                    "My Role:\n" +
                    "Areas of Interest:"
                );
                window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
              }}
              data-plr-component="btn-plain"
            >
              <span className={styles["btn-plain__inner"]}>
                <span className={styles["btn-plain__text"]}>Contact Us</span>
                <span className={styles["btn-plain__arrow"]}></span>
              </span>

              <svg
                width="10"
                height="10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles["btn-plain__background"]} ${styles["js-background"]}`}
                overflow="visible"
                preserveAspectRatio="none"
                style={{ width: "181px", height: "45px" }}
              >
                <path
                  d="M22.5,0 L158.5,0 C188.0875,0 188.0875,45 158.5,45 L22.5,45 C-7.0875,45 -7.0875,0 22.5,0"
                  className={`${styles["btn-plain__path"]} ${styles["js-background-path"]}`}
                ></path>
                <path
                  d="M22.5,0 L158.5,0 C188.0875,0 188.0875,45 158.5,45 L22.5,45 C-7.0875,45 -7.0875,0 22.5,0"
                  className={`${styles["btn-plain__path"]} ${styles["js-background-path"]}`}
                ></path>
              </svg>
            </a>
          </div>

          <div className={styles["s__illus"]}>
            <div
              ref={container}
              className={`${styles["s__illus__lottie"]} ${styles["lg-lottie"]} ${styles["is-loaded"]} ${styles["is-playing"]} ${styles["is-playing-forward"]}`}
              data-lg-lottie-autoplay=""
              data-lg-lottie-loop=""
            ></div>
          </div>
        </div>
      </div>

      <div className={styles["s__background"]}></div>
    </div>
  );
};

export default Upskills;
