// YOUR CODE BELOW
let alphabet="abcdefghijklmnopqrstuvwxyz";


function caesarCypher(string, num){
    finalString=[];
  for (let i=0; i<string.length; i++){  
    stringCharector=string[i];
    if (stringCharector===" "){
      finalString.push(" ");}
    else{
        for (let k=0; k<alphabet.length; k++){
        abcCharector= alphabet[k];
            if (abcCharector===stringCharector && (k+num)>(alphabet.length-1)){
            finalString.push (alphabet[k-(alphabet.length-num)]);}
            if (abcCharector===stringCharector&& (k+num)<(alphabet.length-1)){
            finalString.push (alphabet[k+num]);
      }}
      
      
      }
    }
    
 return finalString.join("");
 
}

 console.log(caesarCypher('hello world', 13));