import connection from './mysqlConnection';
import { User } from './usuarios.interface';

export class UserService {
    static async getUserById(userId: string): Promise<User | undefined> {
        return new Promise<User>((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id_user = ?';
            connection.query(query, [userId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
            
        });
    }

    static async getUsers(): Promise<User | undefined> {
        return new Promise<User>((resolve, reject) => {
            const query = 'SELECT * FROM users';
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    
    static async createUser(userData: Omit<User, 'id_user'>): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const query = 'INSERT INTO usuarios SET ?';
            connection.query(query, userData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ id_user: insertedId, ...userData });
                }
            });
        });
    }
}