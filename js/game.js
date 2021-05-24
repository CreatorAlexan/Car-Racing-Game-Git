class Game{
    constructor(){

    }

    readState(){
        var gameStateRef = db.ref("gamestate")
        gameStateRef.on("value",function(data){
            gamestate = data.val()
        })
    }
    writeState(state){
        db.ref("/").update({
            gamestate: state
        })
    }
    start(){
        gameOver = createSprite(displayWidth/2,displayHeight/2,200,200)
        gameOver.addImage(gameOverImg)
        gameOver.visible = false;
        if (gamestate == 0){
            form = new Form();
            form.display();
            player = new Player();
            player.readCount();
        }
        car1 = createSprite(200,200)
        car1.addImage(img1)
        car2 = createSprite(400,200)
        car2.addImage(img2)
        car3 = createSprite(600,200)
        car3.addImage(img3)
        car4 = createSprite(800,200)
        car4.addImage(img4)
        carArr = [car1,car2,car3,car4]
    }
    play(){
       
        form.hide()
        textSize(25)
        text("Game start",130,100)
        Player.readPlayerInfo()
        player.readingPlayerRank()
        if(playerInfo != undefined){
            background(groundImg)
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var yPosition = 120;
            var x = 200;
            
            var y;
            var index = 0;
            for(var i in playerInfo){
                index = index + 1;
                x = x + 200
                y = displayHeight - playerInfo[i].distance
                if(index === player.index){
                    image(locatorImg,x-20,y-120,50,50)
                    textSize(20)
                    text(player.name,x,y-50)
                    fill("blue")
                    ellipse(x,y,60,60)
                    fill("red")
                    carArr[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = y
                    
                }
                else{
                    fill("black")
    
            }
                
                
                carArr[index-1].x = x
                carArr[index-1].y = y
                textSize(20)
                yPosition = yPosition + 20
                text("Name: "+ playerInfo[i].name + " Distance: " + playerInfo[i].distance,120,yPosition)
            }
        }
        if(keyCode == UP_ARROW){
            player.distance = player.distance + 50;
            player.update();
        }
        drawSprites();
        if(player.distance > 4200){
            
            gameOver.visible = true
            textSize(50)
            fill("white")
            text("Game Over",displayWidth/2,displayHeight/2)
            player.rank = player.rank + 1
            player.writePlayerRank(player.rank)
            console.log(player.rank)
            if(player.rank == 1){
                image(rank1,displayWidth/2,displayHeight/2,200,200)
                console.log("test")
            }
            else if(player.rank ==2){
                image(rank2,displayWidth/2,displayHeight/2,200,200)
            }
            else if(player.rank ==3){
                image(rank3,displayWidth/2,displayHeight/2,200,200)
            }
            else if(player.rank ==4){
                image(rank4,displayWidth/2,displayHeight/2,200,200)
            }
            gamestate = 2
        }
        
    }
    end(){
        console.log("Game over")
        image(gameOverImg,displayWidth/2,displayHeight/2,200,200)
        console.log(player.rank)
    }
}