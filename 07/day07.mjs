import { readFile } from "fs";
readFile("07/input.txt", (err, data) => {
    if (err) throw err;

    for (const instruction of data.toString().matchAll(/^(?<wire1>.*?)\s?(?<gate>[A-Z]+) (?<wire2>\w+) -> (?<wire3>\w+)$/gm)) {
        const wire1 = instruction.groups.wire1,
            gate = instruction.groups.gate,
            wire2 = instruction.groups.wire2,
            wire3 = instruction.groups.wire3;
        
    }
})
