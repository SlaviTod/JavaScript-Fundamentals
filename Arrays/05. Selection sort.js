function solve(args) {
    let [N, ...arr] = args;
    N = parseInt(N);
    arr = arr.map(Number);

    for (let i = 0; i < N; i += 1) {
        let subArr = arr.slice(i);
        let min = Math.min(...subArr);
        let index = arr.indexOf(min);
        arr.splice(index, 1);
        arr.splice(i, 0, min);
    }
    console.log(arr.join("\n"));
}

solve(['6', '3', '4', '1', '5', '2', '6']);

solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);