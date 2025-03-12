
// For all of these snippets, what values will alert() display?

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //3
}

// #2
// You must first run q2() in your console, then run q22().
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}

// #3
// You must first run q3() in your console, then run q32()
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a); // hello
}

// #4
var a = 1;
function q4() {
    var a = "test";
    alert(a); // test
}

// #5: with var keyword, if statements do not create new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5
