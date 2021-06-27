class ProgramRepository {
    constructor(connectionPool) {
      this.connectionPool = connectionPool;
    }
  
    get pool() {
      return this.connectionPool.getPool();
    }
  
    save(program, callback) {
      this.pool
        .query("insert into program set ?", program, callback);
    }
  
    get(id,callback) {
      this.pool
      .query('select * from program where id = ?', id, callback);
    }
  
    getAll(callback) {
      this.pool
      .query("select * from program",callback);
    }
  
    update(id, program, callback) {
      this.pool
        .query("update program set ? where id = ?", [program,id], callback);
    }
  
    delete(id,callback) {
      this.pool
      .query('delete from program where id = ?', id, callback);
    }
  }
  
  module.exports = ProgramRepository;
  