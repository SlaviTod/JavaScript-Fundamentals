function solve(args) {
    let N = parseInt(args[0]);
    let arr = Array.from({
        length: N + 1
    }).fill(1);

    for (let i = 2; i <= N; i += 1) {
        if (arr[i] === 1) {
            for (let j = 2 * i; j <= N; j += i) {
                arr[j] = 0;
            }
        }
    }

    let index = arr.lastIndexOf(1);

    console.log(index);
}

solve(["13"]);
solve(["123"]);
solve(["26"]);