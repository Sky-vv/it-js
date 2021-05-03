// Задача 1
let arrA1 = ['a', 'b', 'c'];
let arrA2 = [1, 2, 3];
let A1A2 = arrA1.concat(arrA2);
console.log(A1A2, '- Задача 1 - объединение двух массивов.');

// Задача 2
let arrB = ['a', 'b', 'c'];
arrB.push(1);
arrB.push(2);
arrB.push(3);
console.log(arrB, '- Задача 2 - добавление в конец массива - 1, 2, 3.');

// Задача 3
let arrC = [1, 2, 3];
arrC.reverse();
console.log(arrC, '- Задача 3 - последовательность справо налево массива.');

// Задача 4
let arrD = [1, 2, 3, 4, 5];
let resultD = arrD.slice(0, 3);
console.log(resultD, '- Задача 4 - Из массива вырезали 4 и 5 элемент.');

// Задача 5
let arrE = [1, 2, 3, 4, 5];
let result5 = arrE.slice(-2);
console.log(result5, '- Задача 5 - Из массива вырезали 1, 2, 3 элемент.');

// Задача 6
let obj6 = { js: 'test', jq: 'hello', css: 'world' };
let resultA1 = obj6['js'];
console.log(resultA1, '- Задача 6 - массив из ключа объекта.');
let resultA2 = obj6['jq'];
console.log(resultA2, '- Задача 6 - массив из ключа объекта.');
let resultA3 = obj6['css'];
console.log(resultA3, '- Задача 6 - массив из ключа объекта.');
let resultA4 = [resultA1, resultA2, resultA3];
console.log(resultA4, '- Задача 6 - массив из ключей объекта.');

// Задача 7
let arrG = [1, 2, 3, 4, 5];
let result7 = arrG.reduceRight((e7, i7) => (e7.push(i7), e7), []);
console.log(result7, '- Задача 7');

// Задача 8
let arrH = [[1, 2, 3], [4, 5], [6]];
let sumH = 0;
for (let i = 0; i < arrH.length; i++) {
  for (let j = 0; j < arrH[i].length; j++) {
    sumH += arrH[i][j];
  }
}
console.log(sumH, '- Задача 8 - сумма массива');

// Задача 9
let arrJ = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let arrFlatReduce = (array) => {
  let m = array.join().split(',');
  let n = m.reduce((a, b) => +a + +b);
  console.log(n);
};
arrFlatReduce(arrJ);

// Задача 10
let arrL1 = [1, 3, 5];
let arrL2 = [1, 2, 3, 5];
let arrL3 = [1, 3, 5];
let arrCompare = (firstArr, secondArr) => {
  if (firstArr.join('') === secondArr.join('')) {
    console.log(true, '- Задача 10 - сумма массива');
  }
};
arrCompare(arrL1, arrL2);
arrCompare(arrL1, arrL3);

// Задача 11
let arrV1 = [2, 3, 4, 5];
let arrMap = (array) => {
  let p1 = array.map((e1) => e1 * e1);
  console.log(p1, '- Задача 11 - сумма массива');
};
arrMap(arrV1);

// Задача 12
let arrN = [1, -2, 3, -4, 5, -6];
let arrFilter = (array12) => {
  let result12 = array12.filter((e1) => e1 < 0);
  console.log(result12, '- Задача 12');
};
arrFilter(arrN);

// Задача 13 из задачи 9
let arrP = [6, 7, 8, 9, 10];
arrFlatReduce(arrP);
