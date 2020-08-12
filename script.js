const ball = document.querySelector('.circle');
const txt = document.querySelector('p');

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
});

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}