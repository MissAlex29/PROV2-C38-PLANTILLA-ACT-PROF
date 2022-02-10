class Game {
  constructor() {}
  //Función para obtener estado de juego de base de datos 
  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value",function(data) {
      gameState = data.val();
    });
  }

  //Método para actualizar base de datos 
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    //Objeto para el jugador 
    player = new Player();
    playerCount = player.getCount();

    //Objeto para el formulario de registro
    form = new Form();
    form.display();

    //Jugador 1 
    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;
    //Jugador 2 
    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;
    //Matriz para almacenar ambos jugadores 
    cars = [car1, car2];
  }

  //Ocultar 
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //Método PLAY
  play() {
    //Oculta el formulario
    this.handleElements();
    //Obtiene info. del jugador 
    Player.getPlayersInfo();

    //Sí "allPlayers" NO ES UN VALOR INDEFINIDO
    if (allPlayers !== undefined) {
      //Mostrar imagen de pista de carreras 
      image(track, 0, -height * 5, width, height * 6);
      //Variable para guardar las posiciones de los jugadores 
      var index = 0; 
      
        

        
      
    drawSprites();
    }
  }

  //Función para controles 
  
}
