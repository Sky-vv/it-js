// Задание 1.

let a1 = true + false;
console.log(a1, typeof a1, '- Задание 1 - a1');
// a1 - true = 1, false = 0, 1+0=1 - преобразование к числу для true и false - получаем 1.

let a2 = 12 / '6';
console.log(a2, typeof a2, '- Задание 1 - a2');
// a2 - 12 / 6 = 2 - преобразование к числу для строки '6'- получаем 2.

let a3 = 'number' + 15 + 3;
console.log(a3, typeof a3, '- Задание 1 - a3');
// a3 - первый этап "number" + 15 ,  преобразование к строке для числа 15, вторый этап "number15" + 3 - получаем number153.

let a4 = 15 + 3 + 'number';
console.log(a4, typeof a4, '- Задание 1 - a4');
// a4 - первый этап 15+3, второй этап 18 + 'number' - получаем 18number.

let a5 = [1] > null;
console.log(a5, typeof a5, '- Задание 1 - a5');
// a5 - выполняет числовое сравнение - получаем true.

let a6 = 'foo' + +'bar';
console.log(a6, typeof a6, '- Задание 1 - a6');
// a6 - первый этап +'bar' строка не является допустимым числом, получается NaN, двторой этап 'foo' + NaN - получаем fooNaN.

let a7 = 'true' == true;
console.log(a7, typeof a7, '- Задание 1 - a7');
// a7 -  == вызывает преобразование в число, получаем Nan == 1 - получаем false.

let a8 = false == 'false';
console.log(a8, typeof a8, '- Задание 1 - a8');
// a8 - == вызывает преобразование в число, получем 0 == Nan - получаем false.

let a9 = null == '';
console.log(a9, typeof a9, '- Задание 1 - a9');
// a9 - == обычно вызывает преобразование в число, но со значением null получаем null или undefined - получаем false.

let a10 = !!'false' == !!'true';
console.log(a10, typeof a10, '- Задание 1 - a10');
// a10 - !! конвертирует строки 'true' и 'false' в логическое true, так как не пустые, второй  этап равенство двух логических значений - получаем true.

let a11 = ['x'] == 'x';
console.log(a11, typeof a11, '- Задание 1 - a11');
// a11 - массив  [x] преобразует в 'x', второй этап 'x' == 'x' - получаем true.

let a12 = [] + null + 1;
console.log(a12, typeof a12, '- Задание 1 - a12');
// a12 - + вызывает преобразование в число для пустого массива, '' + null + 1, далее получаем 'null' + 1 - получаем null1.

let a13 = 0 || ('0' && {});
console.log(a13, typeof a13, '- Задание 1 - a13');
// a13 - первый этап false || true, возвращается '0' && {}, второй этап true && true, получаем {} - получаем true.

let a14 = [1, 2, 3] == [1, 2, 3];
console.log(a14, typeof a14, '- Задание 1 - a14');
// a14 - два массива - это два разных уникальных объекта - соответственно не равны - false.

// Задание 2.
let i = 3;
while (i) {
  alert(i--);
}
// пока 1 не равно 0 отмаем 1 - получаем 3, 2, 1 - Итог: 1.

// Задание 3.
let c = 40;
while (c < 92) {
  console.log(c, '- Задание 3 - Вывод чисел от 40 - 91');
  c++;
}

// Задание 4.
let d = 11;
while (d < 341) {
  if (d % 4 == 0)
    console.log(d, '- Задание 4 - Вывод чисел от 11 - 340 кратные 4');
  d++;
}

// Задание 5.
for (let e = 100; e > -6; e--) {
  console.log(e, '- Задание 5 - Вывод чисел от -5 - 100');
}

// Задание 6.
let arr = [1, 6, 8, 14, 0, 4];
for (let f = 0; f < arr.length; f++) {
  if (arr[f] > 3 && arr[f] < 10)
    console.log(arr[f], '- Задание 6 - Вывод чисел 3<f<10');
}

// Задание 7.
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let g = ' ';
for (let h = 0; h < arr7.length; h++) {
  g += '-' + arr7[h];
}
console.log(g, '- Задание 7 - Вывод значений с "-');

//Задание №8
let arr8 = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
for (let j = 0; j < arr8.length; j++) {
  if (arr8[j] === 'saturday' || arr8[j] === 'sunday') {
    console.log(
      '%c%s',
      'font-weight: bold;',
      arr8[j],
      '- Задание 8 - Выходные дни жирным текстом.'
    );
  } else {
    console.log(arr8[j], '- Задание 8 - Будние дни обычным текстом.');
  }
}

//Задание №9
let arr9 = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];
let day = new Date();
let k = day.getDay();
for (let m = 0; m < arr9.length; m++) {
  if (m == k) {
    console.log('%c%s', 'font-style: italic;', arr9[m], '- Задание 9.');
  } else {
    console.log(arr9[m], '- Задание 9.');
  }
}

//Задание №10
for (let n1 = 1000, num = 1; ; n1 = n1 / 2, num++) {
  console.log(n1, num, '- Задание 10 - Итог 6 итераций');
  if (n1 < 50) break;
}
