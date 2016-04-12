### Exporting & Importing your postgreSQL table data using either pgAdmin or the Terminal

#### *Export*

1. Right-click on your table and pick option Backup..
2. On File Options, set Filepath/Filename and pick PLAIN for Format
3. Ignore Dump Options #1 tab
4. In Dump Options #2 tab, check USE INSERT COMMANDS
5. Hit Backup button

OR, from your terminal:

pg_dump -U USERNAME DBNAME > dbexport.pgsql

IF you receive the following error messages when you try to export a database:

> pg_dump: SQL command failed            
> pg_dump: Error message from server: ERROR:  permission denied for schema topology        
> pg_dump: The command was: LOCK TABLE topology.topology IN ACCESS SHARE MODE         

These errors occur because some server database templates include PostGIS with restricted access permissions. To export a PostgreSQL database without this data.
Type the following command instead of the first command:

```
pg_dump -U USERNAME DBNAME -N topology -T spatial_ref_sys > dbexport.pgsql
```

#### *Import*

*One way to do it:*

1. Create a new database within the server you are using.
2. Right click this database a choose 'Restore'.
3. Use the 'Browser' button to select your '.dmp' file.
4. Select 'Restore' to start restoring the database.

*Another way to do it:*

1. In pgAdmin, select the required target scheme in object tree
2. Click on Plugins/PSQL Console
3. Write ```\i /path/to/yourfile.sql;```
4. Press enter

#### Reference

http://stackoverflow.com/questions/11257132/export-postgresql-table-data-using-pgadmin
http://stackoverflow.com/questions/30555112/how-restore-postgresql-dump-file-using-pgadmin
