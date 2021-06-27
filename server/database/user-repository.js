class UserRepository {
    constructor(connectionPool) {
      this.connectionPool = connectionPool;
    }
  
    get pool() {
      return this.connectionPool.getPool();
    }
  
    save(user, callback) {
      this.pool
        .query("insert into user set ?", user, callback);
    }
  
    get(id,callback) {
      this.pool
      .query('select * from user where id = ?', id, callback);
    }
  
    getAll(callback) {
      this.pool
      .query("select * from user",callback);
    }
  
    update(id, user, callback) {
      this.pool
        .query("update user set ? where id = ?", [user,id], callback);
    }
  
    delete(id,callback) {
      this.pool
      .query('delete from user where id = ?', id, callback);
    }
  }
  
  module.exports = UserRepository;
  