var music = document.querySelector('audio');
var barra = document.querySelector('progress');
var tempoDecorrido = document.querySelector('.inicio');


document.querySelector('.icon-play').addEventListener('click' , playMusic);
document.querySelector('.icon-pause').addEventListener('click' , pauseMusic);
music.addEventListener('timeupdate', movimentaBarra);

function playMusic(){
    music.play();
    document.querySelector('.icon-play').style.display = 'none';
    document.querySelector('.icon-pause').style.display = 'block';
}

function pauseMusic(){                                                      // 10 min do video
    music.pause();
    document.querySelector('.icon-play').style.display = 'block';
    document.querySelector('.icon-pause').style.display = 'none';
}

function movimentaBarra(){                                                  // 19:30 do video
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}

function segundosParaMinutos(segundos){                                     // 28:00 do video
    var campoMinutos = Math.floor(segundos / 60);
    var campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos
    }
    return campoMinutos + ":" + campoSegundos;
    

}

