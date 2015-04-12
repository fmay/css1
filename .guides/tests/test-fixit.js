var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('/home/codio/workspace/03-fixit/index.html'));

if( $("h2").text() == "Smaller Heading") {
  console.log("Great job!!!");
}
else {
  console.log("You haven't fixed it by the looks of things.");
  process.exit(1);
}
