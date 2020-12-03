import { readFile } from "fs";
readFile("05/input.txt", (err, data) => {
    if (err) throw err;

    const input = data.toString().split("\r\n");
    let niceCount = 0;

    for (const word of input) {
        if (["ab", "cd", "pq", "xy"].every(s => !word.includes(s))) { // Doesn't contain bad substrings
            const matches = word.match(/[aeiou]/g)
            if (matches && matches.length >= 3) { // Contains at least 3 vowels
                if (word.match(/(\w)\1+/)) { // Has consecutive letter
                    niceCount++;
                }
            }
        }
    }

    console.log("There are " + niceCount + " nice words");

    niceCount = 0;

    for (const word of input) {
        if (word.match(/(.).\1/) && word.match(/(..).*\1/)) niceCount++;
    }

    console.log("There are " + niceCount + " nice words according to the new rules");
});
