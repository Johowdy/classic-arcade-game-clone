// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.reset();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //TODO-->: update Enemy location
    this.x += this.speed * dt;
    if (this.x >= 505) {
      this.reset();
    }
      //move enemy forward if not at end of game board
      //else reset enemy position to start
    //TODO-->: handle Enemy collision with Player
};
//method to set enemy's speed and place enemy to left of board
Enemy.prototype.reset = function() {
  //TODO-->: set the Enemy initial location
  this.y = 60;
  this.x = -100;
  //TODO-->: set the Enemy speed
  this.speed = 120;

}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//TODO--> :Create Player class
//TODO-->: set player initial location
  //x coordinate
  //y coordinate
//TODO-->: load sprite image

class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 375;
  }
    //display player sprite image on current x & y coordinates
    //use code from render method for the enemy
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //TODO-->: create update() method
    //check for collision with enemy using x & y coordinates
    //check for win using x & y coordinates
  update() {

  }
  //update player's x & y coordinates based on input from (event listerner)
  //keep player from moving offscreen
  //reset player's x & y coordinates to beginning (probably
  // called on in update method after win or collision?)
  handleInput(move) {
    switch(move) {
      case 'left':
        if (this.x !== 0) {
          this.x -= 100;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= 80;
        }
        if (this.y <0) {
          setTimeout(function(player) {
            player.reset()
          }, 150, this);
        }
        break;
      case 'right':
        if (this.x < 400) {
          this.x += 100;
        }
        break;
      case 'down':
        if (this.y < 375) {
          this.y += 80;
        }
    }
  }
  //method to move player back to start after win
  reset() {
    this.x = 200;
    this.y = 375;
    this.render();
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [new Enemy()];
// Place the player object in a variable called player
const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
