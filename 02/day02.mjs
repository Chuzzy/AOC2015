import { readFile } from "fs";
readFile("02/input.txt", (err, data) => {
    if (err) throw err;

    const totalWrappingPaperArea = data.toString().split("\n").reduce((total, input) => {
        const [l, w, h] = [...input.split("x").map(x => parseInt(x))];
        const sides = [l*w, w*h, h*l];
        const smallestSide = Math.min(...sides);
        const wrappingPaperArea = 2 * sides.reduce((t, n) => t + n, 0) + smallestSide;
        return total + wrappingPaperArea;
    }, 0);

    const totalRibbonLength = data.toString().split("\n").reduce((total, input) => {
        const [l, w, h] = [...input.split("x").map(x => parseInt(x))];
        const volume = l * w * h;
        const faces = [l + l + w + w, w + w + h + h, h + h + l + l];
        const smallestFace = Math.min(...faces);
        const ribbonLength = volume + smallestFace;
        return total + ribbonLength;
    }, 0);

    console.log(totalWrappingPaperArea + " sq. feet of wrapping paper required.");
    console.log(totalRibbonLength + " feet of ribbon required.");
});
