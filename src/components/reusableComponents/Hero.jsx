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
              {/* <div className="line">
                <div className="word text-8xl font-extrabold">{subTitle}</div>
              </div> */}
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

      {/* <div className="u-container">
        <ul className={styles["s__bootcamps"] + " js-bootcamps"}>
          {[
            {
              year: "2025 BC#4",
              topic: "Data Analytics",
              topicClass: "sb__topic--data",
              dates: "13 Oct - 19 Dec",
              city: "Stockholm",
            },
            {
              year: "2026 BC#1",
              topic: "Generative AI",
              topicClass: "sb__topic--genai",
              dates: "5 Jan - 13 Mar",
              city: "Stockholm",
            },
            {
              year: "2026 BC#1",
              topic: "Data Analytics",
              topicClass: "sb__topic--data",
              dates: "5 Jan - 13 Mar",
              city: "Stockholm",
            },
            {
              year: "2026 BC#2",
              topic: "Generative AI",
              topicClass: "sb__topic--genai",
              dates: "6 Apr - 12 Jun",
              city: "Stockholm",
            },
            {
              year: "2026 BC#2",
              topic: "Data Analytics",
              topicClass: "sb__topic--data",
              dates: "6 Apr - 12 Jun",
              city: "Stockholm",
            },
            {
              year: "2026 BC#3",
              topic: "Generative AI",
              topicClass: "sb__topic--genai",
              dates: "3 Aug - 9 Oct",
              city: "Stockholm",
            },
            {
              year: "2026 BC#3",
              topic: "Data Analytics",
              topicClass: "sb__topic--data",
              dates: "3 Aug - 9 Oct",
              city: "Stockholm",
            },
          ].map((item, i) => (
            <li
              key={i}
              className={
                styles["s__bootcamp"] + " sb-bootcamp js-bootcamp"
              }
            >
              <a href="#apply-now" data-bootcamp={i} className="sb__link">
                <span className="sb__title">
                  <span className="a-bullet-point a-bullet-point--outline a-bullet-point--green"></span>
                  {item.year}
                </span>

                <span className={`sb__topic ${item.topicClass}`}>
                  {item.topic}
                </span>

                <span className="sb__dates">{item.dates}</span>
                <span className="sb__city">{item.city}</span>

                <div
                  className="btn-plain sb__btn-apply"
                  data-plr-component="btn-plain"
                >
                  <span className="btn-plain__inner">
                    <span className="btn-plain__text">Apply</span>
                    <span className="btn-plain__arrow"></span>
                  </span>

                  <svg
                    width="10"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="btn-plain__background js-background"
                    overflow="visible"
                    preserveAspectRatio="none"
                    style={{ width: "126px", height: "51px" }}
                  >
                    <path
                      d="M25.5,0 L100.5,0 C134.0325,0 134.0325,51 100.5,51 L25.5,51 C-8.0325,51 -8.0325,0 25.5,0"
                      className="btn-plain__path js-background-path"
                    />
                    <path
                      d="M25.5,0 L100.5,0 C134.0325,0 134.0325,51 100.5,51 L25.5,51 C-8.0325,51 -8.0325,0 25.5,0"
                      className="btn-plain__path js-background-path"
                    />
                  </svg>
                </div>

                <img
                  loading="lazy"
                  src="https://nodcoding.com/wp-content/themes/nod/static/images/arrow-2-right.svg"
                  alt=""
                  className="sb__arrow"
                  width="9"
                  height="14"
                />

                <span className="sb__background"></span>
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Bootcamps;
