let player;
const VIDEOS:string[] = ["RBumgq5yVrA", "hT_nvWreIhg", "JGwWNGJdvx8", "papuvlVeZg8", "09R8_2nJtjg", "3AtDnEC4zak"];


function GetVideo(player,videos: string[]){
    // create a random index
	let videoIndex = Math.floor(Math.random() * 5);

    // changing the message and the class name of play button
	document.getElementsByClassName("link")[1].className += " played";
    document.getElementById("link-text").innerHTML = "<span>Change the current Music</span>";

    //displaying the name of current music
	document.getElementById("message").innerHTML = "<p>Now playing : <span id='title'>" + getVideoName(VIDEOS[videoIndex]) + "</span></p>";
    
    // play the video
    player.loadVideoById({ "videoId": VIDEOS[videoIndex], "suggestedQuality": "small" });
    
    // wait for video end
	player.addEventListener("onStateChange", function(state){
		if(state === 0){
			GetVideo(player,VIDEOS);
		}
	});
}
function getVideoName(videoIndex: string) {
	let url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoIndex + "&key=AIzaSyCtYQA6bU3_7dA9Dhc61sGBDH5Lf0Squ6Q&part=snippet,statistics,contentDetails";
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);
	let data = xmlHttp.responseText;
    let obj = JSON.parse(data);
	return obj.items[0].snippet.localized.title;
}
function onYouTubeIframeAPIReady() {
	player = new YT.Player("video", {
		width: 600,
		height: 400,
		playerlets: {
			color: 'white',
			autoplay: 1,
			controls: 0,
			rel: 0,
			showinfo: 0
		}
	});
}
