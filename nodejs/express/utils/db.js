import mysql from 'mysql8';

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'testdb',
});
