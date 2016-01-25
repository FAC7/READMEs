# Test Driven Development: Red, Green, Refactor!
Test Driven Development (TDD) is a way of building code that is consistently and repeatedly tested at every stage. So while the overall code may not be complete, the code will be well streamlined, up-to-date and tested, ready to fit into the project. TDD requires **ALOT** of discipline, however the benefits in the long run far outweigh the effort required to write the tests.

 A useful mnemonic for remembering the basic TDD cycle is <span style="color:red"> Red </span> > <span style="color:green"> Green </span> > <span style="color:silver"> Refactor </span>.

## <span style="color:red"> Red </span>

* Think about what you want the software to do which could be implemented by a few lines of code (less than five is ideal).
* Write the test (only a few lines of code) which will fail if the behaviour is not present.



## <span style="color:green"> Green </span>

Write just enough code to get the test to pass, focus on:

* Getting the code to work.
* Simplest possible implementation, rather than the most elegant solution (even hard-coded values are okay).
* Reverting to known good code if the test continues to fail.

If after a few attempts you can't make the test pass, consider starting over with a different test, possibly employing even less code. You are done with this step when the test passes.



## Refactor

* Now your tests pass, you can make changes without worrying about breaking anything.
* Look at the code you've written. Can you improve it?
* Look for duplication and other "code smells." Can you make it simpler?
* Check your code still works.

 * REPEAT,
You'll repeat this cycle dozens of times in an hour!
