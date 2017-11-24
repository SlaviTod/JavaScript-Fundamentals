function solve(args) {
    const n = parseInt(args[0]);
    const arr = Array.from({
        length: n
    });
    for (let i = 0; i < n; i += 1) {
        arr[i] = parseInt(args[i + 1]);
    }

    let maxLength = 0;
    let currLength = 1;

    for (let i = 0; i < n - 1; i += 1) {
        if (arr[i] === arr[i + 1]) {
            currLength += 1;
        } else {
            maxLength = Math.max(currLength, maxLength);
            currLength = 1;
        }
    }
    maxLength = Math.max(currLength, maxLength);
    console.log(maxLength);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);