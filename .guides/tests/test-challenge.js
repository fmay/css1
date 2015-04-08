var fs = require('fs')
var cheerio = require('cheerio')

$ = cheerio.load(fs.readFileSync('../../10-final-test/index.html'))

var retStr = '';
var ugly;
var imgCtr = 0;
var fa = {}

fa['h1'] = fa['p'] = fa['img'] = fa['h2'] = 0

$("body").children().each(function( index ) {
  fa[$(this)[0].tagName]++
});

ugly = $("b").text()

$("img").each(function( index ) {
  if ($(this).attr("src") == 'cute.jpg' && imgCtr == 0)
    imgCtr++;
  if ($(this).attr("src") == 'not-cute.jpg' && imgCtr == 1)
    imgCtr++;  
});

if (fa['h1'] >= 1 && fa['p'] >= 3 && fa['h2'] == 1 && ugly.toUpperCase() == 'UGLY' && imgCtr==2) {
  console.log(0, "Well done!")
}
else {
  if (fa['h1'] < 1) retStr += 'Missing <h1> tag.\n'
  if (fa['h2'] == 0) retStr += "Can't find the <h2> tag.\n"  
  if (fa['p'] < 3) retStr += "You haven't created all the <p> tags (should be 3).\n"
  if (imgCtr != 2) retStr += "There should be 2 <img> tags, first 'cute.jpg and then 'not-cute.jpg'.\n"
  if (ugly.toUpperCase() != 'UGLY') retStr += "Can't find 'ugly' in bold.\n"
  console.log(1, retStr);
}

