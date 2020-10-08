// GLOBAL FUNCTIONS
// loading bar
function loadingBar() {

  let progressBox = gamePreload.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(0, 220, 240, 40);
  let progressBar = gamePreload.add.graphics();

  gamePreload.load.on('progress', function(value) {

  });

  let loadingText = gamePreload.make.text({
    x: 80,
    y: 20,
    text: 'Loading...',
    style: {
      font: '18px Comic Sans MS',
      fill: '#ed145b',
      stroke: '#fff',
      strokeThickness: 3
    }
  });

  //simulate lag so you can actually see the loading screen
  // for (let i = 0; i < 100; i++) {
  //   gamePreload.load.image('player' + i, 'assets/images/player.png');
  // }

  let percentText = gamePreload.make.text({
    x: 96,
    y: 226,
    text: '0%',
    style: {
      font: '18px Comic Sans MS',
      fill: '#ed145b',
      stroke: '#fff',
      strokeThickness: 3
    }
  });

  let assetText = gamePreload.make.text({
    x: 120,
    y: 270,
    text: '',
    style: {
      font: '14px Comic Sans MS',
      fill: '#ed145b',
      stroke: '#fff',
      strokeThickness: 3
    }
  }).setOrigin(0.5);

  gamePreload.load.on('fileprogress', function(file) {

    assetText.setText('Loading asset: ' + file.key);
  });

  gamePreload.load.on('progress', function(value) {
    progressBar.clear();
    progressBar.fillStyle(0x6cc1fc, 1);
    progressBar.fillRect(0, 225, 240 * value, 30);
    percentText.setText(parseInt(value * 100) + '%');
  });

  // on complete of load, destroy all objects
  gamePreload.load.on('complete', function() {
    progressBar.destroy();
    loadingText.destroy();
    percentText.destroy();
    assetText.destroy();
  });
}; //*** END loadingBar

// create animations
function createAnims() {
  // setting player animation
  gamePreload.anims.create({
    key: 'run',
    frames: gamePreload.anims.generateFrameNumbers('player', {
      start: 0,
      end: 1
    }),
    frameRate: 8,
    repeat: -1
  });

  // setting coin animation
  gamePreload.anims.create({
    key: 'rotate',
    frames: gamePreload.anims.generateFrameNumbers('coin', {
      start: 0,
      end: 5
    }),
    frameRate: 15,
    yoyo: true,
    repeat: -1
  });

  // setting fire animation
  gamePreload.anims.create({
    key: 'burn',
    frames: gamePreload.anims.generateFrameNumbers('fire', {
      start: 0,
      end: 4
    }),
    frameRate: 15,
    repeat: -1
  });
}; //*** END createAnims

//close menu and start game
function playGame() {
  if (!inGame) {
    inMenu = 0;
    inGame = 1;
    gameUI.scene.bringToTop('ui');
    gameUI.scene.start('ui');
    gameLevel.scene.start('level');
    menuMain.scene.stop('menu');
  }
}; //*** END playGame

// navigate right through the menu selections
function selectRight() {}; //*** END selectRight

// navigate left through the menu selections
function selectLeft() {}; //*** END selectLeft

// pause the game and switch to the pause menu
function togglePause() {
  if (inputState.pause == 0 && previousInputState.pause == 0) {
    inputState.pause = 1;
    inGame = 0;
    inMenu = 1;
    gameUI.scene.pause('ui');
    gameLevel.scene.pause('level');
    menuPause.scene.start('pause');
    menuPause.scene.bringToTop('pause');
  } else if (inputState.pause == 1 && previousInputState.pause == 1) {
    inputState.pause = 0;
    inGame = 1;
    inMenu = 0;
    gameUI.scene.resume('ui');
    gameUI.scene.bringToTop('ui');
    gameLevel.scene.resume('level');
    menuPause.scene.stop('pause');
  }
  previousInputState.pause = inputState.pause;
}; //*** END togglePause

// score multiplier
function scoreMultiplier() {
  let endTime = new Date();
  let time = endTime - startTime;
  if (time < 4000 && !multiplierStopper) {
    multiplierNum = 6;
    multiplierText.setText(multiplierNum + 'X')
  } else if (time > 4000 && time < 6000 && !multiplierStopper) {
    multiplierNum = 4;
    multiplierText.setText(multiplierNum + 'X')
  } else if (time > 6000 && time < 8000 && !multiplierStopper) {
    multiplierNum = 2;
    multiplierText.setText(multiplierNum + 'X')
  } else if (time > 8000) {
    multiplierNum = 1;
    multiplierText.setText(multiplierNum + 'X')
  };
} //*** END scoreMultiplier
