const wrapper = document.getElementById("wrapper");
let shape = document.getElementsByClassName("shape");
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueShapes = (min, max, prev) => {
  let next = prev;
  while (next === prev) {
    next = rand(min, max);
  }
  return next;
};

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 1 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 2, roundness: 4 },
  { configuration: 3, roundness: 3 },
  { configuration: 3, roundness: 4 },
];

let prev = 0;

const changeShapes = () => {
  wrapper.style.opacity = 1;
  const index = uniqueShapes(0, combinations.length - 1, prev);
  combo = combinations[index];
  wrapper.dataset.configuration = combo.configuration;
  wrapper.dataset.roundness = combo.roundness;
  prev = index;
};
let interval = setInterval(() => {
  changeShapes();
}, 3000);

for (let i = 0; i < shape.length; i++) {
  shape[i].onmouseover = () => {
    clearInterval(interval);
  };

  shape[i].onmouseout = () => {
    interval = setInterval(() => {
      changeShapes();
    }, 3000);
  };
}
