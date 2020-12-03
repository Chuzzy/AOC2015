import { md5 } from "./md5.mjs";
const input = "iwrupvqb";

function countLeadingZeroes(str) {
    let count = 0;
    for (const char of str) {
        if (char != "0") break;
        else count++;
    }
    return count;
}

for (let i = 0; ; i++) {
    const hash = md5(input + i.toString());
    if (countLeadingZeroes(hash) >= 5) {
        console.log(i + " seems to be the answer.");
        console.log("The MD5 hash of " + input + i.toString() + " is " + hash);
        break;
    }
}

for (let i = 0; ; i++) {
    const hash = md5(input + i.toString());
    if (countLeadingZeroes(hash) >= 6) {
        console.log(i + " seems to be the second answer.");
        console.log("The MD5 hash of " + input + i.toString() + " is " + hash);
        break;
    }
}
