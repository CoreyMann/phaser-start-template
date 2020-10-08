window.onload = function() {
  // object containing configuration options
  let config = {
    type: Phaser.AUTO,
    width: 720,
    height: 960,
    scale: {
      mode: Phaser.Scale.FIT
    }
    scene: [
      gameBoot,
      gamePreload,
      menuMain,
      menuInstructions,
      menuOptions,
      menuPause,
      gameUI,
      gameLevel
    ],
    physics: {
      default: "arcade"
    },
    backgroundColor: 0x0c88c7
  }

  game = new Phaser.Game(config);

  window.focus();
  resize();
  window.addEventListener('resize', resize, false);
};
