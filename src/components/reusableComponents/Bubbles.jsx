"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Bubbles.module.css";

const NUM_BUBBLES = 9;

export default function Bubbles() {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const rafRef = useRef(null);
  const roRef = useRef(null);

  // small inner wiggle offsets only
  const [offsets, setOffsets] = useState([]);

  useEffect(() => {
    setOffsets(
      Array.from({ length: NUM_BUBBLES }, () => ({
        ox: 0,
        oy: 0,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    );
  }, []);

  // 🔑 animate only a small inner offset
  useEffect(() => {
    let raf;
    const tick = () => {
      setOffsets((prev) =>
        prev.map((p) => {
          let { ox, oy, vx, vy } = p;
          let nx = ox + vx;
          let ny = oy + vy;
          if (nx > 6 || nx < -6) vx *= -1;
          if (ny > 6 || ny < -6) vy *= -1;
          return { ox: nx, oy: ny, vx, vy };
        })
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // --- dynamic thread ---
  useEffect(() => {
    if (!svgRef.current || !pathRef.current) return;
    let running = true;

    const updatePath = () => {
      if (!running) return;
      const svgEl = svgRef.current;
      const pathEl = pathRef.current;
      const svgRect = svgEl.getBoundingClientRect();
      const svgLeft = svgRect.left;
      const svgW = svgRect.width;
      const svgH = svgRect.height;
      const centerY = svgH / 2;

      svgEl.setAttribute("viewBox", `0 0 ${svgW} ${svgH}`);

      const all = bubblesRef.current.filter(Boolean);
      if (all.length < 2) return;

      // find left-most and right-most bubble centers
      let left = all[0];
      let right = all[0];
      all.forEach((b) => {
        const br = b.getBoundingClientRect();
        if (br.left < left.getBoundingClientRect().left) left = b;
        if (br.right > right.getBoundingClientRect().right) right = b;
      });

      const Lrect = left.getBoundingClientRect();
      const Rrect = right.getBoundingClientRect();
      const Lx = Lrect.left + Lrect.width / 2 - svgLeft;
      const Rx = Rrect.left + Rrect.width / 2 - svgLeft;

      const r = Math.max(3, Math.min(8, svgH * 0.9));

      const d = [
        // left line up to the first circle
        `M 0 ${centerY}`,
        `L ${Lx - r} ${centerY}`,

        // left circle
        `M ${Lx - r} ${centerY}`,
        `a ${r} ${r} 0 1 0 ${2 * r} 0`,
        `a ${r} ${r} 0 1 0 ${-2 * r} 0`,

        // **NO horizontal line between the two circles**

        // right circle
        `M ${Rx - r} ${centerY}`,
        `a ${r} ${r} 0 1 0 ${2 * r} 0`,
        `a ${r} ${r} 0 1 0 ${-2 * r} 0`,

        // line from the right circle to the end
        `M ${Rx + r} ${centerY}`,
        `L ${svgW} ${centerY}`,
      ].join(" ");

      pathEl.setAttribute("d", d);
    };

    const loop = () => {
      updatePath();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    roRef.current = new ResizeObserver(updatePath);
    roRef.current.observe(document.documentElement);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (roRef.current) roRef.current.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles["s-interlude"] + " " + styles["s-interlude--bubbles"]}
      data-plr-component="s-interlude"
    >
      <div
        className={styles["b-interlude-bubbles"]}
        data-plr-component="b-interlude-bubbles"
        data-lg-mouse=""
      >
        <div className={styles["b__inner"]}>
          <div
            className={styles["a-waves"] + " " + styles["a-waves--white"]}
            data-plr-component="a-waves"
          ></div>

          <div className={styles["b__bubbles"] + " js-bubbles"}>
            {offsets.map((p, i) => (
              <div
                key={i}
                ref={(el) => (bubblesRef.current[i] = el)}
                className={styles["b__bubble"] + " js-bubble"}
              >
                {/* 🔑 apply only a tiny inner transform so grid stays intact */}
                <div
                  className={styles["b__circle"]}
                  style={{
                    transform: `translate3d(${p.ox}px, ${p.oy}px, 0)`,
                  }}
                />
              </div>
            ))}
          </div>

          <svg
            ref={svgRef}
            className={styles["b__render"] + " js-render"}
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            preserveAspectRatio="none"
          >
            <path ref={pathRef} className="js-render-path" />
          </svg>

          <div className={styles["b__ruler"] + " js-ruler"}></div>
        </div>
      </div>
    </div>
  );
}
