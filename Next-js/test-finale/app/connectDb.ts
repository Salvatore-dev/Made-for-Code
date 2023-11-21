import mysql from "mysql2";

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "next_db_recipes",
	password: "",
	port: 3306,
});

export default pool.promise();