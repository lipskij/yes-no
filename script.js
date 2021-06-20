const textDiv = document.querySelector(".msg");
const ball = document.querySelector(".circle");
const txt = document.querySelector("p");
const prevAns = document.querySelector(".prev-ans");
const btn = document.querySelector(".btn");

let rot = 360;
ball.addEventListener("click", () => {
  ball.style = "transform: rotateX(" + rot + "deg)";
  rot += 360;

  const num = document.createElement("div");
  num.value = getRndInteger();
  ball.appendChild(txt);

  if (num.value === 0) {
    txt.innerHTML = "NO";
  } else {
    txt.innerHTML = "YES";
  }
  renderItem();
  limitAnswers();
  unlucky();
});

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}

// render prev answers
function renderItem() {
  return (prevAns.innerHTML += ` ${txt.innerHTML}.`);
}
// limit answers to only 3
function limitAnswers() {
  if (prevAns.innerHTML.length >= 32) {
    return (prevAns.innerHTML = `Previous answer: ${txt.innerHTML}.`);
  }
}
// additional text
let message = document.createElement("p");

function unlucky() {
  if (prevAns.innerHTML === "Previous answer: NO. NO. NO.") {
    message.innerHTML = "Well that is some bad luck :D";
    textDiv.appendChild(message);
  } else {
    message.innerHTML = "";
  }
}
