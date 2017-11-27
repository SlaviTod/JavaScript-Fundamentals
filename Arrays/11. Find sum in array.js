const arr = [4, 3, 1, 4, 2, 5, 8, 3, ];

let s = 11;

for (let i = 0; i < arr.length; i += 1) {
    let result = [];
    let sum = arr[i];
    result.push(arr[i])
    for (let j = i + 1; j < arr.length; j += 1) {
        sum += arr[j];
        result.push(arr[j])
        if (sum === s) {
            console.log(result.join(", "));
            break;
        } else if (sum > s) {
            break;
        }
    }
}