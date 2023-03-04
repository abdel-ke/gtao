const sqlite = require("sqlite3").verbose();

const path = '/mnt/c/Users/kemma/Desktop/gtav/charachter/node/src/db'
const db = new sqlite.Database('db/gtao.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE, err => {
    if (err) throw err;
    console.log("Connected to the data SQlite database");
});

db.serialize(() => {
    // create table
    let sql = 'CREATE TABLE IF NOT EXISTS Girl(';
    sql += 'id INTEGER PRIMARY KEY AUTOINCREMENT,';
    sql += 'start INTEGER,';
    sql += 'end INTEGER,';
    sql += 'current INTEGER,';
    sql += 'total INTEGER)';
    db.run(sql, err => {
        if (err) throw err;
        console.log('table created successfuly');
    });
});

const update = (start, end, current, total) => {
    let sql = 'insert into Girl(start, end, current, total) values(12000, 20000, 30000, 40000)'
    db.run(sql, err => {
        if (err) throw err;
        console.log("data updated");
    });
};

const getData = () => {
    let sql = 'select * from Girl';
    db.all(sql, (err, rows) => {
        if (err) throw err;
        rows.forEach(row => {
            console.log(row);
        });
        return rows;
    })
}

const add = (start, end, current, total) => {
    // Add a task to the todo list.
    db.run("INSERT INTO todo Girl (?, ?, ?, ?)", [start, end, current, total], (err) => {
        if (err) throw err;
        console.log("insertion was successfully");
    });
}

// Always close the connection with database
db.close((err) => {
    if (err)
        console.error(err.message);
    console.log('Close the database connection.');
});

module.exports = {
    getData,
    update,
    add
}