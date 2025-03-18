
// Exercise: ES2020

// #1: What do you think the MIN_SAFE_INTEGER is? ----------------------------------------------------------------------

console.log(Number.MAX_SAFE_INTEGER); // Answer: 2^53-1
console.log(Number.MIN_SAFE_INTEGER); // Answer: -2^53-1

// #2: Why does this throw an error? How can you fix it? ---------------------------------------------------------------

3 + 4 + 1n;

// --- Solution: BigInts can not be mixed with other types.

3n + 4n + 1n;

// #3: Clean up this code using optional chaining! ---------------------------------------------------------------------

let will_pokemon = {
    pikachu: {
        species: "Mouse Pokemon",
        height: 0.4,
        weight: 6,
        power: "lightning",
        friend: { 
            charizard: {
                species: "Dragon Pokemon",
                height: 1.7,
                weight: 90.5,
                power: "fire"
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: "Mouse Pokemon",
        height: 0.8,
        weight: 30,
        power: ""
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log("Fight!");
    } else {
        console.log("Walk away...");
    }

// --- Solution:

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log('fight!');
} else {
    console.log('walk away...');
}

// #4: What do these each output?

console.log(false ?? "hellooo"); // Answer: false
console.log(null ?? "hellooo"); // Answer: hellooo
console.log(null || "hellooo"); // Answer: hellooo
console.log((false || null) ?? "hellooo"); // Answer: hellooo
console.log(null ?? (false || 'hellooo')); // Answer: hellooo
