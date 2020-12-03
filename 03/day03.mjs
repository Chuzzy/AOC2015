import { readFile } from "fs";
readFile("03/input.txt", (err, data) => {
    if (err) throw err;

    const visitedLocations = [];
    let position = { x: 0, y: 0 };
    
    for (const instruction of data) {
        const positionStr = `${position.x},${position.y}`;
        if (!visitedLocations.includes(positionStr)) {
            visitedLocations.push(positionStr);
        }
        switch (instruction) {
            case 60: // Left
                position.x--;
                break;
            case 62: // Right
                position.x++;
                break;
            case 94: // Up
                position.y++;
                break;
            case 118: // Down
                position.y--;
                break;
            default:
                throw "How did " + instruction + " get in here?";
        }
    }

    console.log(visitedLocations.length + " unique houses visited.");

    const visitedLocations2 = [];
    let santaPos = { x: 0, y: 0 };
    let robotPos = { x: 0, y: 0 };
    let santaTurn = true;
    for (const instruction of data) {
        if (santaTurn) {
            const positionStr = `${santaPos.x},${santaPos.y}`;
            if (!visitedLocations2.includes(positionStr)) {
                visitedLocations2.push(positionStr);
            }
            switch (instruction) {
                case 60: // Left
                    santaPos.x--;
                    break;
                case 62: // Right
                    santaPos.x++;
                    break;
                case 94: // Up
                    santaPos.y++;
                    break;
                case 118: // Down
                    santaPos.y--;
                    break;
                default:
                    throw "How did " + instruction + " get in here while moving Santa?";
            }
        } else {            
            const positionStr = `${robotPos.x},${robotPos.y}`;
            if (!visitedLocations2.includes(positionStr)) {
                visitedLocations2.push(positionStr);
            }
            switch (instruction) {
                case 60: // Left
                robotPos.x--;
                    break;
                case 62: // Right
                robotPos.x++;
                    break;
                case 94: // Up
                robotPos.y++;
                    break;
                case 118: // Down
                robotPos.y--;
                    break;
                default:
                    throw "How did " + instruction + " get in here while moving Robo-Santa?";
            }
        }

        santaTurn = !santaTurn;
    }
    
    console.log(visitedLocations2.length + " unique locations visited with Robo-Santa's help.");
});
