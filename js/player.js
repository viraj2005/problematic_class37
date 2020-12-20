class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }

    getCount(){
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount = data.val()
        })
    }

    update(){
        var playerIndex = "players/player " + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    static getPlayerInfo(){
        var playerinforef = database.ref("players")
        playerinforef.on("value", (data) => {
            allplayers = data.val()
        })
    }
}