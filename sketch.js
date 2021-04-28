var img1, img2, img3, img4, vbot, lixo ,erro, CartaS, CartaC, Prompt, arq, back, myFont, xx, barra, wifi, som, cartat,erro2,aba, teste, ilixo, ilixo2, aba2, iuser, nota,download, aba3, v, tb, tb0, mypng;
var tela = 1;
var largura = 300;
var plataform = false;
var altura = 75;
var xMenu1 = 520;
var yMenu1 = 270;
var yMenu2 = 370;
var yMenu3 = 470;
var yBotao = 182;
var xBotao = 850;
var glitch1 = [];
var contador = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;
var t = 0;
var aba1 = 0;
var aba2 = 0;
var email1 = 0;
var notas = 0;
var arquivos = 0;
var y = 0;
var papelzinho=0;
var cpapel = 0;
var som1, som2;
var csom = 0;


var titi = 0;
let timer = 15;
var contadoor = 0;
var bola1 = [];



function preload() {
  soundFormats('ogg');
  soundFormats('wav')
  som2 = loadSound('somglitch01.wav');
  som1 = loadSound('music1.ogg')
  bola1[0]= loadImage('bolinha0.png');
  bola1[1]= loadImage('bolinha1.png');
  bola1[2]= loadImage('bolinha2.png');
  bola1[3]= loadImage('bolinha3.png');
  bola1[4]= loadImage('bolinha4.png');
  
  
  angulo3 = loadImage('Angu3.png');
  angulo1 = loadImage('Angu1.png');
  angulo2 = loadImage('Angu2.png');
  img1 = loadImage('Panel.png');
  img2 = loadImage('Botaoatv.png');
  img3 = loadImage('Botao1.png');
  img4 = loadImage('Panel2.png');
  ilixo = loadImage('ILixo.png');
  ilixo2 = loadImage('ILixo2.png');
  aba3 = loadImage('Aba 3.png');
  aba = loadImage('Aba.png');
  nota = loadImage('Nota2.png');
  mypng = loadImage('pp.png');
  download = loadImage('Download.png');
  aba2 = loadImage('Aba2.png');
  vbot = loadImage('nbotao.png');
  erro2 = loadImage('ERROR2.png');
  lixo = loadImage('lixo.png');
  erro = loadImage('ERROR.png');
  som = loadImage('Som.png');
  xx = loadImage('XX.png');
  tb0 = loadImage('TB0.png');
  tb = loadImage('TB.png');
  iuser = loadImage('Iuser.png');
  glitch1[0] = loadImage('Glitch 1.png');
  glitch1[1] = loadImage('Glitch 2.png');
  glitch1[2] = loadImage('Glitch 3.png');
  glitch1[3] = loadImage('Glitch 4.png');
  glitch1[4] = loadImage('Glitch 5.png');
  glitch1[5] = loadImage('Glitch 6.png');
  glitch1[6] = loadImage('Glitch 7.png');
  wifi = loadImage('Wifi.png');
  barra = loadImage('Barra.png');
  CartaS = loadImage('CartaS.png');
  CartaC = loadImage('CartaC.png');
  cartat = loadImage('CartaT.png');
  Prompt = loadImage('Prompt.png');
  arq = loadImage('Arquivos.png');
  back = loadImage('backnight.PNG');
  myFont = loadFont('Fontpix.ttf');
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
  plataformPreload()
}
function setup() {
  createCanvas(1366, 768);
  textFont(myFont);
  textSize(36)   
  plataformSetup()
  sons();

}
function menux() {
  background(back);
  image(img1, 420, 150);
  image(img3, xMenu1, yMenu1, largura, altura);
  image(img3, xMenu1, yMenu2 , largura, altura);
  image(img3, xMenu1, yMenu3 , largura, altura);

  if(mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
  image(img2, xMenu1, yMenu1, largura, altura)
    if (mouseIsPressed){
      tela = 2;
      
    }
  }
  if(mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
  image(img2, xMenu1, yMenu2 , largura, altura)
    if (mouseIsPressed){
      tela = 3;
    }
  }
  if(mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
  image(img2, xMenu1, yMenu3 , largura, altura)
    if (mouseIsPressed){
      tela = 4;
    }
  }
   
  textSize(20)
  fill(220)
  text('LOOP.exe', 630, 205)
  textSize(30)
  text('Início', 635, 315)
  text('Instruções', 590, 415)
  text('Créditos', 610, 515)
  
  
  
}
function mouseClicked(){
if(tela==2){
  if(mouseX>10 && mouseX<85 && mouseY>10 && mouseY<85){   aba1 = 1;
    contador2 = 1;                                          }
    else if(mouseX>1190 && mouseX<1220 && mouseY>139 && mouseY<169 && contador2 ==1){
    aba1 = 0;
    }
  if(mouseX>17 && mouseX<82 && mouseY>100 && mouseY<157){
    email1 = 1;
    contador2 = 2;
  }
    else if(mouseX>1190 && mouseX<2220 && mouseY>139 && mouseY<169){
    email1 = 0;
    contador2 = 0;
    }
  if(mouseX>403 && mouseX<1170 && mouseY>310 && mouseY<433 && contador2 == 2){
  email1 = 2;
  contador2 = 3;
  }
  else if(mouseX>640 && mouseX<940 && mouseY>600 && mouseY<650 && email1 == 2 ){
    tela = 8;
  }
}
  if(tela==8){
     if(mouseX>10 && mouseX<85 && mouseY>10 && mouseY<85){       
       aba1 = 1;
       contador2 = 1;                                         
     }
    else if(mouseX>1190 && mouseX<1220 && mouseY>139 && mouseY<169 && contador2 ==1 ){
    aba1 = 0;
    }
  if(mouseX>17 && mouseX<82 && mouseY>100 && mouseY<157){
    email1 = 1;
    contador2 = 2;
  }
    else if(mouseX>1190 && mouseX<2220 && mouseY>139 && mouseY<169){
    email1 = 0;
    contador2 = 0;
    }
    if(mouseX>403 && mouseX<1170 && mouseY>310 && mouseY<433 && contador2 == 2){
  email1 = 2;
  contador2 = 3;
  }
    else if(mouseX>1190 && mouseX<2220 && mouseY>139 && mouseY<169){
    email1 = 0;
    contador2 = 0;}
    if(mouseX>400 && mouseX<500 && mouseY>230 && mouseY<330 && contador2== 1 ){
      notas = 1;
    }
    else if(mouseX>800 && mouseX<830 && mouseY>148 && mouseY<178 && notas == 1){
      notas = 0;
    }
    if(mouseX>-15 && mouseX<140 && mouseY>235 && mouseY<360 && contador5 !=1){
        arquivos = 1;
    }
    else if (arquivos== 1 && contador3==1 && mouseX>730 && mouseY>385){
      contador3 = 0;
      arquivos = 0;
      button.hide();
      button2.hide();
      input.hide(); 
    }
       if(mouseX>1190 && mouseX<1220 && mouseY>139 && mouseY<169 && v==1 ){
       v = 0;   
       contador5 =1
         y = 0;
    }
       if (mouseX>-15 && mouseX<140 && mouseY>235 && mouseY<360 && contador5 ==1){
         y = 3;
         v =1;
       } 
  }
  if(email1==2){
    if(mouseX>750 && mouseX<820 && mouseY>620 && mouseY<640){
      papelzinho=1;
}
  }
  if(v==1){
    if(mouseX>450 && mouseX<530 && mouseY>300 && mouseY<380){
       tela = 9
       plataform = true;
    }
  }
  
  
}
function glitch(){
  t ++;
 //som2.amp(0.5)
  //som2.play();
  background(glitch1[contador%7]);
  if(t>7){
    contador++;
    
    if(contador>35){
      som2.stop()
      csom = 2;
      background(back);
      var hora = hour();
  var minutos = minute();
  image(lixo,10,10,75,75);
  textSize(13);
  fill(255,255,255);
  text('Lixeira',26,87)
  image(CartaC,17,100,65,57);
  text('Email',32,167);
  image(Prompt,-10,175,125,80);
  text('Prompt de'+'\n'+' Comando',18,255)
  image(arq,-15,235,155,125);
  text('Arquivos',22,350)
  image(barra,0,518,1400,250);
  image(wifi,1255,745,20,20);
  image(som,1285,743,25,25);
  textSize(20)
  text(hora+':',1315,760);
  text(minutos,1340,760);
      if(aba1==1){          
      image(aba,100,100,1250,640);
      image(xx,1190,139,30,30);
      image(ilixo,220,135,40,40);
      image(nota,400,230,100,100);
      textSize(14);
      noStroke();
      fill(51,51,51);
      text('Notas.txt',415,340);
      fill(255,255,255);
      stroke(51,51,51);
      rect(303,190,870,30);
      line(400,250,400,650);
      noStroke();
      textSize(20)  
      if(notas==1){
        image(aba3,300,110,600,630);
        image(xx,800,148,30,30);
        noStroke();
        textSize(30)
        fill(51,51,51)
        text('Notas',550,174);
        textSize(17)
        text('Se eu esquecer a senha de administrador do arquivo,'+'\n'+'faça o seguinte passos e digite na ordem:',370,210)
        text('1) Fatore a seguinte expressão: 12x + 24y. ',370,270)
        text('2) Meu número favorito: ',370,330);
      }
        text('Ps:A senha não precisa incluir os símbolos como +,'+'\n'+'-,*,/ ou )(. Apenas letras e números !',370,400)
        textSize(20);
      fill(255,255,255);
      tela = 8;
    } 
    else{
      tela = 8;
    }
      if(papelzinho==1){
        image(pep,1300,15,40,40);
        cpapel = 2;
        text('2/4',1300,70)
      }
      else{
        image(pep,1300,15,40,40);
        cpapel = 2;
        text('3/4',1300,70)
      }
      
      
   
    if(email1==1){    
  image(erro,100,100,1250,640);
  image(xx,1190,139,30,30);
  image(cartat,220,122,49,49);
  text('Email',280,162);
  stroke(51,51,51);
  rect(403,310,767,30);
  rect(410,282,10,10);
  rect(215,282,10,10);
  textSize(14);
  noStroke();
  text('Principal',430,292);
  text('Caixa de entrada 1',235,292)
  fill(51,51,51);
  text('Anônimo',430,330)
  text('20:12',1130,330);
  fill(168,168,168);
  text('- Olá usuário!',500,330)
  fill(255,255,255);
  
  }
    if(email1==2){
      
      image(aba2,100,100,1250,640);
      image(xx,1190,139,30,30);
      image(cartat,300,122,49,49);
      stroke(0)
      rect(749,549,72,92)
      image(tb,750,550,70,70);
      image(download,750,620,70,20)
      noStroke()
      textSize(12)
      fill(51,51,51)
      text('Download',755,635)
      fill(255,255,255)
      textSize(14)
      text('anonimo.gmail.com',465,215);
      textSize(12);
      text('Para mim',475,235)
      textSize(30); 
      fill(0);
      textSize(25);
      fill(255,180,6);
      ellipse(785,350,70,70);
      textSize(14);
      fill(51,51,51);
      text('      Olá usuário este email carrega muito mais do que palavras, nele existe uma ideia'+'\n'+'                           e ideias são indestrutíveis. Lembrai, lembrai do meu nome.',450,420);
      text('Att., 5.',480,490)
      image(cartat,760,317,50,50);
      stroke(255,255,255);
      noFill();    
      image(iuser,382,180,85,80);
      ellipse(425,220,70,70);
      fill(255,255,255)
      noStroke();
  }     

     if(arquivos==1) {
       image(aba,450,230,400,200);
       textSize(14)
       fill(51,51,51);
       text('Insira a senha para abrir o arquivo',520,280)
       contador4 = 1;
       
       if(contador3 == 0 ){
       fill(51,51,51);
       button = createButton('Ok')
       button.mousePressed(bg)
       input = createInput('')
       button.position(690,385);
       input.size(290,20);
       input.position(500,350);
       button2 = createButton('Cancelar');
       button2.size(68,22)
       button2.position(730,385);
       contador3 ++;
       
       }
  }
    if(v==1){
      papelzinho = 2;
      image(aba,100,100,1250,640);
      image(xx,1190,139,30,30);
      image(rockImage4,450,300,80,80);
      image(angulo1,600,300);
      image(angulo3,900,300);
      
      textSize(13);
      fill(0);
      text('Erro_3.png',900,400);
      text('Desafio.apk',450,400)
      text('Erro.png',615,400);
      image(angulo2,750,300);
      text('Erro_2.png',750,400);
      fill(255,255,255);
      stroke(51,51,51);
      rect(303,190,870,30);
      line(400,250,400,650);
     
      textSize(13)
      fill(0);
      noStroke();
     
    }
    if(v==2 && arquivos == 1){
     
      fill(255,0,0)
      text('Senha incorreta !',585,310)

    }
    if(y==3){
       papelzinho = 2;
      image(aba,100,100,1250,640);
      image(xx,1190,139,30,30);
      image(rockImage4,450,300,80,80);
      image(angulo1,600,300);
      image(angulo3,900,300);
      
      textSize(13);
      fill(0);
      text('Erro_3.png',900,400);
      text('Desafio.apk',450,400)
      text('Erro.png',615,400);
      image(angulo2,750,300);
      text('Erro_2.png',750,400);
      fill(255,255,255);
      stroke(51,51,51);
      rect(303,190,870,30);
      line(400,250,400,650);
     
      textSize(13)
      fill(0);
      noStroke();
      
      
    }    

      }
    }
  
}
function instruções(){
  background(back);
  image(img4, 420, 150);
  image(vbot, xBotao, yBotao, 30, 30);
  if(mouseX > xBotao && mouseX < xBotao + 30 && mouseY > yBotao && mouseY < yBotao + 32){
  image(img2, xBotao, yBotao, 30, 32);
    image(vbot, xBotao, yBotao, 30, 30);
    if (mouseIsPressed){
      tela = 1;
    }
  }
  fill(255,255,255);
  textSize(16);
  text('Este jogo é indicado para pessoas com conhecimen-'+'\n'+'to em matemática do 9° ano do fundamental. O jogo'+'\n'+'dever se jogado inicialmente com o mouse, porém '+'\n'+'precisará do uso do teclado para envio de respostas'+'\n'+'dos possíveis puzzles. ',457,250);
  textSize(20);
  text('Habilidades necessarias:',457,380);
  text('Instruções.txt',600,205)
  textSize(16);
  text('(EF09MA09) Compreender os processos de fatoração '+'\n'+'de expressões algébricas, com base em suas relaç-'+'\n'+'ões com os produtos notáveis, para resolver e ela-'+'\n'+'borar problemas que possam ser representados'+'\n'+'por equações polinomiais do 2º grau.',457,400)
  text('(EF09MA13) Demonstrar relações métricas do triân-'+'\n'+'gulo retângulo, entre elas o teorema de Pitágoras,'+'\n'+'utilizando, inclusive, a semelhança de triângulos.',457,520)
}
function creditos(){
  background(back);
  fill(255,255,255);
  image(img4, 420, 150);
  image(mypng,470,250,100,100)
   image(vbot, xBotao, yBotao, 30, 30);
  if(mouseX > xBotao && mouseX < xBotao + 30 && mouseY > yBotao && mouseY < yBotao + 32){
  image(img2, xBotao, yBotao, 30, 32);
  image(vbot, xBotao, yBotao, 30, 30);
    if (mouseIsPressed){
      tela = 1;
    }
  }
  textSize(16);
  text('Criadora:',470,240);
  text('Artes:'+'\n'+ 'Jordan Irwin (AntumDeluge)'+'\n'+'Creator blank_canvas'+'\n'+'Comp-3 Interactive '+'\n'+'Wishforge Games'+'\n'+'Kickpixel',470,400)
  
}
function telagame(){
  background(back);
  var hora = hour();
  var minutos = minute();
  image(lixo,10,10,75,75);
  textSize(13);
  fill(255,255,255);
  text('Lixeira',26,87)
  image(CartaC,17,100,65,57);
  text('Email',32,167);
  //image(Prompt,-10,175,125,80);
  //text('Prompt de'+'\n'+' Comando',18,255)
  image(arq,-15,135,155,125);
  text('Arquivos',22,250)
  image(barra,0,518,1400,250);
  image(wifi,1255,745,20,20);
  image(som,1285,743,25,25);
  textSize(20)
  text(hora+':',1315,760);
  text(minutos,1340,760);
    if(aba1==1){          
      image(aba,100,100,1250,640);
      image(xx,1190,139,30,30);
      image(ilixo,220,135,40,40);
      image(ilixo2,700,340,200,230)
      fill(0);
      textSize(30)
      fill(51,51,51)
      text('Vazio',765,558);
      fill(255,255,255);
      stroke(51,51,51);
      rect(303,190,870,30);
      line(400,250,400,650)
      
      tela = 2;
    } 
    else{
      tela = 2;
    }
   
    if(email1==1){
    
  image(erro,100,100,1250,640);
  image(xx,1190,139,30,30);
  image(cartat,220,122,49,49);
  text('Email',280,162);
  stroke(51,51,51);
  rect(403,310,767,30);
  rect(410,282,10,10);
  rect(215,282,10,10);
  textSize(14);
  noStroke();
  text('Principal',430,292);
  text('Caixa de entrada 1',235,292)
  fill(51,51,51);
  text('Usuário desconhecido',410,330)
  text('20:12',1130,330);
  fill(168,168,168);
  text('- Atualização para o seu computador !',590,330)
  fill(255,255,255);
  }
  if(email1==2){
    image(aba2,100,100,1250,640);
    image(xx,1190,139,30,30);
    image(cartat,300,122,49,49);
    textSize(14)
    text('anonimo.gmail.com',465,215);
    textSize(12);
    text('Para mim',475,235)
    textSize(30); 
    fill(0);
    image(download,640,600,300,50);
    textSize(25);
    text('Download',725,635);
    fill(255,180,6);
    ellipse(785,350,70,70);
    textSize(14);
    
    fill(51,51,51);
    text('      Devido a um problema técnico o, conteudo desse email foi perdido segue abaixo'+'\n'+ '               anexado o arquivo solicitado de atualização do seu computador.',450,420);
    text('Att., 5.',480,490)
    image(cartat,760,317,50,50);
    stroke(255,255,255);
    noFill();
    image(iuser,382,180,85,80);
    ellipse(425,220,70,70);
    fill(255,255,255)
    noStroke();
  }     
}
function final(){
  titi ++
  background(bola1[contadoor%5]);
  if(titi>25){
    contadoor ++;
    fill(255,255,255)
    textSize(30)
    text('LOADING...',620,500)
    if(contadoor >150){
      background(0)
      if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
}

    
  
  if(timer<=15){
    fill(0,255,0);
     text('O qu',0,50)
  }
  if(timer<=14){
     text('O que?',0,50)
  }
  if(timer<=13){
     text('O que? você',0,50)
  }
  if(timer<=12){
     text('O que? você acha',0,50)
  }
   if(timer<=11){
     text('O que? você acha que ',0,50)
  }
  if(timer<=10){
     text('O que? você acha que conse ',0,50)
  }
  if(timer<=9){
     text('O que? você acha que conseguiu ',0,50)
  }
  if(timer<=8){
     text('O que? você acha que conseguiu me ',0,50)
  }
  if(timer<=7){
     text('O que? você acha que conseguiu me derr',0,50)
  }
  if(timer<=6){
     text('O que? você acha que conseguiu me derrotar?',0,50)
  }
  if(timer<=5){
    text('HA',0,100)
  }
  if(timer<=4){
    text('HAHA',0,100)
  }
  if(timer<=3){
    text('HAHAHA',0,100)
  }
   if(timer<=2){
    text('HAHAHAHA!',0,100)
  }

  if(timer==0){
    tela = 11;
  }

}
    }
  

}
function agrade(){
  
 if(mouseX > 520 && mouseX < 820 && mouseY > 500 && mouseY < 575){
  image(img2, 520, 500 , 300, 75)
    if (mouseIsPressed){
      tela = 1;
      plataform = false;
    }
  }
    text('Início',635,545);
  

  background(back);
   image(menu,420,150);
  textSize(20)
  fill(220)
  text('LOOP.exe', 630, 205);
   text('Parabéns você consegiu terminar o jogo!'+'\n'+'Obrigada por ter jogado meu game até a '+'\n'+'próxima aventura!', 457,250);
  text('Artes:'+'\n'+ 'Jordan Irwin (AntumDeluge)'+'\n'+'Creator blank_canvas'+'\n'+'Comp-3 Interactive '+'\n'+'Wishforge Games'+'\n'+'Kickpixel',457,350)
  image(img3, 520, 500 , 300, 75);
  textSize(30)
  text('Início',635,545);
}
function sons(){
  if(tela==1 || tela==2 || tela==3 || tela==4 || tela==8){
    somzin.stop(); 
    som1.amp(0.07)
    som1.loop();
    
  }
 
}

//function keyPressed(){
  //if(platform==false){
      // let fs = fullscreen();
       //fullscreen(!fs);
   //}
//}
function bg() {
  if(input.value()=='12x2y5'){
    v = 1;
    input.hide();
    button.hide();
    button2.hide();
    arquivos = 0
  }
  else{
    v = 2;
  }
}
function draw(){
  if(tela==1){
   menux(); 
    som2.stop()
  }
  if (tela==2){
    telagame();
    
  }
  if (tela==3){
    instruções();
   
  }
  if (tela==4){
    creditos();
    
  }
  if(tela==8){
    glitch();
    
  }
  if(tela==9){
    plataformDraw();
    som1.stop();
    
    
  }
  if(tela==10){
    final();
  }
  if(tela==11){
    agrade();
  }
   
   
}



