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
let Obj6 = { js: 'test', jq: 'hello', css: 'world' };
let resultA1 = Obj6['js'];
console.log(resultA1, '- Задача 6 - массив из ключа объекта.');
let resultA2 = Obj6['jq'];
console.log(resultA2, '- Задача 6 - массив из ключа объекта.');
let resultA3 = Obj6['css'];
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
let sumJ = 0;
for (let l = 0; l < arrJ.length; l++) {
  for (let m = 0; m < arrJ[l].length; m++) {
    for (let n = 0; n < arrJ[l][m].length; n++) {
      sumJ += arrJ[l][m][n];
    }
  }
}
console.log(sumJ, '- Задача 9 - сумма массива');

// Задача 10
function CompareArray(firstArray, secondArray) {
  if (firstArray.join('') === secondArray.join('')) {
    return true;
  } else {
    return false;
  }
}
let arrA11 = [1, 2, 3, 4];
let arrA12 = [1, 2, 3, 4];
let arrA13 = [1, 2, 3, 5];
let arrA14 = [1, 2, 5, 6, 5];
console.log(CompareArray(arrA11, arrA12), '- Задача 10');
console.log(CompareArray(arrA11, arrA13), '- Задача 10');
console.log(CompareArray(arrA11, arrA14), '- Задача 10');

// Задача 11
let arrM = [2, 3, 4, 5, 6];
let result11 = arrM.map(function (element) {
  return element * element;
});
console.log(result11, '- Задача 11');

// Задача 12
let arrN = [1, -2, 3, -4, 5, -6];
function Func(element2) {
  return element2 < 0;
}
let result12 = arrN.filter(Func);
console.log(result12, '- Задача 12');

// Задача 13
let arrP = [6, 7, 8, 9, 10];
let result13 = arrP.reduce(function (sum, elem) {
  return sum + elem;
});
console.log(result13, '- Задача 13');
