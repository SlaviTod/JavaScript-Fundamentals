function solve(args) {
    let N = parseInt(args[0]);

    let arr = Array.from({
        length: N
    }).forEach((x, i) => {
        x = i * 5;
        console.log(x);
    });

}

solve([5, ]);
solve([10, ]);
solve([3, ]);