function solve(args) {
    const N = parseInt(args[0]);

    let arr = Array.from({
        length: N
    });

    for (let i = 0; i < N; i += 1) {
        arr[i] = +args[i + 1];
    }

    let repeatedNr = 0;
    let repeatedTimes = 0;

    for (let i = 0; i < N; i += 1) {
        let currRepeated = arr[i];
        let currTimes = 0;
        arr.forEach((x) => {
            if (x === currRepeated) {
                currTimes += 1;
            }
        });
        if (repeatedTimes < currTimes) {
            repeatedNr = currRepeated;
            repeatedTimes = currTimes;
        }
    }

    console.log(`${repeatedNr} (${repeatedTimes} times)`);
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);