function clickimage(clicked_src) {
    document.getElementById('imgslideshow').src = clicked_src;
}

var imgs = ["khan.png", "clid.png", "faker.png", "teddy.png", "mata.png", "kkOma.png"];
var i = 0;
var time=1000;
var play=true;
var settime;
function changeImage() {

    document.getElementById('imgslideshow').src = "Image/"+imgs[i];
    if (i >= 5) {
        i = 0;
    } else {
        i++;
    }
    settime=setTimeout("changeImage()",time);
}

function clickplay() {
	if(play==true)
	{
		document.getElementById('imgbutton').src = "Image/pause.png";
		changeImage();
		play=false;

	}
	else
	{
		document.getElementById('imgbutton').src = "Image/play.png";
		clearTimeout(settime);
		play=true;
	}
  
}