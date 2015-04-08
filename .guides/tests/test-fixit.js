var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('../../03-fixit/index.html'));

if( $("h2").text() == "Smaller Heading") {
  console.log(1);
}
else {
  console.log(0);
}
