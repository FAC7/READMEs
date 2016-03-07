# Bcrypt

Bcrypt is a hashing algorithm

```
'password12345 ---> Bcrypt ---> 'a234weIru2842GHAJ48475IUOI287r'

(i.e. random string of characters)
```

Each time `password12345` is entered into bcrypt the same random string will come out the other side

The benefit of Hashing with Bcrypt is that it's easy to go from `password12345` to the random string but very difficult to go the other way round.

### Why Bcrypt over other Hashing algorithms?

May other hashing algorithms are designed to be fast (e.g MD5 Sha1) but Bcrypt is DESIGNED to be slow, makes it more difficult to decrypt the password by brute force

### Dictionary Attack

Hackers can have a list of common passwords and their Bcrypt strings, and match a stolen password hash to the dictionary (this is why it's important to have a mixture of uppercase, lowercase, numbers and other characters)

### Salting

One way to combat this is by salting the passwords:

Salting adds random strings in between the hash string.

The big benefit to this combined with Bcrypt is that it would take the hacker a very long time to generate a dictionary based on the salt because Bcrypt is so slow!

### Resources

[Video: Bcrypt & Password Security](https://www.youtube.com/watch?v=O6cmuiTBZVs)
