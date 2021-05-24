class Player{
    constructor(){
        this.index = null
        this.name = null
        this.distance = 0
        this.rank = 0
    }
    readCount(){
        var playerCountRef = db.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).update({
            name: this.name,
            distance: this.distance
        })
    }
    static readPlayerInfo(){
        var playerRef = db.ref("players")
        playerRef.on("value",(data)=>{
          playerInfo = data.val()
        })
    }
    deletePlayer(){
        db.ref("/").update({
            players: null
        })
    }
    readingPlayerRank(){
        var rankRef = db.ref("rank")
        rankRef.on("value",(data)=>{
            this.rank = data.val()
        })

    }
    writePlayerRank(rank){
        db.ref("/").update({
            rank: rank
        })
    }
}