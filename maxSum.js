function arrayMax(arr) {
 let total = 0;
 let max = 0;
 for (let i = 0; i < arr.length; i++) {
   if (total + arr[i] < 0) {
     total = 0;
   } else {
     console.log('total = ', total);
     total = total + arr[i];
     console.log('new total = ', total);
     if (max < total)
       max = total;
   }

 }
 return max;
}

console.log(arrayMax([-7, 2, 1000, 8, -8, -1]));
