const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>XJTU SE</h1><img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=468864cdf0039245b5b8e95de6fdcfa7/54fbb2fb43166d22ca0c87944a2309f79052d2b3.jpg">')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
