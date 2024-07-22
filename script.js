// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';

const calcAge = birthYear => 2024 - birthYear;
console.log(calcAge(1987));
*/

//We work for a company building a smart home therometer. Our most recent task is this: "Given an array of temeratures of one day, calculate the termerature amplitude. Keep in mind that sometimes there might be a senso error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
//what is temp amplitude? diffrence fromt he highest to lowest temp
// how to compute max and min temperatures?
//what is a censor error? And what to do?

//break the problem in sub-problem
// - how to ignore errors
// -Find max value in temp array
// -Find min value in tem array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now recive two arrays of temps

// 1) understanding the problem
// -With 2 arrsy, should we implament functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// -Merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 4, 1], [9, 0, 1, 5]);
console.log(amplitudeNew);
