"use client";
import { useEffect, useRef } from "react";
import styles from "./Questioning.module.css";
import lottie from "lottie-web";

// const Questioning = ({ uspData }) => {
//   const container = useRef(null);
//   const containerCode = useRef(null);
//   const containerLearning = useRef(null);
//   const pupilRef = useRef(null);

//   // Lottie animations
//   useEffect(() => {
//     const a = lottie.loadAnimation({
//       container: container.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       path: "/usp-tech-stack.json",
//     });
//     return () => a.destroy();
//   }, []);

//   useEffect(() => {
//     const a = lottie.loadAnimation({
//       container: containerCode.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       path: "/usp-project.json",
//     });
//     return () => a.destroy();
//   }, []);

//   useEffect(() => {
//     const a = lottie.loadAnimation({
//       container: containerLearning.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       path: "/usp-learning.json",
//     });
//     return () => a.destroy();
//   }, []);

//   // Eye tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { innerWidth, innerHeight } = window;
//       const progressX = e.clientX / innerWidth;
//       const progressY = e.clientY / innerHeight;
//       if (pupilRef.current) {
//         pupilRef.current.style.setProperty("--mouse-progress-x", progressX);
//         pupilRef.current.style.setProperty("--mouse-progress-y", progressY);
//         pupilRef.current.style.setProperty("--diff-x", progressX - 0.5);
//         pupilRef.current.style.setProperty("--diff-y", progressY - 0.5);
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       className={styles["s-usps"] + " " + styles["s-usps--layout-1"]}
//       data-plr-component="s-usps"
//     >
//       <div className={""}>
//         <div
//           className={styles["s__header"] + " " + styles["js-header"]}
//           data-lg-scroll=""
//           data-lg-scroll-start="1"
//           data-lg-scroll-end="0.2"
//         >
//           <div className={styles["s__header-content"]}>
//             <h2 className="text-5xl font-extrabold">{uspData.mainTitle}</h2>
//           </div>
//         </div>

//         <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ${uspData.cards.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`
// }>
//           {/* ---------- CARD 1 ---------- */}
//           <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
//             <div className={styles["sb__content"]}>
//               <h3
//                 className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
//               >
//                 <div
//                   className={styles["line"]}
//                   style={{
//                     display: "block",
//                     textAlign: "start",
//                     position: "relative",
//                     fontSize: "2rem",
//                   }}
//                 >
//                   <div className={styles["word"]}>{uspData.cards[0].title}</div>
//                 </div>
//               </h3>
//               <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
//                 {uspData.cards[0].description}
//               </p>
//             </div>
//             <div
//               ref={container}
//               className={
//                 styles["sb__illus"] + " " + styles["sb__illus--tech-stack"]
//               }
//             >
//               <div
//                 className={`${styles["sb__illus__lottie"]} ${styles["lg-lottie"]}`}
//               ></div>
//             </div>
//           </div>

//           {/* ---------- CARD 2 ---------- */}
//           <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
//             <div className={styles["sb__content"]}>
//               <h3
//                 className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
//               >
//                 <div
//                   className={styles["line"]}
//                   style={{
//                     display: "block",
//                     textAlign: "start",
//                     position: "relative",
//                     fontSize: "2rem",
//                   }}
//                 >
//                   <div className={styles["word"]}>{uspData.cards[1].title}</div>
//                 </div>
//               </h3>
//               <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
//                 {uspData.cards[1].description}
//               </p>
//             </div>
//             <div
//               ref={containerCode}
//               className={
//                 styles["sb__illus"] + " " + styles["sb__illus--project"]
//               }
//             >
//               <div
//                 className={`${styles["sb__illus__lottie"]} ${styles["lg-lottie"]}`}
//               ></div>
//             </div>
//           </div>

//           {/* ---------- CARD 3 ---------- */}
//           <div
//             className={
//               styles["s__usp"] +
//               " " +
//               styles["sb-usp"] +
//               (uspData.cards.length === 3 ? " " + styles[""] : "")
//             }
//           >
//             <div className={styles["sb__content"]}>
//               <h3
//                 className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
//               >
//                 <div
//                   className={styles["line"]}
//                   style={{
//                     display: "block",
//                     textAlign: "start",
//                     position: "relative",
//                     fontSize: "2rem",
//                   }}
//                 >
//                   <div className={styles["word"]}>{uspData.cards[2].title}</div>
//                 </div>
//               </h3>
//               <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
//                 {uspData.cards[2].description}
//               </p>
//             </div>
//             <div
//               ref={containerLearning}
//               className={
//                 styles["sb__illus"] + " " + styles["sb__illus--learning"]
//               }
//             >
//               <div
//                 className={`${styles["sb__illus__lottie"]} ${styles["lg-lottie"]}`}
//               ></div>
//             </div>
//           </div>

//           {/* ---------- CARD 4 ---------- */}
//           {uspData.cards.length === 4 &&  <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
//             <div className={styles["sb__content"]}>
//               <h3
//                 className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
//               >
//                 <div
//                   className={styles["line"]}
//                   style={{
//                     display: "block",
//                     textAlign: "start",
//                     position: "relative",
//                     fontSize: "2rem",
//                   }}
//                 >
//                   <div className={styles["word"]}>{uspData.cards[3]?.title}</div>
//                 </div>
//               </h3>
//               <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
//                 {uspData.cards[3]?.description}
//               </p>
//             </div>
//             <div
//               className={styles["sb__illus"] + " " + styles["sb__illus--hired"]}
//             >
//               <div
//                 className={styles["b-usp-hired"]}
//                 data-plr-component="b-usp-hired"
//               >
//                 <div
//                   className={`${styles["b__eye"]} ${styles["js-eye"]} ${styles["is-set"]}`}
//                   style={{
//                     "--path-open":
//                       "path('M 0 42.5 Q 95.5 -42.5 191 42.5 Q 95.5 127.5 0 42.5 Z')",
//                     "--path-close":
//                       "path('M 0 42.5 Q 95.5 42.5 191 42.5 Q 95.5 42.5 0 42.5 Z')",
//                   }}
//                 >
//                   <div ref={pupilRef} className={styles["b__pupil"]}></div>
//                 </div>
//               </div>
//             </div>
//           </div>}

//           {/* --------------------------- */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Questioning;

const Questioning = ({ uspData }) => {
  const container = useRef(null);
  const containerCode = useRef(null);
  const containerLearning = useRef(null);
  const pupilRef = useRef(null);

  // Lottie animations
  useEffect(() => {
    const a = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/usp-tech-stack.json",
    });
    return () => a.destroy();
  }, []);

  useEffect(() => {
    const a = lottie.loadAnimation({
      container: containerCode.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/usp-project.json",
    });
    return () => a.destroy();
  }, []);

  useEffect(() => {
    const a = lottie.loadAnimation({
      container: containerLearning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/usp-learning.json",
    });
    return () => a.destroy();
  }, []);

  // Eye tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const progressX = e.clientX / innerWidth;
      const progressY = e.clientY / innerHeight;
      if (pupilRef.current) {
        pupilRef.current.style.setProperty("--mouse-progress-x", progressX);
        pupilRef.current.style.setProperty("--mouse-progress-y", progressY);
        pupilRef.current.style.setProperty("--diff-x", progressX - 0.5);
        pupilRef.current.style.setProperty("--diff-y", progressY - 0.5);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={styles["s-usps"] + " " + styles["s-usps--layout-1"]}
      data-plr-component="s-usps"
    >
      <div>
        <div
          className={styles["s__header"] + " " + styles["js-header"]}
          data-lg-scroll=""
          data-lg-scroll-start="1"
          data-lg-scroll-end="0.2"
        >
          <div className={styles["s__header-content"]}>
            <h2 className="text-5xl font-extrabold">{uspData.mainTitle}</h2>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ${
            uspData.cards.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {/* CARD 1 */}
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    fontSize: "2rem",
                  }}
                >
                  <div className={styles["word"]}>{uspData.cards[0].title}</div>
                </div>
              </h3>
              <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
                {uspData.cards[0].description}
              </p>
            </div>
            <div
              ref={container}
              className={
                styles["sb__illus"] + " " + styles["sb__illus--tech-stack"]
              }
            >
              <div
                className={`${styles["sb__illus__lottie"]} ${styles["lg-lottie"]}`}
              ></div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    fontSize: "2rem",
                  }}
                >
                  <div className={styles["word"]}>{uspData.cards[1].title}</div>
                </div>
              </h3>
              <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
                {uspData.cards[1].description}
              </p>
            </div>
            <div
              ref={containerCode}
              className={
                styles["sb__illus"] + " " + styles["sb__illus--project"]
              }
            >
              <div
                className={`${styles["sb__illus__lottie"]} ${styles["lg-lottie"]}`}
              ></div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    fontSize: "2rem",
                  }}
                >
                  <div className={styles["word"]}>{uspData.cards[2].title}</div>
                </div>
              </h3>
              <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
                {uspData.cards[2].description}
              </p>
            </div>
            <div
              ref={containerLearning}
              className={
                styles["sb__illus"] + " " + styles["sb__illus--learning"]
              }
            >
              <div
                className={`${styles["sb__illus__lottie"]} ${styles["lg-lottie"]}`}
              ></div>
            </div>
          </div>

          {/* CARD 4 */}
          {uspData.cards.length === 4 && (
            <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
              <div className={styles["sb__content"]}>
                <h3
                  className={`${styles["sb__title"]} ${styles["t-h-4xs"]} ${styles["lg-reveal"]}`}
                >
                  <div
                    className={styles["line"]}
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                      fontSize: "2rem",
                    }}
                  >
                    <div className={styles["word"]}>
                      {uspData.cards[3]?.title}
                    </div>
                  </div>
                </h3>
                <p className={`${styles["sb__text"]} ${styles["lg-reveal"]}`}>
                  {uspData.cards[3]?.description}
                </p>
              </div>
              <div
                className={
                  styles["sb__illus"] + " " + styles["sb__illus--hired"]
                }
              >
                <div
                  className={styles["b-usp-hired"]}
                  data-plr-component="b-usp-hired"
                >
                  <div
                    className={`${styles["b__eye"]} ${styles["js-eye"]} ${styles["is-set"]}`}
                    style={{
                      "--path-open":
                        "path('M 0 42.5 Q 95.5 -42.5 191 42.5 Q 95.5 127.5 0 42.5 Z')",
                      "--path-close":
                        "path('M 0 42.5 Q 95.5 42.5 191 42.5 Q 95.5 42.5 0 42.5 Z')",
                    }}
                  >
                    <div ref={pupilRef} className={styles["b__pupil"]}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questioning;
