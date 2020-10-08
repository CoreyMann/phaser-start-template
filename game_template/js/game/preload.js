// preload scene
gamePreload.preload = function() {

  loadingBar();

}
gamePreload.create = function() {
  //create all game animations
  //createAnims();
  //createSounds();

  //switch from preload to main menu
  this.scene.start('menu');
  this.scene.stop('preload');
}
