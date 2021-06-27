class Game{
    constructor(){

    }

    gameState(){
        var gameStateRef=database.ref('gameState')
        gameState.on("value",function(data){
            gameState=data.val();
        })
    }

    gameCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value", (data) => {
             playerCount=data.val();
        })
    }
}