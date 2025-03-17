
// Exercise: Advanced Loops

// Question #1:
// Create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number!
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100.
// Use at least 3 different types of javascript loops to write this!

const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

// Solution 1

function biggestNumberInArray(arr) {
  let biggestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (biggestNumber < arr[i]) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}

// Solution 2

function biggestNumberInArray2(arr) {
  let biggestNumber = 0;
  arr.forEach(item => {
    if (biggestNumber < item) {
      biggestNumber = item;
    }
  })
  return biggestNumber
}

// Solution 3

function biggestNumberInArray3(arr) {
  let biggestNumber = 0;
  for (item of arr) {
    if (biggestNumber < item) {
      biggestNumber = item;
    }
  }
  return biggestNumber
}

// Tests

biggestNumberInArray(array)
biggestNumberInArray(array2)
biggestNumberInArray(array3)

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not!

amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

// Solution

function checkBasket(basket, lookingFor) {
  for (item in amazonBasket) {
    if (item === lookingFor) {
      return `"${lookingFor}" is in your basket.`
    }
  }
  return `"${lookingFor}" is not in your basket.`
}

// Tests

checkBasket(amazonBasket, 'books')
checkBasket(amazonBasket, 'shoes')
