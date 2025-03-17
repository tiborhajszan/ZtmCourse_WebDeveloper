
// Exercise ES10

// #1 Turn this array into a new array: [1,2,3,[4],[5]]! Bonus: try to do it on one line! ------------------------------

const array = [[1],[2],[3],[[[4]]],[[[5]]]];

// --- Solution

console.log(array.flat(2));

// #2 Turn this array into a new array: [ "Hello young grasshopper!", "you are", "learning fast!" ]! -------------------

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// --- Solution

console.log(greeting.flatMap(item => item.join(" ")));

// #3 Turn the greeting array above into a string: "Hello young grasshopper you are learning fast!" --------------------

console.log(greeting.flatMap(item => item.join(" ")).join(" "));

// #4 Turn the trapped number into: [3]! -------------------------------------------------------------------------------

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// --- Solution

console.log(trapped.flat(Infinity));

// #5 Clean up this email to have no whitespaces! Make the answer be in a single line (return a new string)! -----------

const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';

// --- Solution

const cleanEmail = userEmail3.trim();

// #6 Turn the users below (value is their ID number) into an array: ---------------------------------------------------
// [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]!

const users = {user1: 18273, user2: 92833, user3: 90315};

// --- Solution

console.log(Object.entries(users));

// #7 Change the output array of the above to have the user's IDs multiplied by 2! -------------------------------------
// Output should be:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ].

console.log(Object.entries(users).map(user => [user[0], user[1] * 2]));

// #8 Change the output array of question #7 back into an object with all user IDs updated! ----------------------------
// Output should be: { user1: 36546, user2: 185666, user3: 180630 }.

console.log(Object.fromEntries(Object.entries(users).map(user => [user[0], user[1] * 2])));
