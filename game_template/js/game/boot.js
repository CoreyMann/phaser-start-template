// boot scene
  gameBoot.preload = function() {
    this.load.image('preloadBg', 'assets/images/preload/preloadBg.png');
  }
  gameBoot.create = function() {
    this.scene.start('preload');
    this.scene.remove('boot');
  }
