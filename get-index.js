var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
var Avg_array;
function getIndex(array, Num) {
    if (Num >= array[0] && Num <= array[array.length - 1]) {
        if (array.length % 2 == 0) {
            Avg_array = array.length / 2
        } else {
            Avg_array = (array.length - 1) / 2
        }
        if (Num < array[Avg_array]) {
            for (let i = 0; i < Avg_array; i++) {
                if (array[i] == Num) {
                    console.log(`index ${i}`)
                    break
                }
            }
        } else {
            for (let i = Avg_array; i < array.length - 1; i++) {
                if (array[i] == Num) {
                    console.log(`index ${i}`)
                    break
                }
            }
        }
    } else {
        console.log(`${Num} is Not exist `)

    }
}

getIndex(arr, 200)
