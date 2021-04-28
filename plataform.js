var rockImage;
//var plataform = false;
var contadorr = 1;
var heroImage, hero, xh, yh;

var ground;
var somzin;



const size = 32;
const half = size/2;

const GRAVITY = 0.9;
function plataformPreload(){
  soundFormats('ogg');
  somzin = loadSound('musicplat.ogg')
  menu = loadImage('Panel.png')
  des = loadImage('desafio.png');
  rockImage = loadImage("tile_1_2.png");
  heroImage = loadImage("image_2_2.png");
  rockImage3 = loadImage("tile_1_5.png");
  rockImage4 = loadImage("tile_1_6.png");
  rockImage2 = loadImage("tile_1_3.png");
  back2 = loadImage("background2.png");
  plata1 = loadImage("plat1.png");
  plata2 = loadImage("plat2.png");
  plata3 = loadImage("plat3.png");
  corrente1 = loadImage("cor1.png");
  corrente2 = loadImage("cor2.png");
  espi1 = loadImage("espinho1.png");
  espi2 = loadImage("espinho2.png");
  espi3 = loadImage("espinho3.png");
  espi4 = loadImage("espinho4.png");
  pep = loadImage("paper.png");

}


function plataformDraw() {
  background(back2);
 // plataforma()
  grid();

  hero.velocity.y+=GRAVITY;
  
  if(hero.collide(ground)){
    hero.velocity.y=0;
  }
  hero.collide(ground);
  drawSprites();
  move();
  if(contadorr==2){
 if(mouseX > 520 && mouseX < 820 && mouseY > 500 && mouseY < 575){
  image(img2, 520, 500 , 300, 75)
    if (mouseIsPressed){
      tela = 1;
      plataform = false;
    }
  }
    text('Início',635,545);
  }
   
}
  
function keyPressed(){
  if(keyCode===UP_ARROW){
     hero.velocity.y-=12;
  }
}

function move(){
  if(keyIsDown(LEFT_ARROW)){
    hero.position.x-=3
  }
  else if(keyIsDown(RIGHT_ARROW)){
    hero.position.x+=3;
  }
  if(hero.position.y>768){
    hero.position.x=96  
    hero.position.y=672;  
    }
  else if(hero.position.y>640 && hero.position.x>288 && hero.position.x<320 ){
     hero.position.x=96  
    hero.position.y=672; 
    }
    else if(hero.position.y>480 &&hero.position.y<512 && hero.position.x>160 && hero.position.x<192 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>160 &&hero.position.y<192 && hero.position.x>608 && hero.position.x<640 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>224 &&hero.position.y<255 && hero.position.x>96 && hero.position.x<128 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>160 &&hero.position.y<192 && hero.position.x>96 && hero.position.x<128 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>288 && hero.position.y<320 && hero.position.x>672 && hero.position.x<736 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>448 &&hero.position.y<480 && hero.position.x>992 && hero.position.x<1024 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>224 &&hero.position.y<256 && hero.position.x>1024 && hero.position.x<1056 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>640 &&hero.position.y<672 && hero.position.x>1024 && hero.position.x<1152 ){
      hero.position.x=96  
     hero.position.y=672; 
     }
     else if(hero.position.y>96 &&hero.position.y<134 && hero.position.x>1290 && hero.position.x<1322 && contadorr==1 ){
       image(des,600,250,300,250)
       a = prompt('Qual o valor hipotenusa?');
       if(a==15 && contadorr== 1){
         alert('Correto!')
        tela = 10;
         plataform = false;
       }
       else{
         alert('Incorreto!')
       }
     }
if(contadorr==2){
  image(menu,420,150);
  textSize(20)
  fill(220)
  text('LOOP.exe', 630, 205);
   text('Parabéns você consegiu terminar o jogo!'+'\n'+'Obrigada por ter jogado meu game até a '+'\n'+'próxima aventura!', 457,250);
  text('Artes:'+'\n'+ 'Jordan Irwin (AntumDeluge)'+'\n'+'Creator blank_canvas'+'\n'+'Comp-3 Interactive '+'\n'+'Wishforge Games'+'\n'+'Kickpixel',457,350)
  image(img3, 520, 500 , 300, 75);
  textSize(30)
  text('Início',635,545);
  /*if(mouseX > 520 && mouseX < 820 && mouseY > 500 && mouseY < 575){
  image(img2, 520, 500 , 300, 75)
    if (mouseIsPressed){
      tela = 1;
      plataform = false;
    }
  }*/

}
    }    

function grid(){
  var tam = 32;
  stroke(255);
  noStroke()
  strokeWeight(1);
  
  for(i=tam;i<width;i=i+tam){
    line(i,0,i,height);
  }
  
   for(i=tam;i<height;i=i+tam){
    line(0,i,width,i);
  }
 
    
  //desenha o texto da regua
  fill(255);
  noStroke();
  textSize(8);
  
  for(i=tam;i<width;i=i+tam){
    text(i,i,8);
 }
  
  for(i=tam;i<height;i=i+tam){
    text(i,2,i+8);
  }
}

function plataforma(){
  somzin.amp(0.1)
  somzin.play()
  xh=96;
  yh=672;

  ground = new Group();
  
  hero = createSprite(xh+half,yh+half);
 hero.addImage(heroImage);

   for(i=0;i<10;i++){
    var rock = createSprite(182+(i*30)+half,736+half);
    rock.addImage(rockImage2);
    var rock2 = createSprite(565+(i*30)+half,736+half);
    rock2.addImage(rockImage2);
    var rock3 = createSprite(924+(i*30)+half,736+half);
    rock3.addImage(rockImage2);
    var rock4 = createSprite(224+(i*30)+half,548+half);
    rock4.addImage(rockImage);
    ground.add(rock4);
    var rock5 = createSprite(160+(i*30)+half,518+half);
    rock5.addImage(rockImage);
    ground.add(rock5);
    var rock6 = createSprite(30+half,30+(i*30)+half);
    rock6.addImage(rockImage);
    ground.add(rock6);

  }
  
  for(i=0;i<45;i++){
    var rock = createSprite(0+(i*30)+half,0+half);
    rock.addImage(rockImage);
    ground.add(rock);
  }
  
  for(i=0;i<24;i++){
    var rock = createSprite(0+half,0+(i*30)+half);
    rock.addImage(rockImage);
    ground.add(rock);
  }
  for(i=0;i<6;i++){
    var rock = createSprite(0+(i*30)+half,736+half);
    var rock2 = createSprite(0+(i*30)+half,706+half);
    rock2.addImage(rockImage);
    rock.addImage(rockImage);
    ground.add(rock);
    ground.add(rock2);
    var rock3 = createSprite(384+(i*30)+half,578+half);
    rock3.addImage(rockImage);
    ground.add(rock3);
    var rock4 = createSprite(60+(i*30)+half,300+half);
    rock4.addImage(rockImage);
    ground.add(rock4);
  }
  for(i=0;i<26;i++){
    var rock = createSprite(1342+half,0+(i*30)+half);
    rock.addImage(rockImage);
    ground.add(rock);
  }
 
  for(i=0;i<5;i++){
    var rock = createSprite(240+(i*30)+half,672+half);
    rock.addImage(rockImage);
    ground.add(rock);
    var rock2 = createSprite(608+(i*30)+half,672+half);
    rock2.addImage(rockImage);
    ground.add(rock2);
    var rock3 = createSprite(1028+(i*30)+half,672+half);
    rock3.addImage(rockImage);
    ground.add(rock3);
    var espin = createSprite(1028+(i*30)+half,640+half);
    espin.addImage(espi1);
    var espin2 = createSprite(416+(i*30)+half,32+half);
    espin2.addImage(espi3);

  }
  for(i=0;i<4;i++){
    var rock = createSprite(452+(i*30)+half,706+half);
    rock.addImage(rockImage);
    ground.add(rock);
    var rock2 = createSprite(452+(i*30)+half,736+half);
    rock2.addImage(rockImage);
    ground.add(rock2);
    var rock3 = createSprite(862+(i*30)+half,736+half);
    rock3.addImage(rockImage);
    ground.add(rock3);
    var rock4 = createSprite(862+(i*30)+half,706+half);
    rock4.addImage(rockImage);
    ground.add(rock4);
    var rock5 = createSprite(1222+(i*30)+half,736+half);
    rock5.addImage(rockImage);
    ground.add(rock5);
    var rock6 = createSprite(1222+(i*30)+half,706+half);
    rock6.addImage(rockImage);
    ground.add(rock6);
    var rock7 = createSprite(672+(i*30)+half,320+half);
    rock7.addImage(rockImage);
    ground.add(rock7);
    var rock8 = createSprite(642+(i*30)+half,350+half);
    rock8.addImage(rockImage);
    ground.add(rock8);
    var rock9 = createSprite(992+(i*30)+half,256+half);
    rock9.addImage(rockImage);
    ground.add(rock9);
  }
  for(i=0;i<4;i++){
    var rock = createSprite(30+half,585+(i*30)+half);
    rock.addImage(rockImage);
    ground.add(rock);
    var rock2 = createSprite(60+half,60+(i*30)+half);
    rock2.addImage(rockImage);
    ground.add(rock2);
    var rock3 = createSprite(60+half,180+(i*30)+half);
    rock3.addImage(rockImage);
    ground.add(rock3);
    var corre6 = createSprite(1190+half,64+(i*32)+half);
    corre6.addImage(corrente2);
  }
  for(i=0;i<2;i++){
    var rock = createSprite(192+(i*30)+half,488+half);
    rock.addImage(rockImage);
    ground.add(rock);
    var rock2 = createSprite(288+(i*30)+half,416+half);
    rock2.addImage(rockImage);
    ground.add(rock2);
    var rock3 = createSprite(288+(i*30)+half,386+half);
    rock3.addImage(rockImage);
    ground.add(rock3);
    var rock4 = createSprite(288+(i*30)+half,224+half);
    rock4.addImage(rockImage);
    ground.add(rock4);
    var rock5 = createSprite(288+(i*30)+half,194+half);
    rock5.addImage(rockImage);
    ground.add(rock5);
    var rock6 = createSprite(618+(i*30)+half,194+half);
    rock6.addImage(rockImage);
    ground.add(rock6);
    var rock6 = createSprite(618+(i*30)+half,224+half);
    rock6.addImage(rockImage);
    ground.add(rock6);
    var rock7 = createSprite(1184+(i*30)+half,322+half);
    rock7.addImage(rockImage);
    ground.add(rock7);
    
    var espin2 = createSprite(672+(i*30)+half,288+half);
    espin2.addImage(espi1);
    var espin3 = createSprite(704+(i*30)+half,412+half);
    espin3.addImage(espi3);

  
  }
  for(i=0;i<3;i++){
    var rock = createSprite(90+(i*30)+half,270+half);
    rock.addImage(rockImage);
    ground.add(rock);
    var rock2 = createSprite(90+(i*30)+half,240+half);
    rock2.addImage(rockImage);
    ground.add(rock2);
    var rock7 = createSprite(474+(i*30)+half,608+half);
    rock7.addImage(rockImage);
    ground.add(rock7);
    var rock3 = createSprite(702+(i*30)+half,380+half);
    rock3.addImage(rockImage);
    ground.add(rock3);
    var rock4 = createSprite(928+(i*30)+half,480+half);
    rock4.addImage(rockImage);
    ground.add(rock4);
    var rock5 = createSprite(1152+(i*30)+half,352+half);
    rock5.addImage(rockImage);
    ground.add(rock5);
    var rock6 = createSprite(1152+(i*30)+half,382+half);
    rock6.addImage(rockImage);
    ground.add(rock6);
  }
  for(i=0;i<1;i++){
    var plat = createSprite(564+(i*30)+half,608+half);
    plat.addImage(plata1);
    ground.add(plat);
    var plat2 = createSprite(258+(i*30)+half,416+half);
    plat2.addImage(plata3);
    ground.add(plat2);
    var plat3 = createSprite(258+(i*30)+half,224+half);
    plat3.addImage(plata3);
    ground.add(plat3);
    var plat4 = createSprite(348+(i*30)+half,194+half);
    plat4.addImage(plata1);
    ground.add(plat4);
    var plat5 = createSprite(588+(i*30)+half,194+half);
    plat5.addImage(plata3);
    ground.add(plat5);
    var plat6 = createSprite(678+(i*30)+half,224+half);
    plat6.addImage(plata1);
    ground.add(plat6);
    var plat7 = createSprite(898+(i*30)+half,480+half);
    plat7.addImage(plata3);
    ground.add(plat7);
    var plat8 = createSprite(958+(i*30)+half,450+half);
    plat8.addImage(rockImage4);
    ground.add(plat8);
    var plat9 = createSprite(1056+(i*30)+half,416+half);
    plat9.addImage(rockImage3);
    ground.add(plat9);
    var plat10 = createSprite(1122+(i*30)+half,382+half);
    plat10.addImage(plata3);
    ground.add(plat10);
    var plat11 = createSprite(1112+(i*30)+half,256+half);
    plat11.addImage(plata1);
    ground.add(plat11);
    var rock6 = createSprite(1184+(i*30)+half,192+half);
    rock6.addImage(rockImage3);
    ground.add(rock6);
    var plat12 = createSprite(1252+(i*30)+half,128+half);
    plat12.addImage(rockImage);
    ground.add(plat12);
    var plat12 = createSprite(1282+(i*30)+half,128+half);
    plat12.addImage(plata1);
    ground.add(plat12);
    var plat13 = createSprite(1312+(i*30)+half,128+half);
    plat13.addImage(plata3);
    ground.add(plat13);
    var plat14 = createSprite(762+(i*30)+half,350+half);
    plat14.addImage(rockImage4);
    ground.add(plat14);
    var corre1 = createSprite(256+(i*30)+half,580+half);
    corre1.addImage(corrente1);
    var corre2 = createSprite(256+(i*30)+half,610+half);
    corre2.addImage(corrente2);
    var corre3 = createSprite(1056+(i*30)+half,288+half);
    corre3.addImage(corrente1);
    var corre4 = createSprite(1056+(i*30)+half,320+half);
    corre4.addImage(corrente2);
    var corre4 = createSprite(1056+(i*30)+half,352+half);
    corre4.addImage(corrente2);
    var corre5 = createSprite(1056+(i*30)+half,384+half);
    corre5.addImage(corrente2);
    var espin1 = createSprite(288+(i*30)+half,640+half);
    espin1.addImage(espi1);
    var espin2 = createSprite(160+(i*30)+half,486+half);
    espin2.addImage(espi1);
    var espin3 = createSprite(94+(i*30)+half,208+half);
    espin3.addImage(espi1);
    var espin4 = createSprite(92+(i*30)+half,160+half);
    espin4.addImage(espi4);
    var espin5 = createSprite(988+(i*30)+half,448+half);
    espin5.addImage(espi1);
    var espin6 = createSprite(617+(i*30)+half,162+half);
    espin6.addImage(espi1);
    var espin7 = createSprite(1024+(i*30)+half,224+half);
    espin7.addImage(espi1);
    var corre6 = createSprite(1190+(i*30)+half,32+half);
    corre6.addImage(corrente1);
    var papel = createSprite(1290+(i*30)+half,96+half);
    papel.addImage(pep);
  
  }
  for(i=0;i<7;i++){
    var plat = createSprite(378+(i*30)+half,194+half);
    plat.addImage(plata2);
    ground.add(plat);
  }



}
function plataformSetup() {
  plataforma()
  createCanvas(1366, 768);

 }