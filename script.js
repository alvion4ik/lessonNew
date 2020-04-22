'use strict';

// if (2*4 == 8) {
//   console.log('true');
// }else {
//   console.log('false');
// }
let num = 50;
if (num < 49) {
  console.log('false');
} else if (num > 100) {
  console.log('false');
} else {
  console.log('true');
}

(num == 50) ? console.log('true') : console.log('false');

switch (num) {
  case num < 49:
    console.log('false');
    break;
  case num > 100:
    console.log('false');
    break;
  case 50:
    console.log('true');
    break;
  default:
    console.log('error');
    break;
}

let numSecont = 50;

// while (numSecont < 55) {
//   console.log(numSecont);
//   numSecont++;
// }

do {
  console.log(numSecont);
  numSecont++;
}
while (numSecont < 55);


for (let i = 1; i < 8; i++) {
  // if (i == 6) {
  //   break;
  // }
  if (i == 6) {
    continue;
  }
  console.log(i);
}