const container = document.getElementById("container");
const rects = document.getElementsByClassName("rect");
const text = document.getElementById("text");

for (var i = 0; i < rects.length; i++) {
  ((i) => {
    rects[i].addEventListener("mouseover", () => {
      const style = getComputedStyle(rects[i]);
      let color = style.backgroundColor;
      text.style.color = color;
    });
    rects[i].addEventListener("mouseout", () => {
      text.style.color = "black";
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

  container.style.transform = `translate(-${panX}px, -${panY}px)`;
};
