let exe = true;
let i = 0;
let a = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
//tamaño circulo del nodo inicial
  c_nodo0 = new CNodo( windowWidth/15, windowHeight/2);
  nodo0 = new Node(0);
  execute();
}

function draw() {
  background(69);
  c_nodo0.dr();
  fig(i) ;
}

function fig(i){
  for (let p = 0; p < i+1; p++){
    for (let j = 1; j < 6; j++){
      eval('c_nodo'+(j+(5*p))+'.dr()');
    }
  }
}

class Node{
  constructor(val) {
    this.val = val;
  }
	multi(i){
		this.n1 = new Node(1+(5*i));
		this.n2 = new Node(2+(5*i));
		this.n3 = new Node(3+(5*i));
		this.n4 = new Node(4+(5*i));
		this.n5 = new Node(5+(5*i));
  }
}

class CNodo{
  constructor(posx, posy) {
    this.posX = posx;
    this.posY = posy;
  }
  dr(){
//tamaño circulo de cada nodo
    circle(this.posX, this.posY, windowHeight/7);
  }
}

function multiD(i){
  a += 1
  //posiciones de los nodos, divide pantalla en 13 verticalmente y en 6 horizontalmente
  eval('c_nodo'+(1+(5*i))+' = new CNodo('+a+'*windowWidth/'+(13)+',windowHeight/'+6+')');
  eval('c_nodo'+(2+(5*i))+' = new CNodo('+a+'*windowWidth/'+(13)+',2*windowHeight/'+6+')');
  eval('c_nodo'+(3+(5*i))+' = new CNodo('+a+'*windowWidth/'+(13)+',3*windowHeight/'+6+')');
  eval('c_nodo'+(4+(5*i))+' = new CNodo('+a+'*windowWidth/'+(13)+',4*windowHeight/'+6+')');
  eval('c_nodo'+(5+(5*i))+' = new CNodo('+a+'*windowWidth/'+(13)+',5*windowHeight/'+6+')'); 
}

function execute(){
    eval('nodo'+i+'.multi('+i+')');
    multiD(i);
}


function keyPressed(){
  if (keyCode == 49){
    console.log('1');
    eval('nodo'+(i+1)+'= nodo'+i+'.n'+1);
    i += 1;
    execute();
  }
  if (keyCode == 50){
    console.log('2');
    eval('nodo'+(i+1)+'= nodo'+i+'.n'+2);
    i += 1;
    execute();
  }
  if (keyCode == 51){
    console.log('3');
    eval('nodo'+(i+1)+'= nodo'+i+'.n'+3)
    i += 1;
    execute();
  }
  if (keyCode == 52){
    console.log('4');
    eval('nodo'+(i+1)+'= nodo'+i+'.n'+4)
    i += 1;
    execute()
  }
  if (keyCode == 53){
    console.log('5');
    eval('nodo'+(i+1)+'= nodo'+i+'.n'+5);
    i += 1;
    execute();
  }
  if (keyCode == 88){
    exe = false;
    console.log('E');
  }
}

