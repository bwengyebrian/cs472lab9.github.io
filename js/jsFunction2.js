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



// function to sum
function sum(arr) {
    var sm = 0
    for(const  i of arr){
        sm +=i;
    }
    return sm;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

// function to sum
function multiply(arr) {
    m = 1;
    for(const i in arr){
        m *= arr[i];
    }
    return m;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

// function to reverse string
function reverse(s) {
     return s.split('').map((s,i,arr)=>arr[arr.length - i-1]).reduce((t,s)=>t +''+s,'');

}
console.log("Expected output of reverse('brian') is nairb  " + myFunctionTest('nairb', function () {
    return reverse('brian');
}));


// function to find the longest word
function findLongestWords(arr,i) {
    let arr2 = [];
    let j = 0;
    for(let e of arr){
        if (e.length > i) {
            arr2[j++] = e;
        }
        }
    return arr2;

}
console.log("Expected output of findLongestWord(['Brian','Bisrat','Fikir','Chinedu']) is ['Bisrat','Chinedu']  " + myFunctionTest(['Bisrat','Chinedu'], function () {
    return findLongestWords(['Brian','Bisrat','Fikir','Chinedu'],5);
}));
