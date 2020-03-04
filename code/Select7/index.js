	var audio = new Audio('sound/hack.m4a');

function trans(){
    audio.play();
}

var i = 1

function alt(){ 
	if (i = 1){
	setTimeout(alt2,2000);
	i -- 1;
	setTimeout(alt,2000);
}

else if (i = 0){
	setTimeout(alt1,2000);
	i ++ 1;
	setTimeout(alt,2000);
}


function alt1() {
	document.getElementById('neko').style.backgroundImage = "url('images/Neko.png')"
	document.getElementById('neko').innerHTML = "NEKO#ΦωΦ"
}

function alt2() {
	document.getElementById('neko').style.backgroundImage = "url('images/Neko1.png')"
	document.getElementById('neko').innerHTML = "Neko"
}
}