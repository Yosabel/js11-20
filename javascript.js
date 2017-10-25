

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




function starOut(str) {
    var newStr="";

    for(var i=0;i<str.length;i++){

        if((str[i-1] != "*") && ([str[i]] != "*") && (str[ i + 1] != "*")) {
            newStr += str[i];
        }


    }
    return newStr;
}





function getSandwich(str){
    var firstBread = str.indexOf("bread");
    var lastBread = str.lastIndexOf("bread");
    if((firstBread==-1) ||(firstBread==lastBread)){
        return "";
    }

    return str.substring(firstBread + 5, lastBread )

}

function canBalance(numbers){
    sum=0;
    sum1=0;
    for(var i =0;i<numbers.length;i++){
        sum += numbers[i];
        for(var x= i+1; x< numbers.length; x++){
           sum1 += numbers[x];
        }
        if(sum==sum1){
            return true;
        }
        sum1=0;
    }
    return false;
}


function countClumps(num) {
    var number = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] == num[i - 1] && num [i] !== num[i + 1]) {
            number += 1;
        }
    }
    return number;
}

// 10. evenlySpaced
// Given three ints, a b c, one of them is small, one is medium and one is large.
//     Return true if the three values are evenly spaced, so the difference between small and medium is the same as the
// difference between medium and large.
//
// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

    function evenlySpaced(a, b, c) {
        var arr = [a, b, c];
        console.log(arr);
        var orderedArray = arr.sort(function(a, b){return a-b});
        console.log(orderedArray);
        if ((orderedArray[0] + orderedArray[2]) / 2 == orderedArray[1]) {
            return true;
        }
        return false;
    }


function tester() {

    document.getElementById("output").innerHTML = evenlySpaced(9,10,11);
    // document.getElementById("output2").innerHTML = has_23([2,5]);
    //test third method, etc
}