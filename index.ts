import { row, pyramid, side, pausa, sideFront, sideBottom, sideRight, sideLeft, pyramidTop, pyramidBottom } from "./styles.css";

document.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).classList.contains(side)) {
    (e.target as HTMLElement).closest("." + pyramid)?.classList.toggle(pausa);
  }
});

const pyramidsHTML = Array.from({ length: 50 }, (_, i) => {
  const odd = 2 * i - 1;
  const integer = i;
  return `
    <div style="--x-odd: ${odd}" class="${pyramid} ${pyramidTop}">
      <div class="${side} ${sideFront}"></div>
      <div class="${side} ${sideRight}"></div>
      <div class="${side} ${sideLeft}"></div>
      <div class="${side} ${sideBottom}"></div>
    </div>
    <div style="--x-even: ${integer}" class="${pyramid} ${pyramidBottom}">
      <div class="${side} ${sideFront}"></div>
      <div class="${side} ${sideRight}"></div>
      <div class="${side} ${sideLeft}"></div>
      <div class="${side} ${sideBottom}"></div>
    </div>
  `;
}).join("");

document.querySelectorAll("." + row).forEach((r) => {
  r.innerHTML = pyramidsHTML;
});
