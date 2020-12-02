import { readFile } from "fs";
readFile("01/input.txt", (err, data) => {
    if (err) throw err;
    let floor = 0;
    let i = 0;
    let hasntYetGoneUnder = true;
    for (const char of data) {
        i++;
        if (char === 40) {
            floor++
        } else if (char === 41) {
            floor--;
        } else {
            throw "Excuse me? Unexpected value " + char + " found in input.";
        }
        if (hasntYetGoneUnder && floor < 0) {
            hasntYetGoneUnder = false;
            console.log("Santa went underground on instruction " + i);
        }
    }
    console.log("Santa is on floor " + floor);
});
