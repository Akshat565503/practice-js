//Grid Line

function gridChallenge(grid) {
    for (var i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }
    console.log(grid);
    for (var j = 0; j < grid.length; j++) {
        for (var i = 0; i < grid.length - 1; i++) {
            if (grid[i][j] > grid[i + 1][j]) {
                console.log(grid[i][j], grid[i + 1][j]);
                return "NO";
            }
        }
    }

    return "YES";
}

****************************************************************************************
****************************************************************************************

//Recursive digit sum

function superDigit(n, k) {
    // Write your code here
    if(n.length === 1) return n;
    
    let arrOfString = n.split('');
    
    let reduceForm = arrOfString.reduce((acc, num) => {
        return acc + Number(num)
    }, 0)*k;

    return superDigit(String(reduceForm), 1);
}

***************************************************************************************
***************************************************************************************

//New year chaos

function minimumBribes(q) {
let num = 0
let chaotic = false
for(let i=q.length-1; i>=0; i--) {
	if(q[i]-i>3) chaotic = true
for(let j=q[i]-2;j<i;j++){
	if(q[j]>q[i]) num++
}
}
if(chaotic) console.log("Too chaotic")
else console.log(num)
}
