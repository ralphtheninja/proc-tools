var fs = require('fs')

function status(pid, cb) {
  if (typeof pid === 'function') {
    cb = pid
    pid = 'self'
  }

  fs.readFile('/proc/' + pid + '/status', function (err, buf) {
    if (err) return cb(err)

    var data = {}
    buf.toString().split('\n').forEach(function (row) {
      var regex = /^(\w+):\s+(.*)/gi
      var match = regex.exec(row)
      if (match) {
        var key = match[1]
        var value = match[2]
        if (value.indexOf('\t') >= 0) {
          value = value.split('\t')
        }
        data[key.toLowerCase()] = value
      }
    })

    cb(null, data)
  })
}

module.exports = status

if (!module.parent) {
  status(process.pid, function (err, data) {
    console.log(JSON.stringify(data, null, 2))
  })
}
