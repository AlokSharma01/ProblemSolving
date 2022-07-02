/*Given a string s, find the ASCII value of each character iteratively. If the ASCII value is even,
 increment the next character by (ASCII_value % 7). 
 If the ascii value is odd, decrement the previous character by (ASCII_value % 5). 
 Output the newly formed string. */
// Note:
// If a character has already been changed once, do not change that character again. 
// If the new number is an invalid ASCII value, replace it with 83. 


var s = "sHQen}"
var ascii=[];
var temp =[];


for(var i=0;i<s.length;i++){

    ascii.push(s.charCodeAt(i))
    temp.push(s.charCodeAt(i))
}


for(var j=0;j<ascii.length;j++){
 
    
       
    if(ascii[j]%2===0){
         

        if(ascii[j+1]!==undefined){
          
            ascii[j+1] += ascii[j]%7;
        }  
        
    }
    else{
         
       if(ascii[j-1]==temp[j-1]){   // if value is already changed or not;

         ascii[j-1] -= ascii[j]%5
       }
    }
       
}
   

var ans="";

for(var k=0;k<ascii.length;k++){

  ans+=  String.fromCharCode(ascii[k])
}

console.log(ans)

