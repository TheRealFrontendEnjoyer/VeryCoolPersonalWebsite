const titleText = document.getElementById("titletext");
const funnycookie = document.getElementById("funny");
const arrowdown = document.getElementById("arrowdown");
const arrowup = document.getElementById("arrowup");
const start = document.getElementById("start");

const popSound = new Audio("audios/pop.mp3");
const bgm = new Audio("audios/bgm.mp3");
const openingdoor = new Audio("audios/openingdoor.mp3");
const clicksoundeffect = new Audio("audios/clicksoundeffect.mp3");

const container2 = document.querySelector(".container2");
const container1 = document.querySelector(".container1");
const container3 = document.querySelector(".container3");

const aboutmediv = document.querySelector(".aboutmediv");
const hobbydiv = document.querySelector(".hobbydiv");
const projectsdiv = document.querySelector(".projectsdiv");

const aboutme = document.getElementById("aboutme");
const hobby = document.getElementById("hobby");
const projects = document.getElementById("projects");

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

aboutme.addEventListener("click", (event) => {
    event.preventDefault();
    aboutmediv.style.height = "100%";
    aboutmediv.style.opacity = "100%";

    hobbydiv.style.height = "0";
    hobbydiv.style.opacity = "0";

    projectsdiv.style.height = "0";
    projectsdiv.style.opacity = "0";
});

hobby.addEventListener("click", (event) => {
    event.preventDefault();
    aboutmediv.style.height = "0";
    aboutmediv.style.opacity = "0";

    hobbydiv.style.height = "100%";
    hobbydiv.style.opacity = "100%";

    projectsdiv.style.height = "0";
    projectsdiv.style.opacity = "0";
});

projects.addEventListener("click", (event) => {
    event.preventDefault();
    aboutmediv.style.height = "0";
    aboutmediv.style.opacity = "0";

    hobbydiv.style.height = "0";
    hobbydiv.style.opacity = "0";

    projectsdiv.style.height = "100%";
    projectsdiv.style.opacity = "100%";
});

document.addEventListener("DOMContentLoaded", () => {
    arrowdown.addEventListener("click", () => {
        clicksoundeffect.volume = 0.2
        clicksoundeffect.play()

        container1.classList.add("fade-out");
        container3.classList.remove("fade-out");
        container1.style.height = "0";
        container3.style.height = "100vh";
    });

    arrowup.addEventListener("click", () => {
        clicksoundeffect.volume = 0.2
        clicksoundeffect.play()

        container3.classList.add("fade-out");
        container1.classList.remove("fade-out");
        container3.style.height = "0";
        container1.style.height = "100vh";

        aboutmediv.style.height = "0";
        aboutmediv.style.opacity = "0";

        hobbydiv.style.height = "0";
        hobbydiv.style.opacity = "0";

        projectsdiv.style.height = "0";
        projectsdiv.style.opacity = "0";
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
    bgm.volume = 0.05;

    bgm.play().catch(err => console.log("BGM play blocked:", err));

    container1.style.backgroundColor = "pink";
    container2.style.height = "0";
    container1.classList.remove("fade-out");
    funnycookie.style.opacity = "100%";
  }, "3000");

  start.removeEventListener("click", startBGM);
}

start.addEventListener("click", startBGM);

const cursorText = document.getElementById("cursorText");

const hoverTexts = {
  aboutme: "Discover more about me! :D",
  hobby: "What could my hobbies be? :O",
  projects: "Projects.. Do I even have those? :/",
  start: "Open the door?",
};

Object.entries(hoverTexts).forEach(([id, text]) => {
  const button = document.getElementById(id);

  button.addEventListener("mouseenter", () => {
    cursorText.textContent = text;
    cursorText.style.opacity = 1;
  });

  button.addEventListener("mouseleave", () => {
    cursorText.style.opacity = 0;
  });

  button.addEventListener("mousemove", (e) => {
    const offsetX = 60;
    const offsetY = -15;
    cursorText.style.left = e.clientX + offsetX + "px";
    cursorText.style.top = e.clientY + offsetY + "px";
  });
});