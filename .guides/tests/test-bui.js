var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('../../04-bui/index.html'));

var b = $("b").html()
var u = $("u").html()
var i = $("i").html()
var retVal=0
var retStr=""

if (b != 'bold' || u != 'underlined' || i != 'italic') {
  retVal = 0;
}
else {
  retVal = 1;
}

if (b != 'bold') retStr += 'Bold was not bolded. '
if (u != 'underlined') retStr += 'Underline was not underlined. '
if (i != 'italic') retStr += 'Italic was not italicized. '

console.log(retVal, retStr)
