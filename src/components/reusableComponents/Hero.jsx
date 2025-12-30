"use client";
import React from "react";
import styles from "./Hero.module.css";

const Bootcamps = ({ title, description }) => {
  return (
    <div className={styles["s-bootcamps"]} data-plr-component="s-bootcamps">
      <div className={styles["s__top"] + " js-top"}>
        <div className={styles["u-container"]}>
          <div
            className="flex gap-4 lg:gap-[145px] items-center flex-col lg:flex-row"
            data-lg-reveal=""
          >
            <h2
              className={
                "z-[2]"
              }
              data-lg-reveal="letters"
              data-lg-reveal-manual=""
            >
              <div className="line">
                <div className="word text-4xl md:text-8xl font-extrabold">{title}</div>
              </div>
            </h2>

            <p
              className={`text-sm sm:text-lg font-semibold z-10`}
            >
              {description}
            </p>
          </div>
        </div>

        <div
          className={styles["b-hills"] + " s__illus is-init"}
          data-plr-component="b-hills"
          data-lg-scroll=""
          data-lg-scroll-start="1"
          data-lg-scroll-end="0.3"
        >
          <div className={styles["b__discs"]}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles["b__disc"]}></div>
            ))}
          </div>

          <svg
            width="1920"
            height="401"
            viewBox="0 0 1920 401"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className={styles["b__row"] + "js-row"}>
              <g>
                <path
                  className={styles["b__line"] + " js-line"}
                  d="M1267 336.696C1381.14 267.696 1500.28 228.696 1675.99 221.196C1858.21 217.696 1964.34 261.196 2098 335.696"
                  stroke="#383030"
                />
                <path
                  className={styles["b__line"] + " js-line"}
                  d="M1251.09 337.002C1121.27 252.002 782.023 127 424.09 333.502"
                  stroke="#383030"
                />
                <path
                  className={styles["b__line"] + " js-line"}
                  d="M-422.4 337.662C-308.263 268.662 -189.12 229.662 -13.4082 222.162C168.811 218.662 274.939 262.162 408.6 336.662"
                  stroke="#383030"
                />
              </g>

              <g>
                <circle
                  className={styles["b__dot"] + " js-dot"}
                  cx="1259.09"
                  cy="341"
                  r="9"
                  stroke="#383030"
                />
                <circle
                  className={styles["b__dot"] + " js-dot"}
                  cx="417.09"
                  cy="341"
                  r="9"
                  stroke="#383030"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
