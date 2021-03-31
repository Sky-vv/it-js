// Задание 1

let str = 'Привет';
console.log(str, typeof str, 'Задание-1 Пример 1');

let num = 123;
console.log(num, typeof num, 'Задание-1 Пример 2');

let flag = true;
console.log(flag, typeof flag, 'Задание-1 Пример 3');

let txt = 'true';
console.log(txt, typeof txt, 'Задание-1 Пример 4');

// Задание 2

let a1 = 5 + 3;
console.log(a1, 'Задание-2 Значение а1');

let a2 = 5 - 3;
console.log(a2, 'Задание-2 Значение а2');

let a3 = 5 * 3;
console.log(a3, 'Задание-2 Значение а3');

let a4 = 5 / 3;
console.log(a4, 'Задание-2 Значение а4');

// Задание 3

let a6 = 5 % 3;
console.log(a6, 'Задание-3 Значение а6');

let a7 = 3 % 5;
console.log(a7, 'Задание-3 Значение а7');

let a8 = 5 + '3';
console.log(a8, 'Задание-3 Значение а8');

let a9 = '5' - 3;
console.log(a9, 'Задание-3 Значение а9');

let a10 = 75 + 'кг';
console.log(a10, 'Задание-10 Значение а10');

// Задание 4

let height = 23;
let width = 10;
let s = height * width;
console.log(s, 'см2 площадь прямоугольника', 'Задание 4');

let s1 =  ` ${height * width} см2 `;
console.log(s1, 'см2 площадь прямоугольника - второй вариант выводы.', 'Задание 4');

// Задание 5

let heightC = 10;
let dC = 4;
let v = Math.round(Math.PI * Math.pow((dC / 2),2) * heightC);
console.log(v, 'Объем цилиндра', 'Задание 5');

// Задание 6

let n = 3;
let m = 4;
let k = Math.sqrt((Math.pow(n,2)) + (Math.pow(m,2)));
console.log(k, 'Гипотенуза k', 'Задание 6');

let k2 = Math.sqrt(n**2 + m**2);
console.log(k, 'Гипотенуза k - второй вариант вывода', 'Задание 6');

// Задание *1 

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
console.log(fib(11), 'двенадцатый элемент последовательности. Задание *1'); 

// Задание *2 

function ipoteka(price, percent, years) {
    let per = percent / 100 / 12;
    let monthN = years * 12;
    let r = price * ((per * Math.pow(1 + per, monthN)) / ( Math.pow(1 + per, monthN) - 1));
    return r.toFixed(2);
}
  
let price   = 2000000,
    percent = 10,
    years   = 5;
let amount = ipoteka(price, percent, years) * (years * 12);
let perepl = (ipoteka(price, percent, years) * (years * 12)) - price;

console.log("Общая сумма кредита: " + price + " руб");
console.log("Ставка: " + percent + " %");
console.log("Срок кредита: " + years + " лет");
console.log("Ежемесячный платеж: " + ipoteka( price, percent, years) + " руб");
console.log("Общая сумма выплат: " + amount.toFixed(2) + " руб");
console.log("Переплата по кредиту:" + perepl.toFixed(2) + " руб");