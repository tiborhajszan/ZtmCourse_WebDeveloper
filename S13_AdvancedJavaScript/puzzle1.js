// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Advanced JavaScript :: JavaScript Logic :: Question #1

// Clean The Room function:
// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// implement a function that organizes the input into an ordered and grouped array.
// For example, the array from above should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make the function differentiate between string and number types,
// i.e., [1, "2", "3", 2] should return [[1,2], ["2", "3"]].

function organizeInput(inputList) {
    // Separate numbers and strings
    const numbers = inputList.filter(x => typeof x === 'number');
    const strings = inputList.filter(x => typeof x === 'string');
  
    // Organize numbers
    numbers.sort((a, b) => a - b);
    const organizedNumbers = [];
    let currentGroup = [numbers[0]];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] === currentGroup[currentGroup.length - 1]) {
        currentGroup.push(numbers[i]);
      } else {
        organizedNumbers.push(currentGroup);
        currentGroup = [numbers[i]];
      }
    }
    organizedNumbers.push(currentGroup);
  
    // Organize strings
    strings.sort();
    const organizedStrings = [];
    currentGroup = [strings[0]];
    for (let i = 1; i < strings.length; i++) {
      if (strings[i] === currentGroup[currentGroup.length - 1]) {
        currentGroup.push(strings[i]);
      } else {
        organizedStrings.push(currentGroup);
        currentGroup = [strings[i]];
      }
    }
    organizedStrings.push(currentGroup);
  
    // Combine results
    const result = organizedNumbers.concat(organizedStrings);
    // Remove single-element lists
    return result.map(x => x.length > 1 ? x : x[0]);
  }