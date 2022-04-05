//Array

var musicas = [
    {titulo:'Techno', artista:'Eletro Hits', src:'assets/music/music-1.mp3', img:'assets/img/unsplash.jpg'},
    {titulo:'Techno Dance', artista:'Eletro Dance', src:'assets/music/music-2.mp3', img:'assets/img/unsplash-2.jpg'},
    {titulo:'Technology', artista:'Eletro Technology', src:'assets/music/music-3.mp3', img:'assets/img/unsplash-3.jpg'}
];

var musica = document.querySelector('audio');
var indexMusica = 0;

var duracaoMusica = document.querySelector('.fim');
var imagem = document.querySelector('img');
var nomeMusica = document.querySelector('.descricao h2');
var nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos de clique
document.querySelector('.icon-play').addEventListener('click', tocarMusica);

document.querySelector('.icon-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções                   // index é o nome que se dá para a posição do elemento dentro do array,
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

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

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    var campoMinutos = Math.floor(segundos / 60);
    var campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
