var bl = require('bl');
var http = require('http');

var results = [];
var count = 0

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++
      if (count == 3)
        results.forEach(it => console.log(it));
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)