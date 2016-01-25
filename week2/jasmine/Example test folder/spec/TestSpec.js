describe("The example function should", function() {
  it("return the string 'example'", function() {
    var actual = example();
    expect(actual).toBe("example");
    expect(actual).not.toBe("something else");
  });
});

describe("The double function should", function() {
    var arr = [1, 2, 4];
    var actual = double(arr);
    it("return a simple array, doubled", function (){
        expect(actual).toEqual([2, 4, 8]);
        expect(actual).not.toEqual("a string");
    });

    var arr2 = [1.1, 2.2, 3.3];
    var actual2 = double(arr2);
    it("work for non-integers", function() {
        expect(actual2).toEqual([2.2, 4.4, 6.6]);
        expect(actual2).not.toEqual("a string");
    });

    var arr3 = [-1, -2, -3];
    var actual3 = double(arr3);
    it("work for negative numbers", function(){
        expect(actual3).toEqual([-2, -4, -6]);
        expect(actual3).not.toEqual("");
    });
});

describe("the primes function", function() {
    it('should return true for all prime numbers', function() {
        var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
        primes.forEach(function(prime) {
            var actual4 = isPrime(prime);
            expect(actual4).toBe(true);
        });
    });
    it('should return false if number is not prime', function() {
        var nonPrimes = [4,6,8,9,10,12,14,15,16,18,20];
        nonPrimes.forEach(function(nonPrime) {
            var actual5 = isPrime(nonPrime);
            expect(actual5).toBe(false);
        });
    });
});
