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