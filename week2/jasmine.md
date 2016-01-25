<h2>Download</h2>

To download Jasmine go to the following github repo and download the jasmine-standalone-2.4.1.zip file:

https://github.com/jasmine/jasmine/releases

The zip file includes the following:

+ **SpecRunner.html file** - this is linked to your source and spec files. Open it in your browser when running your tests
+ **spec folder** - your tests go in here. These are .js files
+ **src folder** - the js code under test goes here
+ **lib** - already linked to in the SpecRunner.html file


Before running your tests make sure you link to your src and spec files in SpecRunner.html
Example:
```html
<!-- include source files here... -->
<script src="src/code.js"></script>

<!-- include spec files here... -->
<script src="spec/test.js"></script>
```

Reference: http://jasmine.github.io/2.2/introduction.html
