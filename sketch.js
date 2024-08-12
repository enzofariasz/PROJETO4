let imagem;
let musica;

function setup() {
  createCanvas(1000, 800);
  palavra = tata();
  musica.loop();
}
function preload(){
  imagem = loadImage("Imagem.jfif");
  musica = loadSound("Música.mp3");
}
function draw() {
  background("black");
  image(imagem,0,0,1000,800);
  farias();
  lindo();
  tata();
}

function farias(){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,200,200);
}

function lindo(){
  fill("white");
  textSize(30);
  textAlign(CENTER,CENTER);
}

function tata(){
  let palavras = ["vô nada", "o tata é foda", "tata é fiado", "uvinha"];
  return random(palavras);
}