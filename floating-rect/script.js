const container = document.getElementById("container");
const cards = document.getElementsByClassName("innerContent");
const rects = document.getElementsByClassName("rect");
const text = document.getElementById("text");
text.style.backgroundColor = "white";
let bgColour;
let selectedIndex = 0;
for (var i = 0; i < rects.length; i++) {
  ((i) => {
    rects[i].addEventListener("mouseover", () => {
      const activeRect = getComputedStyle(rects[i]);
      bgColour = activeRect.backgroundColor;
      if (text.style.backgroundColor != bgColour) {
        text.style.color = bgColour;
      } else {
        text.style.color = "white";
      }
    });
    rects[i].addEventListener("mouseout", () => {
      if (text.style.backgroundColor == "white") {
        text.style.color = "black";
      } else {
        text.style.color = "white";
      }
    });
    rects[i].addEventListener("click", () => {
      if (text.style.backgroundColor != bgColour) {
        text.style.backgroundColor = bgColour;
        text.style.color = "white";
        selectedIndex = i;
        rects[i].classList.add("expanded");
      } else {
        text.style.backgroundColor = "white";
        text.style.color = "black";
        rects[i].classList.remove("expanded");
      }
    });
  })(i);
  
}
window.onmousemove = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const decimalX = mouseX / window.innerWidth;
  const decimalY = mouseY / window.innerHeight;

  const maxX = container.offsetWidth - window.innerWidth;
  const maxY = container.offsetHeight - window.innerHeight;

  const panX = decimalX * maxX;
  const panY = decimalY * maxY;

  container.animate([{ transform: `translate(-${panX}px, -${panY}px)` }], {
    duration: 800,
    fill: "forwards",
    easing: "ease",
  });
  cards[selectedIndex].animate([{ transform: `translate(${panX}px, ${panY}px)` }], {
    duration: 1000,
    fill: "forwards",
    easing: "ease",
  });
};
