// let i = 0;
// let j = 0;
// const lines = 7;
// let space = "";
// let star = "";
//
// while (i < lines) {
//   space = "";
//   star = "";
//   for (j = 0; j < lines - i; j++) space += " ";
//   for (j = 0; j < 2 * i + 1; j++) star += "*";
//   console.log(space + star);
//   i++;
// }

let quantityStar = 10;
for (let i = quantityStar / 2; i >= 1; --i) {
  let linePaint = '';
  for (let j = quantityStar / 2; j > i; --j) {
    linePaint += " ";
  }
  for (let k = 1; k < i * 2; ++k) {
    linePaint += "*";
  }
  console.log(linePaint);
}
