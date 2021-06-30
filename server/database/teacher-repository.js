class TeacherRepository {
    constructor(connectionPool) {
      this.connectionPool = connectionPool;
    }
  
    get pool() {
      return this.connectionPool.getPool();
    }
  
    save(user, callback) {
      this.pool
        .query("insert into teacher set ?", user, callback);
    }
  
    get(id,callback) {
      this.pool
      .query('select * from teacher where id = ?', id, callback);
    }
  
    getAll(callback) {
      this.pool
      .query("select * from teacher",callback);
    }
  
    update(id, user, callback) {
      this.pool
        .query("update teacher set ? where id = ?", [user,id], callback);
    }
  
    delete(id,callback) {
      this.pool
      .query('delete from teacher where id = ?', id, callback);
    }
  }
  
  module.exports = TeacherRepository;
  