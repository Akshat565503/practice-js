//Simple Text Editor

function processData(input) {
    input = input.split('\n');
    let S = "";
    let lastStateOfS = [S];
    
    for(let i = 1; i < input.length; i++){
            let query = input[i].split(' ');
            if(query[0] === '1'){
                S += query[1];
                lastStateOfS.push(S)
            } else if (query[0] === '2'){
                let charsToDelete = +query[1];
                S = S.substring(0, S.length - charsToDelete);
                lastStateOfS.push(S)
            } else if (query[0] === '3'){
                console.log(S[+query[1] - 1]);
            } else{
                lastStateOfS.pop();
                S = lastStateOfS[lastStateOfS.length - 1];
            }
    }

    return S;
}
