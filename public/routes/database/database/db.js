import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const db = await open({
  filename: path.resolve('database', 'bids.db'),
  driver: sqlite3.Database
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS tenders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    deadline TEXT
  );
`);

export default db;
