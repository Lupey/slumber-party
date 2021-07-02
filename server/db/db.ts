import StormDB from 'stormdb';
import path from 'path';

const engine = new StormDB.localFileEngine(path.join(__dirname, 'db.stormdb'), { async: true });
const db = new StormDB(engine);

db.default({ users: [] });

export default db;
