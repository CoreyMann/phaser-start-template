// UI
gameUI.create = function() {
  startTime = new Date();
  multiplierStopper = 0;


  this.add.text(3, 5, 'Score:', {
    font: '15px Arial black',
    fill: '#70ac3a',
    stroke: '#fff',
    strokeThickness: 3,
  });
  scoreText = this.add.text(63, 5, score, {
    font: '15px Arial black',
    fill: '#327b2b',
    stroke: '#fff',
    strokeThickness: 3,
  });
  // this.add.text(3, 25, 'Attempts:', {
  //   font: '15px Arial black',
  //   fill: '#70ac3a',
  //   stroke: '#fff',
  //   strokeThickness: 3
  // });
  // attemptsText = this.add.text(87, 25, attempts, {
  //   font: '15px Arial black',
  //   fill: '#327b2b',
  //   stroke: '#fff',
  //   strokeThickness: 3
  // });
  multiplierText = this.add.text(190, 290, "", {
    font: '25px Arial black',
    fill: '#f1802d',
    stroke: '#fff',
    strokeThickness: 3
  });

  pauseBtn = this.add.text(220, 20, "II", {
    font: '35px Arial black',
    fill: '#fff',
    stroke: '#000',
    strokeThickness: 4
  }).setOrigin(0.5).setInteractive();

  pauseBtn.on('pointerdown', ()=> {
    togglePause();
  });
}
gameUI.update = function() {
  scoreMultiplier();
}
