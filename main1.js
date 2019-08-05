var http = require('http');
var url = require('url');
var mysql = require('mysql');

var opn = require('opn');
let redir = 0;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url,true).query;
    res.write('<br/>'+ q.entdate + '<br/>' + q.days + '<br/>' + q.country + '<br/>' + q.sta);

    var connection = mysql.createConnection({
    host     : "db-instance1.c7pps0mhymd3.us-east-1.rds.amazonaws.com",
    user     : "jayakrishna",
    password : "Rds#account1",
    port     : "3306",
    database : "eval1"
    });



    var records = [[q.entdate,q.days,q.country,q.sta]];

    if(records[0][0]!=null)
    {
    connection.query("INSERT INTO data1 (da,days,country,state) VALUES ?", [records], function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
    });
    }

    connection.connect(function(err) {
        if (err) {
          console.error('Database connection failed: ' + err.stack);
          return;
        }
        console.log('Connected to database.');
    });


     connection.query('SELECT * from data1 where days>30', function (error, results, fields) {
        if (error) throw error;
        var length=results.length

        for(i=0;i<length;i++)
        {
            console.log('\nThe solution is: ', results[i].days);
            //window.close();
        }


        if(length > 0)
        {
          redir=1;
        }

      
      });

      

      
      connection.query('delete from data1 where days>30;',function (error2,temp,feilds2){
        if (error2) throw error2;
      });
      


      connection.query('select * from data1 where da>(SELECT CONVERT(NOW(), DATETIME));', function (error, results, fields) {
        if (error) throw error;
        var length2=results.length;

        for(i=0;i<length2;i++)
        {
            console.log('\nThe solution is: ', results[i].days);
        }
        if(length2 > 0)
        {
          redir=1;
        }

      });

      if(redir > 0)
      {
        res.write('hello : '+ redir);
      }
      
      res.end();  


      connection.query('delete from data1 where da>(SELECT CONVERT(NOW(), DATETIME));',function (error2,temp,feilds2){
        if (error2) throw error2;
        console.log('deleted'+ temp);
      });

   

    
    connection.end();

    if(redir > 0)
    {
      opn('http://localhost:3000');
    }

}).listen(8081);
