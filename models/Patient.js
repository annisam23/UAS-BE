// import database
const db = require("../config/database")

// membuat class Patient
class Patient {
  // buat fungsi
  static all(){
    return new Promise((resolve,reject)=>{
      const sql = "SELECT * FROM patients";
      db.query(sql, (err,result)=>{
        resolve(result);
      })
    })
  }

  static find(id){
    return new Promise((resolve,reject)=>{
      const sql = `SELECT * FROM patients WHERE id=?`;
      db.query(sql,id,(error,result)=>{
        resolve(result[0]);
      })
    })
  }

  static getByName(name){
    return new Promise((resolve,reject)=>{
      const sql = `SELECT * FROM patients WHERE name= ?`;
      db.query(sql,name,(error,result)=>{
        resolve(result);
      })
    })
  }

  static create(data){
    return new Promise((resolve,reject)=>{
      const sql = `INSERT INTO patients SET ?`;
      db.query(sql,data,(err,result)=>{
        if(err){
          reject(err);
        }else{
          resolve(this.find(result.insertId));
        }
      })
    })
  }

  static async update(id,data){
    await new Promise((resolve,reject)=>{
      const sql = `UPDATE patients SET? where id=?`
      db.query(sql,[data,id],(err,result)=>{
        resolve(result);
      })
    })

    const patient = await this.find(id);
    return patient;
  }

  static delete(id){
    return new Promise((resolve,reject)=>{
      const sql = `DELETE FROM patients WHERE id= ?`;
      db.query(sql,id,(err,result)=>{
        resolve(result);
      })
    })
  }
  
  static getPositive(positive){
    return new Promise((resolve,reject)=>{
      const sql = `SELECT * FROM patients WHERE status= "positive"`;
      db.query(sql,(error,result)=>{
        resolve(result);
      })
    })
  }

  static getRecovered(recovered){
    return new Promise((resolve,reject)=>{
      const sql = `SELECT * FROM patients WHERE status= "recovered"`;
      db.query(sql,(error,result)=>{
        resolve(result);
      })
    })
  }

  static getDead(dead){
    return new Promise((resolve,reject)=>{
      const sql = `SELECT * FROM patients WHERE status= "dead"`;
      db.query(sql,(error,result)=>{
        resolve(result);
      })
    })
  }

  
}

// export class Patient
module.exports = Patient;
