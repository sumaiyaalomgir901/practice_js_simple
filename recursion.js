// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//   sum = sum + i;
// }
// console.log(sum);

///////////////////////////////////
// let sum = 0;
// for (let i = 7; i >= 1; i--) {
//   sum = sum + i;
// }
// console.log(sum);
//function
function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}
console.log(sum(7));
