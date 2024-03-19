import mysql from "mysql";
const connection = mysql.createConnection({
    host: "localhost",
	user: "Hugonorrhea",
    password: "minecraft55",
	database: "alecrmvhsm",
});
export default connection;