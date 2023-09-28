const monthsET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const dateETformatted = function(){
	let timeNow = new Date();
	return timeNow.getDate() + ". " + monthsET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeETformatted = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const timeOfDayET = function(){
	let partOfDay = "suvaline hetk";
	let hourNow = new Date().getHours();
	if(hourNow >= 6 && hourNow < 12){
		partOfDay = "hommik";
	}
	if(hourNow > 14 && hourNow < 18){
		partOfDay = "paev";
	}
	if(hourNow >= 18){
		partOfDay = "ohtu";
	}
	return partOfDay;
}

//ekspordin koik asjad
module.exports = {dateETformatted: dateETformatted, timeETformatted: timeETformatted, monthsET: monthsET, timeOfDayET: timeOfDayET};