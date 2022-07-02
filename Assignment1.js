/* Given a string s and a number x, print the shortest substrings 
which start and end with the same character and have lengths greater than or equal to x. 
If multiple substrings exist with the same shortest length, print them all.*/

// Eg: 
// s: abccdbacca  
// 	x: 3		Answer: acca
// x: 4		Answer: acca
// x: 5		Answer: bccdb cdbac
// x: 6 		Answer:  abccdba
// x: 7		Answer: abccdba

function subString(s,x) {

    var prev = ""

    for (var i = 0; i < s.length; i++) {

        for (var j = i + 1; j <= s.length; j++) {

            var substr = ""
            for (var k = i; k < j; k++) {
                substr += s[k];

            }

            if(substr[0]===substr[substr.length-1] && substr.length>=x){

                if(prev===""){
                    prev = substr
                }
                else{
                    if(prev.length>substr.length){
                        prev =substr;
                    }
                    else{
                        continue;
                    }
                }
            }
        }
    }

    if(prev.length!==0){

        return prev;
    }
    else{

        return "not-found"
    }

}

console.log(subString("abccdbacca",3));     //x=3
console.log(subString("abccdbacca",4));     //x=4
console.log(subString("abccdbacca",5));     //x=5
console.log(subString("abccdbacca",6));     //x=6
console.log(subString("abccdbacca",7));     //x=7
console.log(subString("abccdbacca",13));    //x=13

