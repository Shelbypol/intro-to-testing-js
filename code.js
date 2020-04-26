// helloWorld function 
var helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if(typeof input === 'number' ){
        return 'Hello, ' + input.toString() + '!';
    }
    if(input === undefined || typeof input !== 'string'){
        return 'Hello, World!';
    }
    if(input === true || input === false){
        return sayHello('World')
    }

    return "Hello, " + input + "!";
}

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    if (input === false){
        return false;
    }
    return input % 2 === 0;
}

function isVowel(x){
    var result;
    result = x === "A" || x === "E" || x === "I" || x === "O" || x === "U" || x === "a" || x === "e" || x === "i" || x === "o" || x === "u";
    return result;
}



