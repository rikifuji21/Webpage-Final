	var audio = new Audio('sound/nuke_warning.mp3');
    var audio2 = new Audio('sound/nuke_explosion.mp3');

function SelfDestruct(){
	alert('What Have You Done...')
    audio.play();
    setTimeout(disappear,0);
    setTimeout(Warning,0);
    setTimeout(Warning2,500);
    setTimeout(Warning,1000);
    setTimeout(Warning2,1500);
    setTimeout(Warning,2000);
    setTimeout(Warning2,2500);
    setTimeout(Warning,3000);
    setTimeout(Warning2,3500);
    setTimeout(Warning,4000);
    setTimeout(Warning2,4500);
    setTimeout(Warning,5000);
    setTimeout(Warning2,5500);
    setTimeout(Warning,6000);
    setTimeout(Warning2,6500);
    setTimeout(Warning,7000);
    setTimeout(Warning2,7500);
    setTimeout(Warning,8000);
    setTimeout(Warning2,8500);
    setTimeout(Warning,9000);
    setTimeout(Warning2,9500);
    setTimeout(Warning,10000);
    setTimeout(Warning2,10500);
    setTimeout(Explosion, 11000);
    setTimeout(dialogue,14000);
    setTimeout(endDialogue,14500);

function Warning() {
	document.body.style.backgroundColor = "#ffff00";
	document.body.style.backgroundImage = "url('images/warning.png')";
}

function Warning2() {
	document.body.style.backgroundColor = "#ffff00";
	document.body.style.backgroundImage = "url('images/warning2.png')";
}

function Explosion() {
	audio2.play();
	  document.body.style.backgroundColor = "#f3f3f3";
	  document.body.style.backgroundImage = "url('images/explosion.png')";
	  document.body.style.backgroundRepeat = "no-repeat";
	  document.body.style.backgroundAttachment = "fixed";
	  document.body.style.backgroundPosition = "center center";
	  document.getElementById("SelfDestruct").style.display = "none";
}

function disappear() {
    document.getElementById("header").style.display = "none"; 
    var element = document.getElementById("SelfDestruct");
    element.classList.remove("button"); 
     }

function dialogue() {
		alert('Look at what you have done! Why? What was the Point?');
}
function endDialogue(){
	window.close();
}
}