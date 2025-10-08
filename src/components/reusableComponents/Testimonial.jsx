"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Testimonial.module.css";

export default function Testimonials({testimonials}) {
  const sliderRef = useRef(null);
  const firstCardRef = useRef(null);
  const leftConnectorRef = useRef(null);

  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const minOffset = useRef(0);

  const [offsetState, setOffsetState] = useState(0);
  const [isDraggingState, setIsDraggingState] = useState(false);

  const startX = useRef(0);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const momentumId = useRef(null);

  const LINE_HEIGHT = 3;
  const DOT_SIZE = 14;



  // ---- helpers ----
  function setSliderXImmediate(x) {
    if (x > 0) x = 0; // left bound
    if (x < minOffset.current) x = minOffset.current; // right bound

    offsetRef.current = x;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
    }
    updateLeftConnector();
  }

//   function updateLeftConnector() {
//   const leftEl = leftConnectorRef.current;
//   const first = firstCardRef.current;
//   const container = sliderRef.current?.parentElement;
//   if (!leftEl || !first || !container) return;

//   const containerRect = container.getBoundingClientRect();
//   const firstRect = first.getBoundingClientRect();

//   // line y: middle of the first card
//   const centerY = firstRect.top + firstRect.height / 2;

//   // left offset relative to container
//   const leftWidth = Math.max(0, firstRect.left - containerRect.left);

//   leftEl.style.position = "absolute";
//   leftEl.style.left = "0px";
//   leftEl.style.top = `${centerY - containerRect.top}px`; // align with card center
//   leftEl.style.height = `${LINE_HEIGHT}px`;
//   leftEl.style.width = `${leftWidth}px`;
//   leftEl.style.background = "#000";
//   leftEl.style.zIndex = "1";
//   leftEl.style.transform = "translateY(-50%)";

//   const leftDot = leftEl.querySelector(".left-dot");
//   if (leftDot) {
//     leftDot.style.position = "absolute";
//     leftDot.style.top = "50%";
//     leftDot.style.transform = "translateY(-50%)";
//     leftDot.style.right = `-${DOT_SIZE / 2}px`;
//     leftDot.style.width = `${DOT_SIZE}px`;
//     leftDot.style.height = `${DOT_SIZE}px`;
//     leftDot.style.border = `${LINE_HEIGHT}px solid #000`;
//     leftDot.style.borderRadius = "50%";
//     leftDot.style.background = "#fff";
//   }
// }

// function updateLeftConnector() {
//   const leftEl = leftConnectorRef.current;
//   const first = firstCardRef.current;
//   if (!leftEl || !first) return;

//   const firstRect = first.getBoundingClientRect();

//   // y = middle of the first card (relative to viewport)
//   const centerY = firstRect.top + firstRect.height / 2;

//   // width = distance from viewport left (0) to first card left
//   const leftWidth = Math.max(0, firstRect.left);

//   leftEl.style.position = "absolute";
//   leftEl.style.left = "0px";
//   leftEl.style.top = `${centerY}px`;//${centerY}px
//   leftEl.style.height = `${LINE_HEIGHT}px`;
//   leftEl.style.width = `${leftWidth}px`;
//   leftEl.style.background = "#000";
//   leftEl.style.zIndex = "2";
//   leftEl.style.transform = "translateY(-50%)";
//   leftEl.style.display = leftWidth > 0 ? "block" : "none";

//   const leftDot = leftEl.querySelector(".left-dot");
//   if (leftDot) {
//     leftDot.style.position = "absolute";
//     leftDot.style.top = "50%";
//     leftDot.style.transform = "translateY(-50%)";
//     leftDot.style.right = `-${DOT_SIZE / 2}px`;
//     leftDot.style.width = `${DOT_SIZE}px`;
//     leftDot.style.height = `${DOT_SIZE}px`;
//     leftDot.style.border = `${LINE_HEIGHT}px solid #000`;
//     leftDot.style.borderRadius = "50%";
//     leftDot.style.background = "#fff";
//   }
// }

function updateLeftConnector() {
  const leftEl = leftConnectorRef.current;
  const first = firstCardRef.current;
  const container = sliderRef.current?.parentElement; // outer wrapper
  if (!leftEl || !first || !container) return;

  const firstRect = first.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // center of first card relative to container, not viewport
  const centerY =
    firstRect.top + firstRect.height / 2 - containerRect.top;

  // distance from container left to first card left
  const leftWidth = Math.max(0, firstRect.left - containerRect.left);

  leftEl.style.position = "absolute";
  leftEl.style.left = "0px";
  leftEl.style.top = `${centerY}px`;            // ✅ relative to container
  leftEl.style.height = `${LINE_HEIGHT}px`;
  leftEl.style.width = `${leftWidth}px`;
  leftEl.style.background = "#000";
  leftEl.style.zIndex = "2";
  leftEl.style.transform = "translateY(-50%)";
  leftEl.style.display = leftWidth > 0 ? "block" : "none";

  const leftDot = leftEl.querySelector(".left-dot");
  if (leftDot) {
    leftDot.style.position = "absolute";
    leftDot.style.top = "50%";
    leftDot.style.transform = "translateY(-50%)";
    leftDot.style.right = `-${DOT_SIZE / 2}px`;
    leftDot.style.width = `${DOT_SIZE}px`;
    leftDot.style.height = `${DOT_SIZE}px`;
    leftDot.style.border = `${LINE_HEIGHT}px solid #000`;
    leftDot.style.borderRadius = "50%";
    leftDot.style.background = "#fff";
  }
}

useEffect(()=>{
  window.addEventListener("resize", updateLeftConnector);
})

  // ---- momentum ----
  function animateMomentum() {
    if (Math.abs(velocity.current) < 0.5) {
      velocity.current = 0;
      setOffsetState(offsetRef.current);
      return;
    }

    let next = offsetRef.current + velocity.current;

    if (next > 0) {
      next = 0;
      velocity.current = 0;
    } else if (next < minOffset.current) {
      next = minOffset.current;
      velocity.current = 0;
    }

    setSliderXImmediate(next);
    velocity.current *= 0.92;
    momentumId.current = requestAnimationFrame(animateMomentum);
  }

  function stopMomentum() {
    if (momentumId.current) {
      cancelAnimationFrame(momentumId.current);
      momentumId.current = null;
    }
    velocity.current = 0;
  }

  // ---- bounds calc ----
  useEffect(() => {
    function calcBounds() {
      if (!sliderRef.current) return;
      const container = sliderRef.current.parentElement;
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = container.offsetWidth;
      minOffset.current = Math.min(0, containerWidth - sliderWidth);

      if (offsetRef.current < minOffset.current) {
        setSliderXImmediate(minOffset.current);
      }
    }
    calcBounds();
    window.addEventListener("resize", calcBounds);
    return () => window.removeEventListener("resize", calcBounds);
  }, []);

  // ---- global listeners ----
  useEffect(() => {
    function onMove(e) {
      if (!isDraggingRef.current) return;
      const clientX = e.type.startsWith("mouse") ? e.clientX : e.touches[0].clientX;
      const x = clientX - startX.current;
      setSliderXImmediate(x);
      velocity.current = clientX - lastX.current;
      lastX.current = clientX;
    }

    function onEnd() {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDraggingState(false);
      momentumId.current = requestAnimationFrame(animateMomentum);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

  // ---- start handlers ----
  function handleMouseDown(e) {
    stopMomentum();
    isDraggingRef.current = true;
    setIsDraggingState(true);
    startX.current = e.clientX - offsetRef.current;
    lastX.current = e.clientX;
  }

  function handleTouchStart(e) {
    stopMomentum();
    isDraggingRef.current = true;
    setIsDraggingState(true);
    startX.current = e.touches[0].clientX - offsetRef.current;
    lastX.current = e.touches[0].clientX;
  }

  // ---- init ----
  useEffect(() => {
    setTimeout(() => {
      setSliderXImmediate(offsetRef.current);
    }, 0);
    return () => stopMomentum();
  }, []);

  return (
    // <div className={""} style={{ position: "relative", overflow: "visible" }}>
    //   {/* Left connector only */}
    //   <div ref={leftConnectorRef} aria-hidden="true" style={{ position: "absolute" }}>
    //     <div className="left-dot" />
    //   </div>

    //   <div className={`${styles["b-testimonials"]} ${styles["b-testimonials--multiple"]}`}>
    //     <div
    //       ref={sliderRef}
    //       className={styles["b__testimonials-slider"]}
    //       style={{
    //         transform: `translate3d(${offsetState}px, 0, 0)`,
    //         cursor: isDraggingState ? "grabbing" : "grab",
    //         transition: "none",
    //       }}
    //       onMouseDown={handleMouseDown}
    //       onTouchStart={handleTouchStart}
    //     >
    //       {testimonials.map((t, i) => (
    //         <div
    //           key={i}
    //           className={styles["sb-testimonial"]}
    //           ref={i === 0 ? firstCardRef : null}
    //         >
    //           <blockquote className={styles["sb__quote"]}>
    //             <div className={`${styles["sb__quote__inner"]} ${styles["t-t-xl"]}`}>
    //               <p className={styles["sb__quote__text"]}>{t.text}</p>
    //             </div>
    //             <cite className={`${styles["sb__quote__author"]} ${styles["t-t-sm"]}`}>
    //               <span className={styles["sb__quote__author__photo"]}>
    //                 <img src={t.img} width="200" height="200" alt="" />
    //               </span>
    //               <span className={styles["sb__quote__author__content"]}>
    //                 <span className={styles["sb__quote__author__main"]}>{t.author}</span>
    //                 <span className={styles["sb__quote__author__secondary"]}>{t.role}</span>
    //               </span>
    //             </cite>
    //           </blockquote>

    //           {/* Add line only if NOT last card */}
    //           {i < testimonials.length - 1 && (
    //             <div className={`${styles["sb__line"]} ${styles["sb__line--after"]}`} />
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div
    className="relative my-12 w-full overflow-hidden"
    style={{ position: "relative" }}
  >
    {/* Left connector line and dot */}
    <div ref={leftConnectorRef} aria-hidden="true" className="absolute">
      <div className="left-dot" />
    </div>

    <div className={`${styles["b-testimonials"]} ${styles["b-testimonials--multiple"]}`}>
      <div
        ref={sliderRef}
        className={styles["b__testimonials-slider"]}
        style={{
          transform: `translate3d(${offsetState}px, 0, 0)`,
          cursor: isDraggingState ? "grabbing" : "grab",
          transition: "none",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={styles["sb-testimonial"]}
            ref={i === 0 ? firstCardRef : null}
          >
            <blockquote className={styles["sb__quote"]}>
              <div className={`${styles["sb__quote__inner"]} ${styles["t-t-xl"]}`}>
                <p className={styles["sb__quote__text"]}>{t.text}</p>
              </div>
              <cite className={`${styles["sb__quote__author"]} ${styles["t-t-sm"]}`}>
                <span className={styles["sb__quote__author__photo"]}>
                  <img src={t.img} width="200" height="200" alt="" />
                </span>
                <span className={styles["sb__quote__author__content"]}>
                  <span className={styles["sb__quote__author__main"]}>{t.author}</span>
                  <span className={styles["sb__quote__author__secondary"]}>{t.role}</span>
                </span>
              </cite>
            </blockquote>

            {/* Connecting line between cards */}
            {i < testimonials.length - 1 && (
              <div className={`${styles["sb__line"]} ${styles["sb__line--after"]}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
