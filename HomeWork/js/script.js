//---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
//  return true;
// } else {
//  return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }
// console.log(checkAge(19));
// console.log(checkAge(17));

// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?') ? true : false;
// }
// console.log(checkAge(19));
// console.log(checkAge(17));

//---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(3, 5));
// console.log(min(8, 5));
// console.log(min(5, 5));

//---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   },
// );

// ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };
// ask(
//   'Ви згодні?',
//   () => alert('Ви погодились.'),
//   () => alert('Ви скасували виконання.'),
// );
