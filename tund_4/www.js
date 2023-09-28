const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	if (currentURL.pathname === "/"){
		//console.log(currentURL);
		res.writeHead(200, {"Content-type": "text/html"});
		res.write('<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8"><title>Andrus Rinde, veebiprogrammeerimine 2023</title><script src="first.js" defer></script></head><body>');
		res.write('<img "banner.png" alt="minu bannee">');
		res.write('<h1>Andrus Rinde</h1><p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatia eriala õppetöö raames.</p>');
		res.write('<hr></body></html>');
		//console.log('Keegi vaatab!');
	}
	else if (currentURL.pathname === "/banner.png") {
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				
			}
		});
	}
	//valmis, saada ara
	return res.end();
}).listen(5107);

//rinde 5100
//mina 5107

