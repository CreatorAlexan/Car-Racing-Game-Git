var db;
var game, form, player;
var gamestate = 0;
var playerCount;
var playerInfo;
var car1, car2, car3, car4;
var carArr
var img1, img2,img3,img4;
var track, ground, trackImg, groundImg;
var gameOverImg,gameOver;
var locatorImg;
var rank1,rank2,rank3,rank4;

function preload(){
    img1 = loadImage("images/car1.png")
    img2 = loadImage("images/car2.png")
    img3 = loadImage("images/car3.png")
    img4 = loadImage("images/car4.png")
    trackImg = loadImage("images/track.jpg")
    groundImg = loadImage("images/ground.png")
    gameOverImg = loadImage("images/GameOver.png")
    locatorImg = loadImage("images/locator image.jpg")
    rank1 = loadImage("images/Rank 1 badge.jpg")
    rank2 = loadImage("images/rank2Badge.jpg")
    rank3 = loadImage("images/rank3Badge.jpg")
    rank4 = loadImage("images/rank4Badge.jpg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    db = firebase.database();
    game = new Game()
    game.readState()
    game.start()
}

function draw(){

    if(gamestate == 2){
        game.end()
    }

    if(playerCount == 4){
        game.writeState(1)
    }
    if(gamestate == 1){
        game.play()
    }
    
    
}


