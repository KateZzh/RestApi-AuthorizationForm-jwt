const pool = require("../db");

async function getAllUsersDB() {
  const client = await pool.connect();

  const sql = "select * from users";
  const { rows } = await client.query(sql);

  client.release();

  return rows;
}

async function getUserByIdDB(id) {
  const client = await pool.connect();

  const sql = "select * from users where id = $1";
  const { rows } = await client.query(sql, [id]);

  client.release();

  return rows;
}

async function createUserDB(name, surname, email, password) {
  const client = await pool.connect();

  const sql =
    "insert into users (name, surname, email, password) values ($1, $2, $3, $4) returning *";
  const { rows } = await client.query(sql, [name, surname, email, password]);

  client.release();

  return rows;
}

async function getByEmailDB(email) {
  const client = await pool.connect();

  const sql = "select * from users where email = $1";
  const { rows } = await client.query(sql, [email]);

  client.release();

  return rows;
}

async function deleteUserDB(id) {
  const client = await pool.connect();

  const sql = "delete from users where id = $1 returning *";
  const { rows } = await client.query(sql, [id]);

  client.release();

  return rows;
}

async function updateUserDB(id, name, surname, email, password) {
  const client = await pool.connect();

  const sql =
    "update users set name = $1, surname = $2, email = $3, password = $4 where id = $5 returning *";
  const { rows } = await client.query(sql, [name, surname, email, password, id]);

  client.release();

  return rows;
}

module.exports = {
  getAllUsersDB,
  getUserByIdDB,
  createUserDB,
  getByEmailDB,
  deleteUserDB,
  updateUserDB,
};
