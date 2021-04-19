// Задание 5
let buttonClick5 = () => {
  let input5 = document.getElementById('input-click5');
  alert(input5.value);
};

// Задание 6
let buttonChange6 = () => {
  let input6 = document.getElementById('input-change6');
  input6.value = 'Blue screen - error! =)';
};

// Задание 7
let btnChangeMonkey = () => {
  let changeMonkey = document.getElementById('box7__Monkey');
  changeMonkey.src = './img/2.jpg';
};

// Задание 14
let inputChangeCss = () => {
  document
    .querySelector('.inputChange14')
    .classList.toggle('inputChange14-active');
};

// Задание 15
let inputCssHide = () => {
  document.querySelector('.inputHide').classList.add('inputHide-active');
};
let inputCssShow = () => {
  document.querySelector('.inputHide').classList.remove('inputHide-active');
};

// Задание 16
let inputCssRounded = () => {
  document
    .querySelector('.inputRounded')
    .classList.toggle('inputRounded-active');
  document.querySelector('.inputRounded').value =
    'Ой, я поменял свой текст и css!';
};

// Задание 17
let inputBlockFun = () => {
  document.querySelector('.inputBlock').value =
    'О, теперь на меня больше не нажать!';
  document.querySelector('.inputBlock').disabled = true;
  document
    .querySelector('.inputUnBlock')
    .classList.toggle('inputUnBlock-active');
};

let inputUnBlockFun = () => {
  document.querySelector('.inputBlock').value = 'Нажми на меня!';
  document.querySelector('.inputBlock').disabled = false;
  document
    .querySelector('.inputUnBlock')
    .classList.toggle('inputUnBlock-active');
};
