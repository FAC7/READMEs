# TDD Life Cycle

TDD stands for *Test Driven Development*. TDD relies on repeating a short cycle
(shown below). TDD favours identifying bugs before you have a large amount of code.
The benefits of this repetitive short cycle include:

* Faster implementation: bugs are avoided or found quickly which reduces long
debugging sessions
* Contextualises code: enables programmer to think when and how the user will use
the program
* Greater code confidence: all code is covered by at least one test
* More structured work flow: helps divide tasks within a team of developers

<img src="http://www.codeproject.com/KB/tips/320791/tdd_cycle.jpg" width="50%">

### Add Test  
Decide on a behaviour you want to implement. Create a test that will fail unless
that behaviour is present. These tests need to be written **before** writing
any code for that feature.

### Watch Test Fail  
In the absence of any code that implements the desired behaviour, the test should
fail.

### Write Code  
Write code only for the test that has been written. The code should only satisfy
the conditions of the test, nothing more.

### Run Tests  
Check that the code you have written now passes the tests. If it doesn't go back
a step and make necessary changes.

### Refactor  
After the test is passing, refactor your code to check for duplication and improve
readability. Make sure you refactor by working in small steps and running your
test often. This ensures that the existing behaviour does not change. 
