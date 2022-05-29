
let video = document.getElementById("video1")

function retroceder() {
    video.currentTime -= 10;
}

function avanca() {
    video.currentTime += 10;
}

function diminuir() {
    video.playbackRate -= 0.1;
}

function aumentar() {
    video.playbackRate += 0.1;
}

function play() {
    video.play()
}

function parar() {
    video.pause();
    video.currentTime = 0; 
}