var split = require('split')
var through = require('through')

var count = 0
process.stdin
  .pipe(split())
  .pipe(through(function(buf){
    if(count%2==0)
      this.queue(buf.toString().toLowerCase()+'\n')
    else
      this.queue(buf.toString().toUpperCase()+'\n')
    count++
})).pipe(process.stdout)
