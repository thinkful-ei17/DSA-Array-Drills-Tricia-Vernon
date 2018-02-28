function filter(input) {
  let arr = [];

  input.forEach(value => {
    if(value < 5){
      arr.push(value);
    }
  });

  return arr;

}


console.log(filter([1,2,3,4,5,56,6,7,8,9,7,12]));
