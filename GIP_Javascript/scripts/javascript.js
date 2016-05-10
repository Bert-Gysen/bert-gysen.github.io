$(document).ready(function(){
	var materialen = [];
	var tweeMaterialen = false;
	
	var zwavelzuurClicked = false;
	var chloorClicked = false;
	var suikerClicked = false;
	var ammoniakClicked = false;
	
	//functie voor de animation en checken wat er in de ketel zit
	function checkKetel(materiaal) { 
		if(tweeMaterialen==false){
			$("#gooiItem").remove();
			$("body").append('<img id="gooiItem" src="images/Trans' + materiaal +'.png">');
								
			var pos = $("#ketelDiv").offset();
			 
			$("#gooiItem").animate({
			"z-index": "2",
			top: pos.top
			});
			$("#gooiItem").fadeOut();
				
			materialen.push(materiaal);
			
			if (materialen.length==2)
			{
				zwavelzuurClicked = true;
				chloorClicked = true;
				suikerClicked = true;
				ammoniakClicked = true;
				
				setTimeout(function(){
					$('#ketelDiv').effect('shake', 800);
					 //alle combinaties die geen reactie geven
					setTimeout(function(){
						if(materialen[0] == "Ammoniak" && materialen[1] == "Suiker" || materialen[0] == "Suiker" && materialen[1] == "Ammoniak") 
						{$("body").append('<img id="geenReactieImg" src="images/geenReactie.png">');}
					
						if(materialen[0] == "Suiker" && materialen[1] == "Chloor" || materialen[0] == "Chloor" && materialen[1] == "Suiker") 
						{$("body").append('<img id="geenReactieImg" src="images/geenReactie.png">');}
					
						if(materialen[0] == "Ammoniak" && materialen[1] == "Zwavelzuur" || materialen[0] == "Zwavelzuur" && materialen[1] == "Ammoniak") 
						{$("body").append('<img id="geenReactieImg" src="images/geenReactie.png">');}
					
					
						//combinaties die wel een reactie geven
						if(materialen[0] == "Zwavelzuur" && materialen[1] == "Chloor" || materialen[0] == "Chloor" && materialen[1] == "Zwavelzuur") 
						{$("body").append('<iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/SdYsnTgrWlA" frameborder="0" allowfullscreen></iframe>');}
						
						if(materialen[0] == "Ammoniak" && materialen[1] == "Chloor" || materialen[0] == "Chloor" && materialen[1] == "Ammoniak") 
						{{$("body").append('<iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/eeIdYqR5ruI" frameborder="0" allowfullscreen></iframe>');}}
					
						if(materialen[0] == "Suiker" && materialen[1] == "Zwavelzuur" || materialen[0] == "Zwavelzuur" && materialen[1] == "Suiker") 
						{$("body").append('<iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/xK4z_YhtTBM" frameborder="0" allowfullscreen></iframe>');}
							
						tweeMaterialen = true;
					}, 1500);
				}, 1500);
			}
		}		
	}

	//zwavelzuur animation
	$("#Zwavelzuur").click(function () {
		if(zwavelzuurClicked==false){
			checkKetel("Zwavelzuur");
			zwavelzuurClicked = true;
		}
	});
	
	//chloor animation
	$("#Chloor").click(function () {
		if(chloorClicked==false){
			checkKetel("Chloor");
			chloorClicked = true;
		}
	});
	
	//suiker animation
	$("#Suiker").click(function () {
		if(suikerClicked==false){
			checkKetel("Suiker");
			suikerClicked = true;
		}
	});
	
	//Ammoniak
	$("#Ammoniak").click(function () {
		if(ammoniakClicked==false){
			checkKetel("Ammoniak");
			ammoniakClicked = true;
		}
	});
	
	//ketel leegmaken
	$("#ketelDiv").click(function() {
		tweeMaterialen = false;
		$("#youtubeVideo").remove();
		$("#geenReactieImg").remove();
		alert("De ketel is leeg!");
		
		materialen = [];
		
		zwavelzuurClicked = false;
		chloorClicked = false;
		suikerClicked = false;
		ammoniakClicked = false;
	});
});