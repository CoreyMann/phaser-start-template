// main menu scene
menuMain.create = function() {
  this.add.sprite(0, 0, 'preloadBg').setDisplaySize(240, 320).setOrigin(0);
  playBtn = this.add.sprite(120, 200, 'playBtn').setOrigin(0.5).setInteractive();
  this.tweens.add({
    targets: playBtn,
    duration: 1000,
    repeat: -1,
    yoyo: true,
    scaleX: 1.2,
    scaleY: 1.2
  });
  playBtn.on('pointerdown', () => {
    playGame();
  });
}
menuMain.update = function() {
  if (inputState.ok == 1 && previousInputState.ok == 0) {
      playGame();
  }
  previousInputState.ok = inputState.ok;
}
