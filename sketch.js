 //variáveis da bolinha 
let xbola =200
let ybola =200
let diametro =30
let raio = diametro/2
//varíaveia da velocidade
let velocidadexbola = 6
let velocidadeybola = 6
// varíáveis da raquete 
let xraquete = 5
let yraquete = 200
let lraquete = 15
let hraquete = 120
let xraqueteop =
function setup() {
  createCanvas(450, 300);
}

function draw() {
  background(0);
  criabolinha();
  movimentobolinha()
  colisaoborda()
  minharaquete()
  movimentaraquete()
 colisaoraquete();
}

function criabolinha(){ circle(xbola, ybola, diametro)}
function movimentobolinha(){ xbola += velocidadexbola
  ybola += velocidadeybola}
function colisaoborda(){if ( xbola + raio > width || xbola - raio < 0 )
    velocidadexbola *= -1
  if ( ybola > height || ybola < 0 )
    velocidadeybola *= -1}
function minharaquete(){rect(xraquete,yraquete,lraquete,hraquete)}
function movimentaraquete (){if(keyIsDown(UP_ARROW))
yraquete -=10
  if(keyIsDown(DOWN_ARROW))
yraquete += 10}
function colisaoraquete (){
if(xbola - raio < xraquete + lraquete
   && ybola -raio < yraquete + hraquete 
  && ybola + raio > yraquete )
velocidadexbola *= -1
}
function criaraqueteop (){
  rect (xraqueteop, yraqueteop,lraquete,hraquete)
} 
