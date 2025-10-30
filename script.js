const titleText = document.getElementById("titletext");
const funnycookie = document.getElementById("funny");
const arrowdown = document.getElementById("arrowdown");
const arrowup = document.getElementById("arrowup");
const start = document.getElementById("start");
const popSound = new Audio("audios/pop.mp3");
const bgm = new Audio("audios/bgm.mp3");
const openingdoor = new Audio("audios/openingdoor.mp3");
const container2 = document.querySelector(".container2");
const container1 = document.querySelector(".container1");
const container3 = document.querySelector(".container3");

const baseText = "Hello! I ";
const startWord = "hate";
const endWord = "love";
const afterText = " Web Development.";

let showingLove = false;

function animateText() {
  const wordToErase = showingLove ? endWord : startWord;
  const wordToType = showingLove ? startWord : endWord;
  showingLove = !showingLove;

  let index = wordToErase.length;

  const eraseInterval = setInterval(() => {
    if (index > 0) {
      index--;
      titleText.textContent = baseText + wordToErase.substring(0, index) + afterText;
    } else {
      clearInterval(eraseInterval);
      typeWord();
    }
  }, 150);

  function typeWord() {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < wordToType.length) {
        i++;
        titleText.textContent = baseText + wordToType.substring(0, i) + afterText;
      } else {
        clearInterval(typeInterval);
        setTimeout(animateText, 1500);
      }
    }, 150);
  }
}

funnycookie.addEventListener("click", (event) => {
    popSound.volume = 0.1
    popSound.play()
});

document.addEventListener("DOMContentLoaded", () => {
    arrowdown.addEventListener("click", () => {
        container1.classList.add("fade-out");
        container3.classList.remove("fade-out");
        container1.style.height = "0";
        container3.style.height = "100vh";
    });

    arrowup.addEventListener("click", () => {
        container3.classList.add("fade-out");
        container1.classList.remove("fade-out");
        container3.style.height = "0";
        container1.style.height = "100vh";
    });
});

window.addEventListener("load", () => {
  titleText.textContent = baseText + startWord + afterText;
  animateText();

  funnycookie.style.opacity = "0";

});

function startBGM() {

  container1.classList.add("fade-out");

  openingdoor.play();
  openingdoor.volume = 0.15;

  container2.style.backgroundColor = "black";
  start.style.opacity = "0";

  container1.style.backgroundColor = "black";

  setTimeout(() => {
    bgm.loop = true;
    bgm.volume = 0.15;

    bgm.play().catch(err => console.log("BGM play blocked:", err));

    container1.style.backgroundColor = "pink";
    container2.style.height = "0";
    container1.classList.remove("fade-out");
    funnycookie.style.opacity = "100%";
  }, "3000");

  start.removeEventListener("click", startBGM);
}

start.addEventListener("click", startBGM);