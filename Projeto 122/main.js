x = 0;
y = 0;

alt = 0;
lar = 0;

drawApple = "";
speakData = "";

num = 0;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content;

  num = Number(content);

  if(Number.isInteger(num)){
    document.getElementById("status").innerHTML = "A maçã começou a ser desenhada";
    drawApple = "set";
  }
  else{
    document.getElementById("status").innerHTML = "O número não foi reconhecido";
  }
}

function setup() {
 lar = window.innerWidth;
 alt = window.innerHeight;

 canvas = createCanvas(lar, alt-150);
 canvas.center();
}

function draw() {
  if (drawApple == "set") {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";

    for(var i = 1; i <= num; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);

      image(apple, x, y, 50, 50);
    }
    
    document.getElementById("status").innerHTML = num + " maçãs foram desenhadas";

    speakData = num + " maçãs foram desenhadas"
    speak();
  }
}
function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speakData);

  synth.speak(utterThis);

  speakData = "";
}

function preload(){
  apple = loadImage("apple.png");
}

