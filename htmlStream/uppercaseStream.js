var through = require('through')
var trumpet = require('trumpet')
var concat = require('concat-stream')
var tr = trumpet()

tr.pipe(process.stdout)

tr.selectAll('.loud',function(string){
  var stream = string.createStream()
  stream.pipe(through(function(buf){
    this.queue(buf.toString().toUpperCase())
  })).pipe(stream)
})

process.stdin.pipe(tr)
