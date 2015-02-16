function setColor(){
	var date = new Date();
	
	var day = date.getDate();
	var month = date.getMonth()+1;
	var year = date.getYear()-100;
	
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	var colorVarOne = day+hour;
	var colorVarTwo = month+minute;
	var colorVarThree = year+second;
	
	if (colorVarTwo<10) {
		colorVarTwo = "0"+colorVarTwo;
	};
	
	var firstColor = "#"+colorVarOne+""+colorVarTwo+""+colorVarThree;
	
	var complementFirstColor = $c.complement(firstColor);
	

	$("#firstLine").css({"backgroundColor":firstColor});
	
	$("#secondLine").css({"backgroundColor":complementFirstColor});
	
	//Anzeige der Zeit
	var time = date.toLocaleTimeString();
	var dateStamp = day+"/"+month+"/20"+year;
	//document.getElementsByClassNames("time").innerHTML = time;
	$(".timeStamp").remove();
	$(".timeDate").append("<div class='timeStamp'>"+time+"<div>");
	$(".timeStamp").append("<div class='date'>"+dateStamp+"<div><div>"+firstColor+"</div>");
	
	$(".timeDateComplementary").append("<div class='timeStamp'>Complementary Color<div><div>"+complementFirstColor+"</div>");
}