var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('../../05-img/index.html'));
if($("img").attr("src") == 'not-cute.jpg')
  console.log(1)
else
  console.log(0)

