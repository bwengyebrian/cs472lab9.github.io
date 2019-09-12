/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}


// function for maximum
function max(v1, v2){
    return v1>v2?v1:v2;
}
console.log("Expected output of max(15,10) is 15  " + myFunctionTest(15, function () {
    return max(15,10);
}));

// function for maxOfThree()
function maxOfThree(v1,v2,v3){
    return max(max(v1,v2),v3);
}
console.log("Expected output of maxOfThree(1,2,3) is 3  " + myFunctionTest(3, function () {
    return maxOfThree(1,2,3);
}));

// function for is vowel
function isVowel(s) {
    var arr = ["a","e","i","o","u","A","E","I","O","U"];
    return arr.includes(s);
}
console.log("Expected output of isVowel('E') is true  " + myFunctionTest(true, function () {
    return isVowel('E');
}));
console.log("Expected output of isVowel('B') is false  " + myFunctionTest(false, function () {
    return isVowel('B');
}));

// function to sum
function sum(arr) {
    return arr.reduce(function (sum,v) {
        return sum + v;
    })
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

// function to sum
function multiply(arr) {
    return arr.reduce(function (total,v) {
        return total * v;
    },1)
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

// function to reverse string
function reverse(s) {
    var arr = "";
    for (let i = s.length-1; i >= 0;i--){
          arr+=s.charAt(i)  ;
    }
    return arr;
}
console.log("Expected output of reverse('brian') is nairb  " + myFunctionTest('nairb', function () {
    return reverse('brian');
}));

// function to find the longest word
function findLongestWord(arr) {
    if(arr == null) return null;
    if(arr.length ==1) return arr[0].length;
    if(arr.length == 2) return  max(arr[0].length,arr[1].length);
    var maxl = arr[0].length;
    for(let i = 1;i< arr.length ;i++){
        maxl = max(maxl,arr[i].length);
    }
    return maxl;


}
console.log("Expected output of findLongestWord(['Brian','Bisrat','Fikir','Chinedu']) is 7  " + myFunctionTest(7, function () {
    return findLongestWord(['Brian','Bisrat','Fikir','Chinedu']);
}));

// function to find the longest word
function findLongestWords(arr,i) {
    return arr.filter(function (s) {
      return s.length > i;
    });


}
console.log("Expected output of findLongestWord(['Brian','Bisrat','Fikir','Chinedu']) is ['Bisrat','Chinedu']  " + myFunctionTest(['Bisrat','Chinedu'], function () {
    return findLongestWords(['Brian','Bisrat','Fikir','Chinedu'],5);
}));

const a = [1,3,5,3,3];


// a) multiply each element by 10
function multiplyBy10(arr) {
    return arr.map(function (elem,i,arr) {
        return elem * 10;
    })
}
console.log("Expected output of multiplyBy10([1,3,5,3,3]) is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30], function () {
    return multiplyBy10(a);
}));

// b) all ements equals 3
function allElementsequals3(arr) {
    return arr.filter(function (elem,i,arr) {
        return elem == 3;
    })
}
console.log("Expected output of allElementsequals3([1,3,5,3,3]) is [3,3,3]  " + myFunctionTest([3,3,3], function () {
    return allElementsequals3(a);
}));

//c product of all elements
function productOfAllElements(arr) {
    return arr.reduce(function (total,elem,i,arr) {
        return total * elem;
    },1);
}
console.log("Expected output of productOfAllElements([1,3,5,3,3]) is 135  " + myFunctionTest(135, function () {
    return productOfAllElements(a);
}));