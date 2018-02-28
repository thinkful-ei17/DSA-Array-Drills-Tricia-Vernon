function merge(arr1, arr2) {

  let newArr = arr1.concat(arr2);
  console.log(newArr);

  let sorted = false;
  //while not sorted aka not (true or false)
  while(!sorted) {
    //go through arr

    // assume list is sorted in the beginning!!
    sorted = true;

    for(let i = 0; i < newArr.length; i++){
      //if arr[n] > arr[n+1]
          //switch & turn sorted into false

      if (newArr[i] > newArr[i+1]){
        console.log('SWITCHING');
        console.log(newArr[i], newArr[i+1]);

        //SWITCHING
        let temp = newArr[i];
        newArr[i] = newArr[i+1];
        newArr[i+1] = temp;

        console.log('DONE SWITCHING');
        console.log(newArr[i], newArr[i+1]);

        //since i switched; it means my arr wasnt sorted
        sorted = false;
      }
    }

    console.log('did some work', newArr);
  }

  return newArr;
}

console.log(merge([1,2,100],[56,67,78,89,11]));
