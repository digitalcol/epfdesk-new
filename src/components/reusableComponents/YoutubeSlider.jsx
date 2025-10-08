"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Youtubeslider.module.css";
import { motion } from "framer-motion";

const YoutubeSlider = () => {
  const eyeRefs = useRef([]);
 const containerRef = useRef(null); // viewport (non-draggable)
  const trackRef = useRef(null);     // draggable track
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  // Recalculate constraints whenever sizes change or images load
  useEffect(() => {
    const recalc = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const contentWidth = track.scrollWidth;
      const viewportWidth = container.clientWidth;
      const overflow = Math.max(0, contentWidth - viewportWidth);

      setConstraints({ left: -overflow, right: 0 });
    };

    recalc();

    const ro = new ResizeObserver(recalc);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

 
    const imgs = trackRef.current ? trackRef.current.querySelectorAll("img") : [];
    const listeners = [];
    imgs.forEach((img) => {
      if (img.complete) return;
      const fn = () => recalc();
      listeners.push([img, fn]);
      img.addEventListener("load", fn);
      img.addEventListener("error", fn);
    });

    window.addEventListener("resize", recalc);

    const t = setTimeout(recalc, 300);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", recalc);
      ro.disconnect();
      listeners.forEach(([el, fn]) => {
        el.removeEventListener("load", fn);
        el.removeEventListener("error", fn);
      });
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      eyeRefs.current.forEach((eye) => {
        if (!eye) return;

        const pupil = eye.querySelector(`.${styles["b__pupil"]}`);
        if (!pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(
          e.clientY - eyeCenterY,
          e.clientX - eyeCenterX
        );

        const maxMove = 12;
        const pupilX = Math.cos(angle) * maxMove;
        const pupilY = Math.sin(angle) * maxMove;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles["s-youtube"]} data-plr-component="s-youtube">
      <div className={styles["u-container"]}>
        <div
          className={`${styles["b-heading-eye-1"]} ${styles["lg-reveal"]} ${styles["is-in"]}`}
          data-plr-component="b-heading-eye-1"
          data-lg-reveal=""
        >
          <div className={styles["b__content"]}>
            <div className={styles["b__content__inner"]}>
              <h2
                className={`${styles["b__title"]} ${styles["b__title--lg"]} ${styles["js-heading"]}`}
              >
                Subscribe on YouTube{" "}
              </h2>

              <div className={styles["b__shapes"]}>
                <div className={styles["b__shape"]}></div>
                <div className={styles["b__shape"]}></div>
              </div>
            </div>
          </div>

          <div className={styles["b__head"]}>
            <div className={styles["b__head__background"]}></div>

            <div className={styles["b-head"]} data-plr-component="b-head">
              {/* Left Eye */}
              <div
                className={`${styles["b__eye"]} ${styles["js-eye"]} ${styles["is-set"]}`}
                ref={(el) => (eyeRefs.current[0] = el)}
              >
                <div className={`${styles["b__pupil"]} ${styles["js-pupill"]}`}>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--main"]}`}
                  ></div>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--secondary"]}`}
                  ></div>
                </div>
              </div>

              {/* Right Eye */}
              <div
                className={`${styles["b__eye"]} ${styles["js-eye"]} ${styles["is-set"]}`}
                ref={(el) => (eyeRefs.current[1] = el)}
              >
                <div className={`${styles["b__pupil"]} ${styles["js-pupill"]}`}>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--main"]}`}
                  ></div>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--secondary"]}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles["s__wrapper"]} ${styles["js-wrapper"]}`}>
          <p className={`${styles["s__text"]} ${styles["t-t-lg"]}`}>
            A 10-week coding bootcamp in Stockholm is an unbeatable learning
            experience. It is the fastest and most efficient way to become an
            autonomous coder, but no one size fits all.{" "}
          </p>

          <div
            ref={containerRef}
            className={styles["s__videos"]}
            style={{ overflow: "hidden" }} // ensure a viewport
          >
            <motion.div
              ref={trackRef}
              className={styles["s__videos-slider"]}
              style={{ display: "flex", gap: "24px", touchAction: "pan-y" }}
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.1}
              dragMomentum={true}
              whileTap={{ cursor: "grabbing" }}
            >
              {/* --- Video 1 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=ieyDsRhH7cM"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/ieyDsRhH7cM/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      This Is How You Succeed With Your First Projects
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 2 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=g4Mww6-H9cs"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/g4Mww6-H9cs/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      Technical Assessment Preparation | Nod Coding Bootcamp
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 3 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=f5GEBnaz_QE"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/f5GEBnaz_QE/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      How to pass the SQL Technical Interview
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 4 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=VXU8dRYO4hY"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/VXU8dRYO4hY/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      How to Nail the Data Analyst Case Interview
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 5 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=KP0xC04t3jE"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/KP0xC04t3jE/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      How to Land a job as a Data Analyst
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 6 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=DU57XlIrFV0"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/DU57XlIrFV0/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      4 Must Haves for Data Analyst
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 7 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=clcrgh9S8CY"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/clcrgh9S8CY/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      How Much do Data Analyst Make in Europe?
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 8 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=KDYXz2pO3p8"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/KDYXz2pO3p8/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      How To Write A SQL Query
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 9 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=_bPygtzsSAk"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/_bPygtzsSAk/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      Common Problem When Starting To Code
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* --- Video 10 --- */}
              <div className={`${styles["sb-video"]} ${styles["js-video"]}`}>
                <a
                  href="https://www.youtube.com/watch?v=MMSi57I8Xkg"
                  className={styles["sb__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className={styles["sb__figure"]}>
                    <div className={styles["sb__cover"]}>
                      <div className={styles["sb__cover__inner"]}>
                        <img
                          src="https://i.ytimg.com/vi/MMSi57I8Xkg/hqdefault.jpg"
                          alt=""
                          width="480"
                          height="360"
                          loading="lazy"
                        />
                        <span
                          className={`${styles["a-play"]} ${styles["a-play--sm"]} ${styles["a-play--blue"]}`}
                        ></span>
                      </div>
                      <div className={styles["sb__mask"]}></div>
                    </div>
                    <figcaption className={styles["sb__caption"]}>
                      Choose The Perfect Visualization
                    </figcaption>
                  </figure>
                </a>
              </div>
            </motion.div>
          </div>

          {/* <div className={styles["s__cta"]}>
            <a
              className={`${styles["btn-plain"]} ${styles["btn-plain--lg"]} ${styles["btn-plain--alternate"]}`}
              href="https://www.youtube.com/@nodcoding"
              target="_blank"
              data-plr-component="btn-plain"
            >
              <span className={styles["btn-plain__inner"]}>
                <span className={styles["btn-plain__text"]}>
                  Check our YouTube channel{" "}
                </span>
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
              >
                <path
                  d="M30,0 L297,0 C336.45,0 336.45,60 297,60 L30,60 C-9.45,60 -9.45,0 30,0"
                  className={`${styles["btn-plain__path"]} ${styles["js-background-path"]}`}
                ></path>
                <path
                  d="M30,0 L297,0 C336.45,0 336.45,60 297,60 L30,60 C-9.45,60 -9.45,0 30,0"
                  className={`${styles["btn-plain__path"]} ${styles["js-background-path"]}`}
                ></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default YoutubeSlider;
