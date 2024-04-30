export default analyzeArray;

function analyzeArray(array) {
    let min = array[0];
    let max = array[0];
    let average;
    let length = array.length;

    array.forEach(element => {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    })

    let middle = (max + min) / 2;
    let diff;

    array.forEach(element => {
        let dist = element - middle;
        if (dist < 0){
            dist = dist * -1;
        }

        if (!diff){
            diff = dist;
            average = element;
        }

        if (dist < diff){
            diff = dist;
            average = element;
        }
    })
    return {
        average,
        min,
        max,
        length
    }
}

analyzeArray([1, 8, 3, 4, 2, 6])