// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';

const calcAge = birthYear => 2024 - birthYear;
console.log(calcAge(1987));


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



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) Fix
    // value: Number(prompt('Degrees Celsius:')),
    value: 10,
  };
  // B) Find
  console.log(measurement);
  console.table(measurement);
  10;
  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify
console.log(measureKelvin());

// Using a De-Bugger
const calcTempAmplitudeBug = function (t1, t2) {
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
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify:
console.log(amplitudeBug);



///////////////////////////////////////////////////////////////////////// Code challenge #1

// Given an array of forcasted maximum temps, the thermometer displays a string with these temps.

// example: [17, 21, 23] will print "...17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

//create a function 'printForcast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framwork: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]


// MY SOULUTION TO THE CHALLENGE
//function
const printForcast = function (data1, data2) {
  const arr = testData1.concat(testData2);
  let max = arr[0];
  let min = arr[0];
  let forecastStr = '';

  //looping through the array and adding the number of days
  for (let i = 0; i < arr.length; i++) {
    forecastStr += `...${arr[i]}C in ${i + 1} days`;
    const currTemp = arr[i];
    if (typeof currTemp === 'string') continue;

    //determining the min max
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  //logging the min max
  console.log(forecastStr);
  console.log(`Max Temp:${max} | Min Temp:${min}`);

  return min, max;
};

// test date
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
// displaying the function
const result = printForcast(testData1, testData2);
console.log(result);



// UDEMY SOULUTION TO THE CHALLENGE:

// Understanding the problem
// - Array transformed to a string, seperated by ...
// - what is the X days? Answer: index + 1

// Breaking up into sub-problems
// - Transform array into string
// - Transform each lement to string with C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const allData = data1.concat(data2);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForcast(allData);
*/

//PERSONAL CHALLENGE
// using the kills you have learned so far, generate a function called costGas that will calculate the distance traveled/ gallons consumed, and out put the miles per gallon for the car and the amount of gas it cost to travel that disstance.

const costGas = function (distance, gallonsConsumed, costPerGallon) {
  //calculate miles per gallon
  const milesPerGallon = distance / gallonsConsumed;
  //calculate total gas cost
  const totalCost = gallonsConsumed * costPerGallon;
  //return the object with the results
  return {
    milesPerGallon: milesPerGallon,
    totalCost: totalCost,
  };
};

const distanceTraveled = 478;
const gallonsUsed = 26;
const costPerGallon = 3.5;

const result = costGas(distanceTraveled, gallonsUsed, costPerGallon);
console.log(`Miles per gallon: ${result.milesPerGallon}`);
console.log(`total gas cost: $${result.totalCost}`);
