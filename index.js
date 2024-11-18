const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
  
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i] + " is an even number.")
    }
    else{
        console.log(numbers[i] + " is an odd number.")
    }
  }