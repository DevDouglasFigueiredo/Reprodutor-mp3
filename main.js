let musica = document.querySelector('audio')

document.querySelector('.icon-play').addEventListener('click', tocarMusica);
document.querySelector('.icon-pause').addEventListener('click', pausarMusica);

function tocarMusica(){
    musica.play();
    document.querySelector('.icon-pause').style.display = 'block';
    document.querySelector('.icon-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.icon-pause').style.display = 'none';
    document.querySelector('.icon-play').style.display = 'block';
}