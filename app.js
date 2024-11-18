const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];
let primeArray = [];
for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] % j === 0) {
            count++
        }
    }
    if (count === 2) {
        primeArray.push(numbers[i]);
        console.log(numbers[i] + " is a prime number.")
    }
}

let maxPrimeNum = -Infinity
let minPrimeNum = +Infinity
for(let k =0; k<primeArray.length; k++){
  if(primeArray[k] > maxPrimeNum ){
    maxPrimeNum = primeArray[k];
  }
}
console.log("Maximum Prime number is " + maxPrimeNum)
for(let m =0; m<primeArray.length; m++){
    if(primeArray[m] < minPrimeNum ){
      minPrimeNum = primeArray[m];
    }
  }
  console.log("Minimum Prime number is " + minPrimeNum)

let sumOfPrime = 0;
for(let n = 0 ; n<primeArray.length; n++){
    sumOfPrime = sumOfPrime + primeArray[n];
}
console.log("sum of all prime number is " + sumOfPrime);