function solve(args) {
    let N = parseInt(args[0]);

    let arr = Array.from({
        length: N
    });

    for (let i = 0; i < N; i += 1) {
        arr[i] = parseInt(args[i + 1]);
    }

    let X = parseInt(args[N + 1]);

    let L = 0,
        R = N - 1;
    let isFind = 0;

    while (L <= R) {
        let index = L + Math.floor((R - L) / 2);
        if (X === arr[index]) {
            console.log(index);
            isFind = true;
            break;
        } else if (X < arr[index]) {
            R = index - 1;
        } else {
            L = index + 1;
        }
    }

    if (!isFind) {
        console.log(-1);
    }
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);