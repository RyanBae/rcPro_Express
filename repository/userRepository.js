// var userRepository = 
const db = require('../database')();

const con = db.init();
db.db_open(con);


const findByUser = function(){
    console.log("[Query] == findByUser ");
    let res;
    con.query('select * from n_test', function(error, result, fields){
        if(error){
          console.log(error);
          res = error;
        }
        console.log(result)
        res = result;
      });
      console.log(res)
      return res;
}

function findByUser2(){
    let res;
    con.query('select * from user', function(error, result, fields){
        if(error){
          console.log(error);
          res = error;
        }
        console.log(result)
        res = result;
      });
      return res;
}


module.exports ={
    findByUser,findByUser2
}
