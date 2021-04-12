// Задание 1
let ObjWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',
};

let todayIs = () => ObjWeek[new Date().getDay()];
console.log(todayIs(), '- Задание 1 - сегодняшний день на этой неделе.');

// Задание 2
let Obj2 = {
  1: 'One',
  2: 'Two',
  3: 'Three',
};
let arrObj2 = (m) => Object.entries(m);
console.log(arrObj2(Obj2), '- Задание 2.');

// Задание 3
let c1 = { 1: 'One' };
let c2 = [2];
let c3 = null;

let isPlainObject = (e) =>
  typeof e === 'object' && e !== null && !Array.isArray(e);
console.log(isPlainObject(c1), '- Задание 3.');
console.log(isPlainObject(c2), '- Задание 3.');
console.log(isPlainObject(c3), '- Задание 3.');

// Задание 4
let ObjThree = {
  Auto: 'Honda',
  length: '6m',
  drive: 'AWD',
  color: 'red',
};

let objResult = (obj, ...arguments) => {
  let newObject = { ...obj };
  arguments.forEach((argument) => {
    delete newObject[argument];
  });
  return newObject;
};
console.log(objResult(ObjThree, 'color', 'length'), '- Задание 4.');

// Задание 5

// Задание 6
let n = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
let m = {
  a: 6,
  e: 7,
  f: 1,
  d: 4,
};

let result6 = (objN, objM) => {
  let objNKey = Object.keys(objN);
  return objNKey.reduce((r = {}, key) => {
    if (objN[key] === objM[key]) {
      r = {
        ...r,
        [key]: objN[key],
      };
    }
    return r;
  }, {});
};
console.log(result6(n, m), '- Задание 6.');

// Задание 7 такое же задание в первом примере в этом домашнем задании.
let todayIs7 = () => ObjWeek[new Date().getDay()];
console.log(
  todayIs7(),
  '- Задание 7 - такое же задание в первом примере в этом домашнем задании.'
);
