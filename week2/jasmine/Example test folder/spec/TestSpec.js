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
