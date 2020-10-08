// global variables
let gameBoot = new Phaser.Scene('boot');
let gamePreload = new Phaser.Scene('preload');
let menuMain = new Phaser.Scene('menu');
let menuInstructions = new Phaser.Scene('instructions');
let menuOptions = new Phaser.Scene('options');
let menuPause = new Phaser.Scene('pause');
let gameUI = new Phaser.Scene('ui');
let gameMusic = new Phaser.Scene('music');
let gameLevel = new Phaser.Scene('level');

let previousInputState = {
  left: 0,
  right: 0,
  up: 0,
  down: 0,
  ok: 0,
  back: 0,
  pause: 0
}
let inputState = {
  left: 0,
  right: 0,
  up: 0,
  down: 0,
  ok: 0,
  back: 0,
  pause: 0
}

let inMenu = 1;
let inGame = 0;
let difficulty = 0;
let normalMode = 1;
let menuClicked = 0;
let optionsClicked = 0;
let score = 0;
let scoreText;
let multiplierText;
let multiplierNum;
let multiplierStopper = 1;
// let attempts = 5;
// let attemptsText;

// global game options
let gameOptions = {

  // platform speed range, in pixels per second
  platformSpeedRange: [150, 150],

  // mountain speed, in pixels per second
  mountainSpeed: 20,

  // spawn range, how far should be the rightmost platform from the right edge
  // before next platform spawns, in pixels
  spawnRange: [80, 120],

  // platform width range, in pixels
  platformSizeRange: [60, 120],

  // a height range between rightmost platform and next platform to be spawned
  platformHeightRange: [10, 1],

  // a scale to be multiplied by platformHeightRange
  platformHeightScale: 20,

  // platform max and min height, as screen height ratio
  platformVerticalLimit: [0.55, 0.9],

  // player gravity
  playerGravity: 900,

  // player jump force
  jumpForce: 400,

  // player starting X position
  playerStartPosition: 30,

  // consecutive jumps allowed
  jumps: 2,

  // % of probability a coin appears on the platform
  coinPercent: 10,

  // % of probability a fire appears on the platform
  firePercent: 15
};
