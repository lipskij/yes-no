const ball = document.querySelector('.circle');
const txt = document.querySelector('p');
const prevAns = document.querySelector('.prev-ans');

// TODO: load previous ansers
// TODO: save/display no more than 3 ansers

ball.addEventListener('click', () => {
  const num = document.createElement('div');
  ball.appendChild(num);
  num.value = getRndInteger();
  ball.appendChild(txt);
  if (num.value === 0) {
    txt.innerHTML = 'NO';
  } else {
    txt.innerHTML = 'YES';
  }
  renderItem();
});

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}

// render prev answers
function renderItem() {
  if (txt.innerHTML === "") {
    prevAns.innerHTML = "";
  } else {
    prevAns.innerHTML += ` ${txt.innerHTML},`;
  }
}

