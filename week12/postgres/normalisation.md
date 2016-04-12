# Normalisation
The process of efficiently organising data in a database. Normalisation is achieved through Normal Forms. This readMe will cover the first three of these. Each normal form builds on its predecessor i.e. you cannot implement Normal Form 2 without implementing Normal Form 1 first.

## Aims

* Not storing the same data in more than one table.
* Only storing related data in a table.

## Benefits
1. Eliminate data redundancy
2. Improve performance
3. Query optimisation
4. Faster update process (fewer columns in one table)
5. Removes [modification anomalies](https://en.wikipedia.org/wiki/Database_normalization#Free_the_database_of_modification_anomalies)

## First Normal Form (1NF)
* No table cell should contain more than one value.
* This would be bad practice:

| Name  | Occupation           |
|-------|----------------------|
| Elias | Developer, Scientist |

* Similarly, so would this:

| Name  | Occupation 1 | Occupation 2 |
|-------|--------------|--------------|
| Elias | Developer    | Scientist    |

* Instead your table should look like this:

| Name  | Occupation |
|-------|------------|
| Elias | Developer  |
| Elias | Scientist  |

## Second Normal Form (2NF)
* Having followed First Normal Form, you may end up with a table rows with duplicate values in all but one cell like this:

| Name  | Age | Occupation |
|-------|-----|------------|
| Elias | 26  | Scientist  |
| Elias | 26  | Developer  |
| Tom   | 28  | Musician   |
| Tom   | 28  | Developer  |

* Name and Occupation form together what's known as a [Candidate Key](https://en.wikipedia.org/wiki/Candidate_key) (a subject we don't have time for here).
* Therefore Age is partially dependent on the Candidate Key, since it depends on Name but not on Occupation.
* This should flag the need to implement Second Normal Form.
* This involves splitting the above table into two - one for Age and one for Occupation:

| Name  | Age |
|-------|-----|
| Elias | 26  |
| Tom   | 28  |

| Name  | Occupation |
|-------|------------|
| Elias | Developer  |
| Elias | Scientist  |
| Tom   | Developer  |
| Tom   | Musician   |  

## Third Normal Form (3NF)
* Having followed First and Second Normal Form, you may end up with something like this:

| Name  | Occupation | Postcode | Street        | City   |
|-------|------------|----------|---------------|--------|
| Elias | Developer  | SW2 7LA  | Code Street   | London |
| Elias | Scientist  | SW2 7LA  | Code Street   | London |
| Tom   | Developer  | E3 4QJ   | Sequel Avenue | London |
| Tom   | Musician   | E3 4QJ   | Sequel Avenue | London |

* A Primary Key is a value or group of values that uniquely identifies a row.
* In the above example, the {Name, Occupation} combo is the Primary Key i.e. the Primary Key for the first row is {Elias, Developer}.
* While Street and City are arguably dependent on the Primary Key, ultimately they only depend on the Postcode i.e. their dependence can be 'factored out' to a separate Postcode table.
* This would make the data set compliant with the Third Normal Form:

| Name  | Occupation | Postcode |
|-------|------------|----------|
| Elias | Developer  | SW2 7LA  |
| Elias | Scientist  | SW2 7LA  |
| Tom   | Developer  | E3 4QJ   |
| Tom   | Musician   | E3 4QJ   |

| Postcode | Street        | City   |
|----------|---------------|--------|
| SW2 7LA  | Code Street   | London |
| E3 4QJ   | Sequel Avenue | London |

## More Normal Forms...
You COULD implement EVEN MORE Normal Forms, but these first three should be enough to ensure the INTEGRITY of your data.

## References
[Normalisation Rules: Normal Forms](http://www.studytonight.com/dbms/database-normalization.php)

[Wikipedia on Database Normalisation](https://en.wikipedia.org/wiki/Database_normalization)

[What is Normalisation in SQL?](http://www.sqlservercentral.com/blogs/abhijit_desai/2010/09/07/noramlization/)

[Candidate Key](https://en.wikipedia.org/wiki/Candidate_key)
