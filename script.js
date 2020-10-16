const ball = document.querySelector('.circle');
const txt = document.querySelector('p');
const prevAns = document.querySelector('.prev-ans');

ball.addEventListener('click', () => {
  const num = document.createElement('div');
  num.value = getRndInteger();
  ball.appendChild(txt);

  if (num.value === 0) {
    txt.innerHTML = 'NO';
  } else {
    txt.innerHTML = 'YES';
  }
  renderItem();
  limitAnswers();
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
