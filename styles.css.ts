import { style, globalStyle } from "@vanilla-extract/css";

// Reset and global styles
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "start",
  backgroundColor: "#000",
  overflow: "hidden",
});

export const row = style({
  position: "relative",
  width: "100%",
  height: "150px",
  overflow: "hidden",
});

export const pyramid = style({
  vars: {
    w: "150px",
    wNegative: "calc(var(--w) * -1)",
    wHalf: "calc(var(--w) / 2)",
    wHalfNegative: "calc(var(--w) / 2 * -1)",
    rotateX: "25deg",
    rotateY: "-90deg",
    rotateXNegative: "calc(var(--rotate-x) * -1)",
  },
  width: "var(--w)",
  height: "var(--w)",
  position: "absolute",
  transformStyle: "preserve-3d",
  perspective: "10000px",
});

export const pausa = style({
  animationPlayState: "paused",
});

export const side = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  transformOrigin: "50% 100%",
});

export const sideFront = style({
  transform: "scale(1.02, 1.04) rotateX(22deg)",
});

export const sideBottom = style({
  transform: "rotateX(88deg) scaleX(1.02)",
});

export const sideRight = style({
  transform:
    "translateZ(-75px) translateX(38px) rotateY(-63deg) rotateX(calc(var(--rotate-x) * -1)) scaleX(1.12)",
});

export const sideLeft = style({
  transform:
    "translateZ(-75px) translateX(-38px) rotateY(63deg) rotateX(calc(var(--rotate-x) * -1)) scaleX(1.12)",
});

export const pyramidTop = style({
  selectors: {
    [":nth-child(even) ." + sideFront]: {
      backgroundColor: "transparent",
    },
    [":nth-child(even) ." + sideBottom]: {
      backgroundColor: "oklch(71.2% 0.217 155.01)",
    },
    [":nth-child(even) ." + sideLeft]: {
      backgroundColor: "oklch(71.2% 0.2141 43.84)",
      animation: "changeColor 8s linear infinite alternate both",
    },
    [":nth-child(even) ." + sideRight]: {
      backgroundColor: "oklch(71.2% 0.2141 43.84)",
      animation: "changeColor 8s linear infinite alternate both",
    },
  },
  top: "3px",
  transform: "rotateX(-15deg)",
});

export const pyramidBottom = style({
  selectors: {
    [":nth-child(odd) ." + sideBottom]: {
      backgroundColor: "transparent",
    },
    [":nth-child(odd) ." + sideFront]: {
      backgroundColor: "oklch(71.2% 0.217 155.01)",
    },
    [":nth-child(odd) ." + sideLeft]: {
      backgroundColor: "oklch(51.2% 0.2782 259.84)",
    },
    [":nth-child(odd) ." + sideRight]: {
      backgroundColor: "oklch(51.2% 0.2782 259.84)",
    },
  },
  top: "-6px",
  transform: "rotateX(-15deg) rotate(180deg) scaleZ(-1)",
});

// Keyframe global
import { keyframes } from "@vanilla-extract/css";

const changeColor = keyframes({
  "0%": {
    filter: "hue-rotate(-359deg)",
  },
  "100%": {
    filter: "hue-rotate(359deg)",
  },
});

globalStyle(`.${pyramid} .${sideLeft}`, {
  animation: `${changeColor} 8s linear infinite alternate both`,
});

globalStyle(`.${pyramid} .${sideRight}`, {
  animation: `${changeColor} 8s linear infinite alternate both`,
});
