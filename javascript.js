

function firstLast6(x){
    if((x[0]===6 || x[x.length-1]===6 )){
        return true;
    }else{
        return false;
    }
}
function has_23(x){
    if((x[x.length-1]==2 || x[x.length-1] == 3)){
        return true;
    }
    if((x[0] == 2|| x[0] ==3)){
        return true;
    }else{
        return false;
    }
}
// 3. fix_23
// Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.
// Return the changed array.
//
// fix23([1, 2, 3]) → [1, 2, 0]
// fix23([2, 3, 5]) → [2, 0, 5]
// fix23([1, 2, 1]) → [1, 2, 1]

function fix_23(x){
    if((x[0] == 2)&&(x[1] == 3)){
         x[1]= 0 ;
    }

    if((x[1] == 2) && (x[2] == 3)){
         x[2]=0;
    }
        return x;

}
// 4. countYZ
// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in
// "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if ' +
// 'there is a space (“ “) immediately following it.
//
// countYZ("fez day") → 2
// countYZ("day fez") → 2
// countYZ("day fyyyz") → 2

function countYZ(word,word2){
    if([word.lengtgh-1]==y || [word.length-1==z ]){

    }
}
function tester() {

    document.getElementById("output").innerHTML = fix_23([2,3,3]);
    // document.getElementById("output2").innerHTML = has_23([2,5]);
    //test third method, etc
}
