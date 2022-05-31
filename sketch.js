let exe = true;
let i = 0;
let a = 1;
let n = 3;
let c = 169;
let ir = 0;
let puntaje = 0;
ex = true;
vv = true
del = false;
agr = false;
inf = 1;
cred = 0;
punt = 0;
ag = 0;
imagenes = [];
selec = [];
extra = [];

function preload() {
	fondo = loadImage("assets/wall.jpg")
  inf1 = loadImage("assets/inf1.jpg")
  inf2 = loadImage("assets/inf2.jpg")
  credit = loadImage("assets/cred.jpg")
  img61 = loadImage("assets/1.jpg")
  append(extra, img61)
  img62 = loadImage("assets/2.jpg")
  append(extra, img62)
  img63 = loadImage("assets/3.jpg")
  append(extra, img63)
  img64 = loadImage("assets/4.jpg")
  append(extra, img64)
  img65 = loadImage("assets/5.jpg")
  append(extra, img65)
  for( let g = 0; g <= 40; g++){
	  eval('img'+g+' = loadImage("assets/'+(10+g)+'.jpg")')
	  eval('append(imagenes, img'+g+')')
  }
}

function setup() {
  createCanvas(windowWidth*2, windowHeight);
  f = picture()
  c_nodo0 = new CNodo( windowWidth/15, windowHeight/2, n , 0 , c , ex , f);
  append(selec, c_nodo0)
  append(selec, c_nodo0)
  imagenes.splice(f, 1)
  nodo0 = new Node(0);
  execute(n);
}

function draw() {
  background(fondo);
  strokeWeight(6);
  if(ag != 0){
    fog(ag)
  }
  fig(i) ;
  c_nodo0.dr();
  if(i>=7){
    exe = false
    let ip = i 
    if(ip == 8){
      vv = false
    }
  }
  if (del == true){
    let inp = createInput('');
    stroke(0)
    textSize(32);
    fill(256);
    text('Eliminar', 2*windowWidth/3-200, 30);
    inp.position(2*windowWidth/3-70, 10);
    inp.size(100);
    inp.changed(delet);
  }
  if (agr == true){
    let inp2 = createInput('');
    stroke(0)
    textSize(32);
    fill(256);
    text('Agregar', 3*windowWidth/3-90, 30);
    inp2.position(3*windowWidth/3+40, 10);
    inp2.size(100);
    inp2.changed(add);
  }
  if (inf % 2 == 1){
    background(69);
    image(inf1,0,0,windowWidth,windowHeight);
    image(inf2,windowWidth,0,windowWidth,windowHeight);
  }
  if (cred % 2 == 1){
    background(0);
    image(credit,0,0,windowWidth,windowHeight);
  }
  if (punt % 2 == 1){
    background(fondo);
    stroke(0)
    textSize(52);
    fill(256);
    text('Puntaje:', windowWidth/2-100, windowHeight/4 );
    text(puntaje, windowWidth/2+150, windowHeight/4 );
    stroke('yellow')
    line((1)*windowWidth/5-windowWidth/7, 3*windowHeight/5 - windowWidth/20,(selec.length-1)*windowWidth/5-windowWidth/7, 3*windowHeight/5 - windowWidth/20)
    for(let d in selec){
      image(selec[d].imag, (d)*windowWidth/5-windowWidth/7-((windowHeight/7)/2), 3*windowHeight/5 - windowWidth/20-((windowHeight/7)/2), windowHeight/4, windowWidth/11)
    }
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

function fog(h){
  for (let j = 1; j < h+1; j++){
    eval('c_nodo'+(j+(5*ir))+'.ln()');
  }
  for (let j = 1; j < h+1; j++){
	  eval('c_nodo'+(j+(5*ir))+'.dr()');
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
    this.ex = true;
    this.punt = im;
    this.imag = imagenes[im];
  }
  dr(){
    if(this.ex == true){
    	image(this.imag, this.posX-((windowHeight/7)/2), this.posY-((windowHeight/7)/2), windowHeight/4, windowWidth/11)
    }
  }
  ln(){
    if(this.ex == true){
      stroke(this.c)
      line(this.p*windowWidth/5-windowWidth/7, this.n*windowHeight/5-windowWidth/20, this.posX, this.posY)
    }
  }
}

class CNod{
  constructor(posx, posy, n, p, c, ex, im) {
    this.posX = posx;
    this.posY = posy;
    this.n = n;
    this.p = p;
    this.c = c;
    this.ex = true;
    this.punt = im;
    this.imag = extra[im];
  }
  dr(){
    if(this.ex == true){
    	image(this.imag, this.posX-((windowHeight/7)/2), this.posY-((windowHeight/7)/2), windowHeight/4, windowWidth/11)
    }
  }
  ln(){
    if(this.ex == true){
      stroke(this.c)
      line(this.p*windowWidth/5-windowWidth/7, this.n*windowHeight/5-windowWidth/20, this.posX, this.posY)
    }
  }
}

function picture(){
    im = random(imagenes.length)
    return int(im)
}

function multiC(i,n){
  a += 1
  for(let h = 1; h <= 5; h++){
	  f = picture()
	  eval('c_nodo'+(h+(5*i))+' = new CNodo('+a+'*windowWidth/5-windowWidth/7, h*windowHeight/5 - windowWidth/20,'+n+','+(a-1)+','+c+',ex,'+f+')');
	  imagenes.splice(f, 1)
  }
}

function execute(n){
  eval('nodo'+i+'.multi('+i+')');
  multiC(i,n);
}

function eliminar(k){
  eval('a = c_nodo'+k)
  for(let p in selec){
    if(selec[p] == a){
      console.log('no se puede eliminar')
      return
    }
  }
  eval('c_nodo'+k+'.ex = false')
}

function agregar(n, m){
  ar = a + 1
  ir = i + 1
  eval('append(selec, c_nodo'+(n+(5*i))+')')
  for(let h = 1; h <= m; h++){
    f = h-1
    eval('c_nodo'+(h+(5*ir))+' = new CNod('+ar+'*windowWidth/5-windowWidth/7, h*windowHeight/5 - windowWidth/20,'+n+','+(ar-1)+','+c+',ex,'+f+')');
  }
}


function keyPressed(){
  if (keyCode == 49){
    if (vv == true){
      eval('append(selec, c_nodo'+(1+(5*i))+')')
      eval('c_nodo'+(1+(5*i))+'.c = "yellow"');
    }
    if(exe != true){
      vv += 1
    }
    if (exe == true){
	    eval('nodo'+(i+1)+'= nodo'+i+'.n'+1);
    	i += 1;
	    n = 1;
    	execute(n);
    }
  }

  if (keyCode == 50){
    if (vv == true){
      eval('append(selec, c_nodo'+(2+(5*i))+')')
      eval('c_nodo'+(2+(5*i))+'.c = "yellow"');
    }
    if(exe != true){
      vv += 1
    }
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+2);
    	i += 1;
	    n = 2;
    	execute(n);
    }
  }

  if (keyCode == 51){
    if (vv == true){
      eval('append(selec, c_nodo'+(3+(5*i))+')')
      eval('c_nodo'+(3+(5*i))+'.c = "yellow"');
    }
    if(exe != true){
      vv += 1
    }
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+3)
    	i += 1;
    	n = 3;
    	execute(n);
    }
  }

  if (keyCode == 52){
    if (vv == true){
      eval('append(selec, c_nodo'+(4+(5*i))+')')
      eval('c_nodo'+(4+(5*i))+'.c = "yellow"');
    }
    if(exe != true){
      vv += 1
    }
    if (exe == true){
    	eval('nodo'+(i+1)+'= nodo'+i+'.n'+4)
    	i += 1;
    	n = 4;
    	execute(n);
    }
  }

  if (keyCode == 53){
    if (vv == true){
      eval('append(selec, c_nodo'+(5+(5*i))+')')
      eval('c_nodo'+(5+(5*i))+'.c = "yellow"');
    }
    if(exe != true){
      vv += 1
    }
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
    console.log('A');
    if (exe == false){
      agr = true
    }
  }

  if (keyCode == 69){
    console.log('E');
    if (exe == false){
      del = true
    }
  }

  if (keyCode == 32){
    console.log('P');
    if (exe == false){
      puntaje = 0
      punt += 1;
      for(let b in selec){
        console.log(puntaje += selec[b].punt )
      }
      
      console.log(selec)

    }
  }

  if (keyCode == 73){
    console.log('I');
    inf += 1;
  }
  if (keyCode == 67){
    console.log('C');
    cred += 1;
  }

}

function delet(){
  eliminar(this.value())
}

function add(){
  for(let g in this.value()){
    eval('pa'+g+'= int(this.value()[g])')
  }
  console.log(pa1)
  agregar(pa0,pa1)
  ag = int(pa1)
}


