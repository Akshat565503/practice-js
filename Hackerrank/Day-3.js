//ceaser cipher

function caesarCipher(s, k) {
    // Write your code here
    let newString = "";
    for(let i = 0; i< s.length;i++){
        if(!s[i].match(/[a-zA-Z]/)){
            newString += s[i]; 
        }else if(s[i].match(/[a-z]/)){
            let newS = "";
            const check = s[i].charCodeAt() + k%26;
            if(check > 122){
                newS = String.fromCharCode(check - 122 + 96 );
            }else{
                newS = String.fromCharCode(check);
            }
            newString += newS;
            
        }else if(s[i].match(/[A-Z]/)){
            let newS = "";
            const check = s[i].charCodeAt() + k%26;
            if(check > 90){
                newS = String.fromCharCode(check - 90 + 64 );
            }else{
                newS = String.fromCharCode(check);
            }
            newString += newS;
        }
    }

    return newString;

}

****************************************************************************************
****************************************************************************************

//tower breakers



function readLine() {
    return inputString[currentLine++];
}


function towerBreakers(n, m) {
  return (m == 1 || n % 2 == 0 ? 2 : 1);
}
