

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

function countYZ(str){
    var x= 0;
    var Z= str.toUpperCase();
    var Y= str.toUpperCase();
    for(var i=0;i<= str.length;i++){
       if(str[i]==" ") {
           if((str[i-1]=="y")||(str[i-1]=="z" )) {
               x += 1;
           }
       }
    }

    if((str[str.length-1]=="y") ||(str[str.length-1]=="z")) {
        x+=1
    }

    return x;
}


// 5. endOther
// Given two strings, return true if either of the strings appears at the very end of the
// other string, ignoring upper/lower case differences (in other words, the computation should not be
// "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.
//
// endOther("Hiabc", "abc") → true
// endOther("AbC", "HiaBc") → true
// endOther("abc", "abXabc") → true
//
//
//

function endOther(str,str1){
var str=str.toLowerCase();
var str1=str1.toLowerCase();
   if(str1.endsWith(str)) {
     return true;
 }
    if(str.endsWith(str1)){
        return true;
}
return false;
}


function tester() {

    document.getElementById("output").innerHTML = endOther("hiabc","abc");
    // document.getElementById("output2").innerHTML = has_23([2,5]);
    //test third method, etc
}
