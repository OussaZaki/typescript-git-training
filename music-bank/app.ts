let player;
let videos:string[] = ["RBumgq5yVrA", "hT_nvWreIhg", "JGwWNGJdvx8", "papuvlVeZg8", "09R8_2nJtjg", "3AtDnEC4zak"];

window.onload = function () {
    let link = document.getElementsByClassName('link')[1].onclick = function () {
        GetVideo(player,videos);
    };
};

function GetVideo(player,videos:string[]){
    //Create a random index
	let video = Math.floor(Math.random() * 5);

    //Changing messgae and class name for play button
	document.getElementsByClassName('link')[1].className += ' played';
    document.getElementById('link-text').innerHTML = "<a href='javascript:void(0)'>Change the current Music</a>";

    //Displaying the name of current music
	document.getElementById('message').innerHTML = "<p>Now playing : <span id='title'>" + GetVideoName(videos[video]) + "</span></p>";
    
    //Play Video
    player.loadVideoById({ 'videoId': videos[video], 'suggestedQuality': 'small' });
    
    //Wait for video end
	player.addEventListener("onStateChange", function(state){
		if(state === 0){
			GetVideo(player,videos);
		}
	});
}
function GetVideoName(videoId:string) {
	let url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key=AIzaSyCtYQA6bU3_7dA9Dhc61sGBDH5Lf0Squ6Q&part=snippet,statistics,contentDetails";
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);
	let data = xmlHttp.responseText;
	let obj = JSON.parse(data);
	return obj.items[0].snippet.localized.title;
}
function onYouTubeIframeAPIReady() {
	player = new YT.Player('video', {
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
