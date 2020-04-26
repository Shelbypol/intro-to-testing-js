// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!', function(){
       expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return Hello, Alex!', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return Hello, Pat!', function(){
       expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return Hello, World!', function () {
        expect(sayHello('World')).toBe('Hello, World!');
    });
    it('should return \'Hello, World!\' when true is the argument', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return \'Hello, World!\' when false is the argument', function(){
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should return Hello, 5!', function () {
        expect(sayHello('5')).toBe('Hello, 5!');
    });
    it('should return Hello, 2.3', function () {
        expect(sayHello (2.3)).toBe('Hello, 2.3!');
    })
    it('should return Hello, !', function () {
        expect(sayHello('')).toBe('Hello, !');
    });
    it('should return Hello, World! if null', function () {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it('should return Hello, World! if array used', function () {
        expect(sayHello([])).toBe('Hello, World!');
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed \'5', function(){
        expect(isFive('5')).toBe(true);
    });
});

describe('isEven', function (){
   it('should be defined a function', function () {
        expect(typeof isEven).toBe('function');
   });
   it('should return a boolean no matter what', function () {
        expect(typeof isEven()).toBe('boolean');
   });
   it('should return true when executed with 2', function () {
        expect(isEven(2)).toBe(true);
   })
    it('should return true when executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
   it('should return false when executed with 3', function (){
       expect(isEven(3)).toBe(false);
   });
   it('should return false when executed with \'banana\' ', function (){
       expect(isEven('banana')).toBe(false);
   });
   it('should return true when executed with \'8\'', function () {
       expect(isEven(8)).toBe(true);
   });
   it('should return false when executed with Infinity', function () {
       expect(isEven(Infinity)).toBe(false);
   });
   it('should return false when true is executed', function () {
       expect(isEven(true)).toBe(false);
   });
   it('should return false when false is executed', function () {
       expect(isEven(false)).toBe(false);
   });
   it('should return false when nothing is executed', function () {
        expect(isEven()).toBe(false);
   });
});

describe('isVowel', function (){
    it('should be defined a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a \'boolean\' ', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when \'a\' is called', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when \'A\' is called', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when \'y\' is called', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when 4 is called', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when true is called', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when false is called', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when \'banana\' is called', function () {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when nothing is called', function () {
        expect(isVowel()).toBe(false);
    });
});






























