// Return the type of triangle (acute, obtuse, right or not a triangle) from three given sides (inputs).
// Taken from this 'Triangle Type' kata: http://www.codewars.com/kata/triangle-type/


// Think about how many behaviours you want your code to have. In this case, we identified five different behaviours:
// Behaviour 1 --> calculates angles from three given sides.
// Create tests:
Test.describe("Correct angles", function(){
    Test.assertEquals(findAngle(2,3,1), angleA);
    Test.assertEquals(findAngle(1,3,2), angleB);
    Test.assertEquals(findAngle(1,2,3), angleC);
});

// Code:
var angleA = findAngle(b, c, a);
var angleB = findAngle(a, c, b);
var angleC = findAngle(a, b, c);

function findAngle(a, b, c){
  var angle = (Math.pow(a, 2)+Math.pow(b, 2)-Math.pow(c, 2));
  angle = angle / (2 * a * b);
  angle = Math.acos(angle);
  angle = angle*180/Math.PI;
  return isNaN(angle) ? 0 : angle;
}

// Behaviour 2 --> returns 0 if not a triangle.
// Create tests:
Test.describe("Not triangles", function(){
  Test.assertEquals(triangleType(1,2,3), 0);
  Test.assertEquals(triangleType(5.5,4.5,10), 0);
  Test.assertEquals(triangleType(7,3,2), 0);
  Test.assertEquals(triangleType(5,10,5), 0);
  Test.assertEquals(triangleType(3,3,0), 0);
});

// Code:
if (angleA == 0 || angleB == 0 || angleC == 0) {
  return 0;
}

// Behaviour 3 --> returns 1 if an acute triangle.
// Create tests:
Test.describe("Acute triangles", function(){
  Test.assertEquals(triangleType(3,3,1), 1);
  Test.assertEquals(triangleType(5,5,5), 1);
  Test.assertEquals(triangleType(122.14,222.11,250), 1);
  Test.assertEquals(triangleType(8,5,7), 1);
  Test.assertEquals(triangleType(100000,100005,111111), 1);
});

// Code:
else if (angleA < 90 && angleB < 90 && angleC < 90) {
  return 1;
}

// Behaviour 4 --> returns 2 if an obtuse triangle.
// Create tests:
Test.describe("Obtuse triangles", function(){
  Test.assertEquals(triangleType(2,4,5), 3);
  Test.assertEquals(triangleType(105,100,6), 3);
  Test.assertEquals(triangleType(102,200,250), 3);
  Test.assertEquals(triangleType(65,55,33), 3);
  Test.assertEquals(triangleType(7,8,12), 3);
  Test.assertEquals(triangleType(7.99999,4,4), 3);
});

// Code:
else if (angleA == 90 || angleB == 90 || angleC == 90) {
  return 2;
}

// Behaviour 5 --> returns 3 if a right-angled triangle.
// Create tests:
Test.describe("Right triangles", function(){
  Test.assertEquals(triangleType(3,4,5), 2);
  Test.assertEquals(triangleType(21,220,221), 2);
  Test.assertEquals(triangleType(8.625,33.625,32.5), 2);
  Test.assertEquals(triangleType(65,56,33), 2);
  Test.assertEquals(triangleType(68000,285000,293000), 2);
});

// Code:
else {
  return 3;
}

// Full code with possible refactoring:
function findAngle(a, b, c){
  var angle = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2));
  angle = angle / (2 * a * b);
  angle = Math.acos(angle);
  angle = angle * 180/Math.PI;
  return isNaN(angle) ? 0 : angle;
}

function triangleType(a, b, c) {
  var angleA = findAngle(b, c, a);
  var angleB = findAngle(a, c, b);
  var angleC = findAngle(a, b, c);

  if (angleA == 0 || angleB == 0 || angleC == 0) return 0;
  else if (angleA < 90 && angleB < 90 && angleC < 90) return 1;
  else if (angleA == 90 || angleB == 90 || angleC == 90) return 2;
  else return 3;
}
