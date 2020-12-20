class Game{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", (data) => {
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        });
    }


    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val()
                player.getCount()
            }
            form = new Form()
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts!", 120, 100)
        player.getplayerinfo()

        if(allplayers !== undefined){
            var displayposition = 130

            for(var plr in allplayers){
                if(plr === "player "+ player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                displayposition += 20
                textSize(15)
                text(allplayers[plr].name + " : " + allplayers[plr].distance,120,displayposition)    
            }
        }
    }
}