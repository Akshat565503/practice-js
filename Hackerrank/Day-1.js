Plus Minus in hackerrank

let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))


*******************************************************************************************
*******************************************************************************************

mini max 

function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}

***********************************************************************************************
*********************************************************************************************

time conversion

function timeConversion(s) {
    
    let lastTwo = s.substring(8);
    
    let fullTime = s.substring(0, 8);
    
    let times = fullTime.split(':');
    
    if(lastTwo === 'PM') {
        if(times[0] !== "12") {
            times[0] = parseInt(times[0]) + 12;
        }
    } else{
        if(times[0] === "12"){
            times[0] = "00"
        }
    }
    return times.join(':');
}
