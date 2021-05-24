class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("name")
        this.button = createButton("Submit")
        this.greeting = createElement("h2")
        this.reset = createButton("Reset")
    }
    display(){
      
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-90,0)
        
        this.input.position(displayWidth/2-90,displayHeight/2-130)
        
        this.reset.position(50,50)
        this.reset.mousePressed(()=>{
            game.writeState(0);
            player.updateCount(0)
            player.deletePlayer()
            player.writePlayerRank(0)
        })

        this.button.position(displayWidth/2-90,displayHeight/2-100)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1
            player.updateCount(playerCount)
            player.index = playerCount
            player.update()
           
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(displayWidth/2-90,displayHeight/2-100)
        })
    }
    hide(){
        this.button.hide()
        this.input.hide()
        this.greeting.hide()
    }
}