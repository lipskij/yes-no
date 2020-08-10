const ball = document.querySelector('.circle');
const txt = document.querySelector('p');

ball.addEventListener('click', () => {
  getRndInteger();
  ball.appendChild(txt);
  if (getRndInteger() === 0) {
    txt.innerHTML = 'NO';
  } else {
    txt.innerHTML = 'YES';
  }
});

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}