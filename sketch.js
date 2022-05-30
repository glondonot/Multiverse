let exe = true;
let i = 0;
let a = 1;
let n = 3;
let c = 256;
ex = true;
imagenes = [];

function preload() {
	fondo = loadImage("assets/2.jpg")
   for( let g = 0; g <= 40; g++){
	eval('img'+g+' = loadImage("assets/'+(10+g)+'.jpg")')
	eval('append(imagenes, img'+g+')')
   }
}

function setup() {
  createCanvas(windowWidth*1.5, windowHeight);
  c_nodo0 = new CNodo( windowWidth/15, windowHeight/2, n , 0 , c , ex , picture());
  nodo0 = new Node(0);
  execute(n);
}

function draw() {
  background(fondo);
  strokeWeight(6);
  fig(i) ;
  c_nodo0.dr();
  if(i==7){
    exe = false
  }
}

function fig(i){
  for (let p = 0; p < i+1; p++){
    for (let j = 1; j < 6; j++){
      eval('c_nodo'+(j+(5*p))+'.ln()');
    }
  }
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
  constructor(posx, posy, n, p, c, ex, im) {
    this.posX = posx;
    this.posY = posy;
    this.n = n;
    this.p = p;
    this.c = c;
    this.ex = ex;
    this.imag = imagenes[im];
  }
  dr(){
    	image(this.imag, this.posX-((windowHeight/7)/2), this.posY-((windowHeight/7)/2), windowHeight/5, windowWidth/11)
  }
  ln(){
        stroke(this.c)
        line(this.p*windowWidth/8-windowWidth/20, this.n*windowHeight/5-windowWidth/20, this.posX, this.posY)
  }

}

function picture(){
    im = random(imagenes.length)
    console.log(int(im))
    return int(im)
}

function multiC(i,n){
   a += 1
   for(let h = 1; h <= 5; h++){
	f = picture()
	eval('c_nodo'+(h+(5*i))+' = new CNodo('+a+'*windowWidth/8-windowWidth/20'+',h*windowHeight/'+5+'-windowWidth/20,'+n+','+(a-1)+','+c+',ex,'+f+')');
	imagenes.splice(f, 1)
   }
}

function execute(n){
    eval('nodo'+i+'.multi('+i+')');
    multiC(i,n);
}


function keyPressed(){
  if (keyCode == 49){
	eval('c_nodo'+(1+(5*i))+'.c = "yellow"');
    if (exe == true){
	eval('nodo'+(i+1)+'= nodo'+i+'.n'+1);
    	i += 1;
	n = 1;
    	execute(n);
    }
  }

  if (keyCode == 50){
	eval('c_nodo'+(2+(5*i))+'.c = "yellow"');
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+2);
    	i += 1;
	n = 2;
    	execute(n);
    }
  }

  if (keyCode == 51){
	eval('c_nodo'+(3+(5*i))+'.c = "yellow"');
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+3)
    	i += 1;
    	n = 3;
    	execute(n);
    }
  }

  if (keyCode == 52){
	eval('c_nodo'+(4+(5*i))+'.c = "yellow"');
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+4)
    	i += 1;
    	n = 4;
    	execute(n);
    }
  }

  if (keyCode == 53){
	eval('c_nodo'+(5+(5*i))+'.c = "yellow"');
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+5);
    	i += 1;
    	n = 5;
    	execute(n);
    }
  }

  if (keyCode == 88){
    exe = false;
    console.log('X');
  }

  if (keyCode == 65){
    console.log('E');
    if (exe == false){
    }
  }

  if (keyCode == 69){
    console.log('A');
    if (exe == false){
    }
  }
}