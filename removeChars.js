'use strict';

//remove aeiou
//input: 'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou';
//output: 'Bttl f th Vwls: Hw vs. Grzny';

function removeChars(str, strToRemove) {

  var regex = new RegExp(`[${strToRemove}]`, 'g');

  return str.replace(regex, '');



}


console.log(removeChars('The brown fox jumps over the', 'oe'));