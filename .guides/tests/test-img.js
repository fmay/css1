var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('../../05-img/index.html'));
if($("img").attr("src") == 'not-cute.jpg') {
  console.log("Sorry, but looks like you haven't got the right image.");  
  process.exit(1); 
}
else {
  console.log("Well done!!");
}
