var music = document.querySelector('audio');
var tempoDecorrido = document.querySelector('.inicio');
var barra = document.querySelector('progress');

document.querySelector('.icon-play').addEventListener('click', playMusic);
document.querySelector('.icon-pause').addEventListener('click', pauseMusic);
music.addEventListener('timeupdate', movimentaBarra)


function playMusic(){
    music.play();
    document.querySelector('.icon-play').style.display = 'none';
    document.querySelector('.icon-pause').style.display = 'block';
}

function pauseMusic(){
    music.pause();
    document.querySelector('.icon-play').style.display = 'block';
    document.querySelector('.icon-pause').style.display = 'none';
}

function movimentaBarra(){
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%' ;
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}

function segundosParaMinutos (segundos){
    var campoMinutos = Math.floor(segundos / 60) ;
    var campoSegundos = segundos % 60;
    if( campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ":" + campoSegundos

}