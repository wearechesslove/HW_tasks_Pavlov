// 4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted - возвращает true или false, указывая, отсортирован ли данный массив чисел.

// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

let inArr = []

console.log(isSorted(inArr))

function isSorted(inputArr) {

    for (let i = 0; i < inputArr.length; i++) {

        if (i < inputArr.length) {

            if (inputArr[i] > inputArr[i + 1]) {
                return false
            }
        }
    }
    return true
}