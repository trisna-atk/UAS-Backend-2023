// import database
const { resolve } = require("path");
const db = require("../config/database");

// make Student model
class Patient {
    static all() {
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
          const sql = "SELECT * from patients";
          db.query(sql, (err, results) => {
            resolve(results);
          });
        });
    }

    static async create(data, callback) {
        // Promise 1: melakukan insert data ke database
        const id = await new Promise((resolve, reject) => {
          const sql = "INSERT INTO patients SET ?";
          db.query(sql, data, (err, results) => {
            resolve(results.insertId);
          });
        });

        const patient = this.find(id);
        return patient;
    }

    static async update(id, data) {
        const sql = "UPDATE patients SET ? WHERE id = ?";
        await db.query(sql, [data, id]);
      
        // mengembalikan data yang baru diupdate
        const patient = await this.find(id);
        return patient;
      }

      static delete(id) {
        return new Promise ((resolve, reject) => {
          const sql = "DELETE FROM patients WHERE id = ?";
          db.query(sql, id, (err, results) => {
            resolve(results);
          });
        });
      }
      
      
      static find(id) {
        const sql = "SELECT * FROM patients WHERE id = ?";
      
        return new Promise((resolve, reject) => {
          db.query(sql, id, (err, results) => {
            if (err) {
              console.error(err);
              reject(new Error('Gagal mencari data pasien'));
            } else {
              const [patient] = results;
              resolve(patient);
            }
          });
        });
      }
      
      static async getByName(name) {
        return new Promise((resolve, reject) => {
          const query = 'SELECT * FROM patients WHERE name LIKE ?';
          const params = [%${name}$%];
      
          db.query(query, params, (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });
      }
      
      // Metode untuk mendapatkan pasien positif
      static async getPositiveResources() {
        return new Promise((resolve, reject) => {
          db.query('SELECT * FROM patients WHERE status = "positive"', (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });
      }
      
        // Metode untuk mendapatkan pasien recovered
        static async getRecoveredResources() {
             return new Promise((resolve, reject) => {
                db.query('SELECT * FROM patients WHERE status = "recovered"', (error, results) => {
                    if (error) {
                     reject(error);
                    } else {
                    resolve(results);
                }
            });
        });
    }
  
        // Metode untuk mendapatkan pasien dead
        static async getDeadResources() {
            return new Promise((resolve, reject) => {
                 db.query('SELECT * FROM patients WHERE status = "dead"', (error, results) => {
                    if (error) {
                     reject(error);
                    } else {
                    resolve(results);
                 }
            });
         });
    }   
}

// export model
module.exports = Patient;