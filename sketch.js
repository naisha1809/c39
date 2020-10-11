var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track,cimg1,cimg2,cimg3,cimg4,g;

function preload(){
    track = loadImage("images/track.png");
    cimg1 = loadImage("images/car1.png");
    cimg2 = loadImage("images/car2.png");
    cimg3 = loadImage("images/car3.png");
    cimg4 = loadImage("images/car4.png");
    g = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
