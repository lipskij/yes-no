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
    renderItem(txt.innerHTML);
    addToLocalStorage(txt.innerHTML);
  } else {
    txt.innerHTML = 'YES';
    renderItem(txt.innerHTML);
    addToLocalStorage(txt.innerHTML);
  }
});

function getRndInteger() {
  return Math.floor(Math.random() * 2);
}

// add to local storage
function addToLocalStorage(answer) {
  let answers = loadFromStorage();
  answers.push(answer);
  localStorage.setItem("answers", JSON.stringify(answers));
}
 // get from local storage
function getAnswers() {
  let answers = loadFromStorage();
  answers.forEach((answerItem) => {
    renderItem(answerItem);
  });
}
// clear local storage
function clearLocalStorage() {
  localStorage.clear();
}

// load from storage
function loadFromStorage() {
  let answers;
  if (localStorage.getItem("answers") === null) {
    answers = [];
  } else {
    answers = JSON.parse(localStorage.getItem("answers"));
  }
  return answers;
}

// render prev answers
function renderItem(answerItem) {
  const previous = document.createElement('p');

  previous.innerHTML = `Previous answer: ${answerItem}`;

  prevAns.appendChild(previous);
}
