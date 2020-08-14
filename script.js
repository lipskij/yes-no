const ball = document.querySelector('.circle');
const txt = document.querySelector('p');
const prevAns = document.querySelector('.prev-ans');

ball.addEventListener('click', () => {
  const num = document.createElement('div');
  ball.appendChild(num);
  num.value = getRndInteger();
  ball.appendChild(txt);
  if (num.value === 0) {
    txt.innerHTML = 'NO';
    ball.removeChild(num);
  } else {
    txt.innerHTML = 'YES';
    ball.removeChild(num);
  }
  renderItem();
  limitAnswers();
});

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}

// render prev answers
function renderItem() {
    prevAns.innerHTML += ` ${txt.innerHTML},`;
}
// limit answers to only 3
function limitAnswers() {
  let answers = prevAns.innerHTML;
  if (answers.length >= 32) {
    prevAns.innerHTML = "Previous answer:";
  }
}