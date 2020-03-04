	var audio = new Audio('sound/wldpkmn.mp3');

function trans(){
	/*audio.play*/
	setTimeout(trans1,-1000);
    setTimeout(trans2,4000);
}

function trans1() {
	  document.getElementById("a").style.display = "none";
	  document.getElementById("b").style.display = "none";	
	  document.getElementById("c").style.display = "none";
	  document.getElementById("d").style.display = "none";
	  document.getElementById("break").style.display = "none";
	  document.getElementById("txt").style.display = "none";
}

function trans2() {	
    document.getElementById("anidiv").style.display = "none";
    document.body.style.backgroundColor = 'black';
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("c").style.display = "block";	
    document.getElementById("d").style.display = "block";
    document.getElementById("break").style.display = "block";
    document.getElementById("txt").style.display = "block";
}

function none () 
{
	alert('You Have No Items')
}