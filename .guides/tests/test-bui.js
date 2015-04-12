var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('/home/codio/workspace/04-bui/index.html'));

var b = $("b").html()
var u = $("u").html()
var i = $("i").html()
var retStr=""

if (b != 'bold' || u != 'underlined' || i != 'italic') {
  if (b != 'bold') retStr += 'Bold was not bolded. '
  if (u != 'underlined') retStr += 'Underline was not underlined. '
  if (i != 'italic') retStr += 'Italic was not italicized. '
  console.log(retStr);
  process.exit(1);
}
else {
  console.log("Well done!!");  
}

