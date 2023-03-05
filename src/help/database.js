const sqlite = require("sqlite3").verbose();

const path = '/mnt/c/Users/kemma/Desktop/gtav/charachter/node/src/db'
const db = new sqlite.Database('db/gtao.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE, err => {
    if (err) throw err;
    console.log("Connected to the data SQlite database");
});

db.serialize(() => {
    // create table
    // let sql = `CREATE TABLE IF NOT EXISTS Girl(
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     start INTEGER,
    //     end INTEGER,'
    //     current INTEGER,
    //     total INTEGER)`;
    let sql = 'CREATE TABLE IF NOT EXISTS Girl(';
    sql += 'id INTEGER PRIMARY KEY AUTOINCREMENT,';
    sql += 'start INTEGER,';
    sql += 'end INTEGER,';
    sql += 'current INTEGER,';
    sql += 'total INTEGER)';
    db.run(sql, err => {
        if (err) throw err;
        else console.log('table created successfully');
    });
});

const deleteRow = () => {
    const query = 'SELECT * FROM table Girl ORDER BY column DESC LIMIT 1;'

}

const getData = () => {
    let sql = 'select * from Girl';
    return new Promise(resolve => {
        db.all(sql, (err, rows) => {
            if (err) throw err;
            resolve(rows);
        })
    })
}

const getLastOne = () => {
    const query = 'SELECT * FROM Girl ORDER BY id DESC LIMIT 1;'
    return new Promise(resolve => {
        db.get(query, (err, row) => {
            if (err) throw err;
            resolve(row);
        });
    })
}

// getData();
const add = (start, end, current, total) => {
    db.run("INSERT INTO Girl(start, end, current, total) values(?, ?, ?, ?)", [start, end, current, total], (err) => {
        if (err) throw err;
        else console.log("values added successfully");
    });
}

// Always close the connection with database
// db.close((err) => {
//     if (err)
//         console.error(err.message);
//     console.log('Close the database connection.');
// });

module.exports = {
    getData,
    add,
    getLastOne
}