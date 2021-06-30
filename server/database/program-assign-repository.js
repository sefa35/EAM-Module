class ProgramRepository {
    constructor(connectionPool) {
      this.connectionPool = connectionPool;
    }
  
    get pool() {
      return this.connectionPool.getPool();
    }
  
    save(program, callback) {
      this.pool
        .query("insert into studentsAssigned set ?", program, callback);
    }
  
    get(userid,id,callback) {
      this.pool
      .query('select * from studentsAssigned where programid = ? and userid = ?', [id,userid], callback);
    }
  
    getAll(callback) {
      this.pool
      .query("select * from studentsAssigned",callback);
    }
  
    update(id, program, callback) {
      this.pool
        .query("update studentsAssigned set ? where id = ?", [program,id], callback);
    }
  
    delete(userid,id,callback) {
      this.pool
      .query('delete from studentsAssigned where userid = ? and programid = ?', [userid,id], callback);
    }
  }
  
  module.exports = ProgramRepository;
  