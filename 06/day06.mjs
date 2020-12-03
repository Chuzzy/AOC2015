import { readFile, writeFile } from "fs";
readFile("06/input.txt", (err, data) => {
    if (err) throw err;

    const lights = [];
    const brightLights = [];
    for (let y = 0; y < 1000; y++) {
        lights.push([]);
        brightLights.push([]);
        for (let x = 0; x < 1000; x++) {
            lights[y].push(false);
            brightLights[y].push(0);
        }
    }

    function turnOn(xStart, y, xEnd, yEnd) {
        for (; y <= yEnd; y++) {
            for (let x = xStart; x <= xEnd; x++) {
                lights[y][x] = true;
                brightLights[y][x]++;
            }
        }
    }

    function turnOff(xStart, y, xEnd, yEnd) {
        for (; y <= yEnd; y++) {
            for (let x = xStart; x <= xEnd; x++) {
                lights[y][x] = false;
                if (brightLights[y][x] > 0)
                    brightLights[y][x]--;
            }
        }
    }

    function toggle(xStart, y, xEnd, yEnd) {
        for (; y <= yEnd; y++) {
            for (let x = xStart; x <= xEnd; x++) {
                lights[y][x] = !lights[y][x];
                brightLights[y][x] += 2;
            }
        }
    }

    const re = /(?<type>turn on|turn off|toggle) (?<x1>\d+),(?<y1>\d+) through (?<x2>\d+),(?<y2>\d+)/g;
    for (const instruction of data.toString().matchAll(re)) {
        const x1 = parseInt(instruction.groups.x1),
            y1 = parseInt(instruction.groups.y1),
            x2 = parseInt(instruction.groups.x2),
            y2 = parseInt(instruction.groups.y2);

        switch (instruction.groups.type) {
            case "turn on":
                turnOn(x1, y1, x2, y2);
                break;
            case "turn off":
                turnOff(x1, y1, x2, y2);
                break;
            case "toggle":
                toggle(x1, y1, x2, y2);
                break;
            default:
                throw "I don't know what " + instruction.groups.type + " means.";
        }
    }
    let output = lights.map(row => row.map(light => light ? "#" : ".")).join("\r\n");
    writeFile("06/lights1.txt", output, err => { if (err) throw err; });
    console.log(lights.flat().filter(l => l).length + " lights are on.");
    console.log("The total brightness is " + brightLights.flat().reduce((total, brightness) => total + brightness) + ".");
});
