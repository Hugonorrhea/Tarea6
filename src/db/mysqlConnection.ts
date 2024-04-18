import mysql from "mysql";
const connection = mysql.createConnection({
	host: "localhost",
	user: "Victor",
	database: "alecrmdpp",
	password:"Locomoto5580",
});

export default connection;