var express=require('express');
var session=require('cookie-session');
var bodyParser = require('body-parser');
var leboncoin = require('leboncoinScrapper');
var meilleursagents = require('meilleursagentsScrapper');
var urlencodedParser = bodyParser.urlencoded({extended:true});
var app = express();

app.use(session({secret:'scraper'}),express.static(__dirname + '/views'))

//routes

.get('/',leboncoin.initScrap)

.post('/scrapLBC',urlencodedParser,leboncoin.postAndScrap)

.get('/scrapMA',meilleursagents.scrapMA)


//end routes
.listen(8881);
