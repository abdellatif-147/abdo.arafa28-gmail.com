var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
var Avg_array;           // initial value
function getIndex(array, Num) {
    if (Num >= array[0] && Num <= array[array.length - 1]) { // to check first num is exist or not
        if (array.length % 2 == 0) {      // to get average num for array length
            Avg_array = array.length / 2
        } else {
            Avg_array = (array.length - 1) / 2
        }
        if (Num < array[Avg_array]) {   // if num is less than average
            for (let i = 0; i < Avg_array; i++) {
                if (array[i] == Num) {
                    console.log(`index is ${i}`)
                    break
                }
            }
        } else {                // if num is greater than average
            for (let i = Avg_array; i < array.length - 1; i++) {
                if (array[i] == Num) {
                    console.log(`index is ${i}`)
                    break
                }
            }
        }
    } else {
        console.log(`${Num} is Not exist `)   // if num is not exist

    }
}

getIndex(arr, 200)
