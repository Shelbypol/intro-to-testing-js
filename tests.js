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
    it('should return undefined', function () {
        expect(sayHello(null)).toBe('Hello, World!');
    });
});
