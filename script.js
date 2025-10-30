const titleText = document.getElementById("titletext");
const funnycookie = document.getElementById("funny");
const start = document.getElementById("start");
const popSound = new Audio("/audios/pop.mp3");
const bgm = new Audio("/audios/bgm.mp3");
const container2 = document.querySelector(".container2");

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

window.addEventListener("load", () => {
  titleText.textContent = baseText + startWord + afterText;
  animateText();

});

function startBGM() {
  bgm.loop = true;
  bgm.volume = 0.15;
  bgm.play().catch(err => console.log("BGM play blocked:", err));
  container2.style.height = "0px";
  start.removeEventListener("click", startBGM);
}

start.addEventListener("click", startBGM);