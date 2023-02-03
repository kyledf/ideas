const letters = "abcdefghijklmnopqrstuvwxyz ";
document.querySelector("h1").onmouseover = (event) => {
  const startWord = event.target.innerText;
  let count = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, i) => {
        if (i < count) {
          return startWord[i];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (count > startWord.length) clearInterval(interval);
    count += 1 / 10;
  }, 30);
};
