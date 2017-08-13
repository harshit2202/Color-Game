var colorss = generatecolors(6);
var numsq = 6;
var seq = document.querySelectorAll(".square");
var display = document.querySelector(".head-display");
var picked = pickcolor();
var messageD = document.querySelector("#message");
var header = document.querySelector(".header");
var reset = document.querySelector("#resett");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
display.textContent = picked;

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colorss = generatecolors(3);
	picked = pickcolor();
	display.textContent = picked;
	for(var i=3;i<seq.length;i++)
		seq[i].style.display = "none";
	for(var i=0;i<3;i++)
		seq[i].style.backgroundColor = colorss[i];
	numsq=3;
	messageD.textContent = "";
	reset.textContent = "NEW COLORS";
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colorss = generatecolors(6);
	picked = pickcolor();
	display.textContent = picked;
	for(var i=0;i<6;i++)
		{seq[i].style.display = "block";
		seq[i].style.backgroundColor = colorss[i];}
	numsq=6;
	messageD.textContent = "";
	reset.textContent = "NEW COLORS";
});


reset.addEventListener("click",function(){
	reset.textContent = "NEW COLORS";
	colorss = generatecolors(numsq);
	picked = pickcolor();
	display.textContent = picked;
	messageD.textContent = "";
	for(var i=0;i<numsq;i++){
	seq[i].style.background = colorss[i];
	} 
	header.style.backgroundColor = "rgb(33,97,167)";
});

for(var i=0;i<seq.length;i++){

	seq[i].style.background = colorss[i];

	seq[i].addEventListener("click",function(){
		var clicked = this.style.backgroundColor;
		if(clicked==picked)
		{
			messageD.textContent = "Correct";
			changecolors(picked);
			header.style.backgroundColor = picked;
			reset.textContent = "PLAY AGAIN!";
		}
		else if(clicked!=picked)
		{  
			this.style.backgroundColor = "#232323";
			messageD.textContent = "Try Again!";
		}
	});
}

function changecolors(color){
	for(var i=0;i<seq.length;i++)
	{
		seq[i].style.backgroundColor = color;
	}
}

function pickcolor()
{
	var r = Math.floor(Math.random() * colorss.length);
	return colorss[r];
}
function generatecolors(x)
{
	var arr = [];
	for(var i=0;i<x;i++)
	{
		var a= Math.floor(Math.random() * 256);
		var b= Math.floor(Math.random() * 256);
		var c= Math.floor(Math.random() * 256);
		arr.push("rgb(" + a + ", " + b + ", " + c + ")");
	}
	return arr;
}