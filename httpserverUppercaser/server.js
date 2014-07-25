var http = require('http');
var through = require('through')

var server = http.createServer(function (req,res) {
  req.pipe(through(function (data){
    this.queue(data.toString().toUpperCase())
  })).pipe(res)
})

server.listen(process.argv[2])
