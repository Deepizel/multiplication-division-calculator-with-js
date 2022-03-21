// let a = '5';
// let b = 5;
// let c = 13;

// let sumValue = a + b;
// console.log("sumValue", sumValue);
// sumValue+=6;
// console.log(sumValue);

// if (condition) {

// }
// alert(c + b + a);

let txtValue = prompt("enter number", "");

for (let index = 1; index < txtValue; index++) {
  if (index % 2 !== 0) {
    console.log(`odd number within ${txtValue} = ${index}`);
  } else if (index % 2 == 0) {
    console.log(`even number within ${txtValue} = ${index}`);
  }
}

const number = prompt("Enter a number to be checked: ");
let prime = true;
// testing 1
if (number === 1) {
  alert("1 is not prime number.");
}
// testing 2
else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    alert(`${number} is a prime number`);
  } else {
    alert(`${number} is a not prime number`);
  }
} else {
  alert("The number is not a prime number.");
}
