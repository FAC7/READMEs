describe("There should be an XMLHttpRequest object called xhr", function() {
  it("that exists", function() {
    var actual = new XMLHttpRequest();
    expect(actual).toEqual(xhr);
    expect(actual).not.toEqual("something else");
  });
});

describe("There should be a response variable", function() {
  it("that is not null", function() {
    expect(response).not.toBeNull();
  });
});

describe("There should be a result variable", function() {
  it("it should equal the weather in London", function() {
    expect(result).toEqual('light intensity shower rain');
  });
});
