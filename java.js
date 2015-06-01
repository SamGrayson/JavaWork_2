

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback


function forEach(array, callback){
    for (var j = 0; j < array.length; j++) {
      callback(array[j]);
    }
    return total;
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0
    for (var i = 0; i < args.length; i++) {
      total = total + args[i];
    }
    return total;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0
    for (var i = 0; i < args.length; i++) {
      total = total + args[i];
    }
    return (total/args.length);
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    var large = Math.max.apply(Math,args);
    return large;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var array = [];
    var longestWord;
    for (var i = 0; i < args.length; i++) {
      array.push(args[i].length);
    }
    var long = Math.max.apply(Math,array);
    args.forEach(function(value,indx,list) {
      if (value.length = long) {
        longestWord = value;
      }
    });
  return longestWord;
  console.log(longestWord);
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

function sorted() {
  var args = [].slice.call(arguments);
  console.log(args);
  var sortifyed = args.sort();
  return sortifyed;
}


// .concat()

var array = [1,2,3,8];

function concatDis() {
  var args = [].slice.call(arguments);
  var arrayArgs = array.concat(args);
  return arrayArgs;
  console.log(arrayArgs);
}


// .indexOf()

function indexFun () {
  var args = [].slice.call(arguments);
  return args.indexOf("hey");
}

console.assert(indexFun("hey","yo","sup") === 0);

// .split()

function theSplits (sting) {
  var args = sting.split(",");
  return args;
  }


// .join()

function joinDez () {
  var args = [].slice.call(arguments);
  return args.join(" ");
}

console.assert(joinDez("hey","yo","sup") === "hey yo sup");


// .pop()

function popIt() {
  var args = [].slice.call(arguments);
  return args.pop();
}

console.assert (popIt("hey","heller","yo") === "yo");

// .push()

function pushIt() {
  var args = [].slice.call(arguments);
  return args.push("good");
}

console.assert(pushIt("real")===2);

// .slice()

function sliced() {
  var args = [].slice.call(arguments)
  var array = args.slice(0,1);
  return array;
}

// .splice()

function spliced() {
  var args = [].slice.call(arguments)
  var array = args.splice(0,1,"woah!");
  return args;
  console.log(args);
}

// .shift()

function shifted() {
  var args = [].slice.call(arguments)
  var arrays = args.shift();
  return args;
  console.log(args);
}

// .unshift()

function unshifted() {
  var args = [].slice.call(arguments)
  var arrays = args.unshift("woah!,");
  return args;
  console.log(args);
}

// .filter()

function aboveFive(value) {
  return value > 5;
}

function fiveUp() {
  var args = [].slice.call(arguments)
  var arrays = args.filter(aboveFive);
  return arrays;
  console.log(arrays);
}

// .map()

function addTwo(value) {
  return value + 2;
}

function plusTwo() {
  var args = [].slice.call(arguments)
  var arrays = args.map(addTwo);
  return arrays;
  console.log(arrays);
}
