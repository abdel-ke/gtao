const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('data', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the data SQlite database.');
});

// create table
// var query = 'CREATE TABLE GFG ( ID NUMBER , USER VARCHAR(100 )
db.run('CREATE TABLE IF NOT EXISTS MONEY (id  NUMBER PRIMARY KEY, start NUMBER NOT NULL, end NUMBER NOT NULL)', err => {
    // db.run('CREATE TABLE MONEY(id, start, end)', err => {
        if (err) console.log(err);
        console.log("table created");
    });
// });

const data = [123, 456];

db.run('INSERT INTO MONEY (start, end) VALUES (?, ?)', data, err => {
    if (err) console.log(err);
    console.log("table inserted");
});

// db.all("select name from sqlite_master where type='table'", (err, rows) => {
db.all("select * from money", (err, rows) => {
    if (err) console.log(err);
    console.log(rows);
    rows.map(row => {
        console.log(row);
    })
});

// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
})
