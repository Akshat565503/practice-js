//Lonely integer

function lonelyinteger(a) {

    
    const [lonely] = a.sort((a, b) => a - b).reduce((acc, curr) => {      
        
        if(!acc.includes(curr)) {
            t
            acc.push(curr)
        } else {
            
            acc.pop()
        }

        
        return acc
    }, [])

    return lonely
}

******************************************************************************************
******************************************************************************************

//Diagonal matrix

function diagonalDifference(matrix) {
   
    const length = matrix.length;
    let diagonal1 = 0, diagonal2 = 0;
  
    
    for(let i = 0; i < length; i++){
      
        diagonal1 += matrix[i][i];
      
        diagonal2 += matrix[length -1 - i][i]
    }
    
    return Math.abs(diagonal1 - diagonal2);  

}


******************************************************************************************
******************************************************************************************

//Counting sort 1

function countingSort(arr) {
    let size = arr.length < 101 ? arr.length : 100
    let ans = new Array(size).fill(0)
    arr.map(x => ans[x]++ )
    return ans   
}
