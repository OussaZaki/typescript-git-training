let player;

let videos: string[] = ["RBumgq5yVrA","hT_nvWreIhg","JGwWNGJdvx8","papuvlVeZg8","09R8_2nJtjg","3AtDnEC4zak"];

window.onload = function(){ 

var link=document.getElementsByClassName('link')[1].onclick = function(){
    
    let video:number = Math.floor(Math.random() * 5);

    
    document.getElementsByClassName('link')[1].className += ' played';
    document.getElementById('message').innerHTML = "<p>Now playing : <span id='title'>"+GetName(videos[video])+"</span></p>";
    document.getElementById('link-text').innerHTML = "<a href='javascript:void(0)'>Change the current Music</a>";
    
    player.loadVideoById({'videoId':videos[video],'suggestedQuality':'small'});
    
};

}

function GetName(videoId)
{
    var url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key=AIzaSyCtYQA6bU3_7dA9Dhc61sGBDH5Lf0Squ6Q&part=snippet,statistics,contentDetails";

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url,false); 
    xmlHttp.send( null );
    var data = xmlHttp.responseText;
    var obj=JSON.parse(data);
    return obj.items[0].snippet.localized.title;
}
  
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        width: 600,
        height: 400,
        playerVars: {
            color: 'white',
            autoplay : 1,
            controls:0,
            rel:0,
            showinfo:0
        }
    });
}