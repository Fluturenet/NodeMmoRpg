var db = require("../libs/database")

class User {
    constructor(){
        
    }
    
    findId(id,cb){
        db.c().hgetall("user:"+id,cb)
    }
}

// Functions which will be available to external callers
module.exports = User;
