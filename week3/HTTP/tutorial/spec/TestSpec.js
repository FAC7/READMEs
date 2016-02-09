
var xhr1 = new XMLHttpRequest();
var response1;

xhr1.onreadystatechange = function() {
    if(xhr1.readyState == 4 && xhr.status == 200) {
        response1 = JSON.parse(xhr1.responseText);
    }
};
xhr1.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8003fbadd5c2e05f9b0170036fc26185", false);
xhr1.send();
var result1 = response1.weather[0].description;


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
    expect(result).toEqual(result1);
  });
});
