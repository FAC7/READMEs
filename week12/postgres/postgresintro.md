# Intro to Postgres CLI

### What is SQL?

SQL (Structured Query Language) is a programming language designed to manage data stored in relational databases.

SQL queries allow us to communicate with a database by asking questions and having the result set return data relevant to the question.

'PostgreSQL is a general purpose and object-relational database management system'


## How to install on Ubuntu
In the command line type:
```sudo apt-get install postgresql postgresql-contrib ```
This will install the latest version available in your Ubuntu release.


In a terminal, type:

```sudo -u postgres psql postgres```

This connects as a role with same name as the local user, i.e. "postgres", to the database called "postgres" (1st argument to psql).
This will start up your postgres cli
The terminal will look something like this:

```
psql (9.4.7)
Type "help" for help.

postgres=#
```

You can set a password for the "postgres" database role using the command:

``` \password postgres ```

give your password when prompted. The password will be hidden from the console.

Type Ctrl+D or \q to quit the posgreSQL prompt.

As a side point. Another way to get into server (on ubuntu) is to type in your terminal

``` sudo su ```

then

```su - postgres```

## some basic functions


### create a database

``` sudo -u postgres createdb mydb ```

'-u' indicates username

'mydb' is the name I assigned to this new database.  

### create a table
Type into your postgres cli
```sql
CREATE TABLE products (
    product_no integer,
    name text,
    price numeric
);
```

'products' indicates table name
'product' 'name', 'price' are keys
'integer', 'text', 'numeric' are data types

### insert data

Options include

```sql
INSERT INTO products VALUES (1, 'Cheese', 9.99);
```  
The data values are listed in the order in which the columns appear in the table, separated by commas. However this has the drawback that you need to know the order in the table.

the alternative is

```sql
INSERT INTO products (product_no, name, price) VALUES (1, 'Cheese', 9.99);
INSERT INTO products (name, price, product_no) VALUES ('Cheese', 9.99, 1);
```
multiple products

```sql
INSERT INTO products (product_no, name, price) VALUES
    (1, 'Cheese', 9.99),
    (2, 'Bread', 1.99),
    (3, 'Milk', 2.99);

```

if you don't have a value for all columns
```sql
INSERT INTO products (product_no, name) VALUES (1, 'Cheese');
INSERT INTO products VALUES (1, 'Cheese');
INSERT INTO products (product_no, name, price) VALUES (1, 'Cheese', DEFAULT);
INSERT INTO products DEFAULT VALUES;
```

### updating data

For example, this command updates all products that have a price of 5 to have a price of 10:
```sql
UPDATE products SET price = 10 WHERE price = 5;
```

The key word UPDATE followed by the table name. As usual, the table name can be schema-qualified, otherwise it is looked up in the path. Next is the key word SET followed by the column name, an equal sign, and the new column value. The new column value can be any scalar expression, not just a constant. For example, if you want to raise the price of all products by 10% you could use:

```sql
UPDATE products SET price = price * 1.10;
```

You can update more than one column:

You can update more than one column in an UPDATE command by listing more than one assignment in the SET clause. For example:
```sql
UPDATE mytable SET a = 5, b = 3, c = 1 WHERE a > 0;
```

### Deleting data
e.g.
```sql
DELETE FROM products WHERE price = 10;

```
### Queries

To display a whole table
```sql

SELECT * FROM table1;

```
Show certain columns

```sql
SELECT name, price FROM products
```

You can do sums

```sql
SELECT 3 * 4;
SELECT random();
```
Background reading and docks

+ [sql tutorial](http://www.sql-tutorial.net/)
+ [what is PostgreSQL](http://www.postgresqltutorial.com/what-is-postgresql/)
+ [dwyl learn PostgreSQL](https://github.com/dwyl/learn-postgresql)
