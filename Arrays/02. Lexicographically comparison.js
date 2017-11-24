function solve(args) {
    const arr1 = args[0].split(" ");
    const arr2 = args[1].split(" ");

    const minLength = Math.min(arr1.length, arr2.length);
    let isCompare = false;

    for (let i = 0; i < minLength; i += 1) {
        if (arr1[i] < arr2[i]) {
            console.log("<");
            isCompare = true;
        } else if (arr1[i] > arr2[i]) {
            console.log(">");
            isCompare = true;
        }
    }
    if (!isCompare) {
        if (arr1.length < arr2.length) {
            console.log("<");
        } else if (arr1.length === arr2.length) {
            console.log("=");
        } else {
            console.log(">");
        }
    }
}

solve(['hello', 'halo', ]);
solve(['food', 'food', ]);