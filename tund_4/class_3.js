const firstName = "Maksim";
const lastName = "Arfanov";
const fs = require("fs");
const datetimeValue = require("./date_time");
let folkWisdom = "";

fs.readFile("txtfiles/vanasonad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		folkWisdom = data;
		onScreen(data);
	}
});//readFile lopeb

const onScreen = function(){
	console.log("Programmi autor on: " + firstName + " " + lastName);
	console.log("Tana on " + datetimeValue.dateETformatted());
	//console.log(folkWisdom);
	let folkWisdoms = folkWisdom.split(";");
	//console.log("Tänane tarkus: " + folkWisdoms[Math.floor(Math.random() * folkWisdoms.length)]);
	//console.log(folkWisdoms);
	//koige tavalisem for tsukkel (loop)
	for (let i = 0; i < folkWisdoms.length; i ++) {
	console.log("Vanasona nr " + (i + 1) + ': "' + folkWisdoms[i] + '"');
	}
	console.log("Kell on " + datetimeValue.timeETformatted());
	console.log("Praegu on " + datetimeValue.timeOfDayET() + ".");
	//console.log(datetimeValue.monthsET);
}