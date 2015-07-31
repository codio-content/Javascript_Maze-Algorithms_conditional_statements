var fs = require('fs');

keyPressedEvent  = null;
global.player = {};

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-4.js', 'utf8');
  eval(data);
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
  var _else = false;
    
  if(typeof keyPressedEvent  == 'function') {

    global.showMessage = function (val) {
      _else = true;
    }        
    
    
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('LEFT');
    
    if(!_left || _else) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
    

    player.moveRight = function () {
      _right = true;
    }

    keyPressedEvent('RIGHT');
    
    if(!_right || _else) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
    

    player.moveUp = function () {
      _up = true;
    }

    keyPressedEvent('UP');

    if(!_up || _else) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
    
    
    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('DOWN');

    if(!_down || _else) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
    
    _left = false;
    _right = false;
    _up = false;
    _down = false;    

    keyPressedEvent('C');
    
    if(_left || _right || _up || _down || !_else) {
      process.stdout.write('Not quite right, try again!');  
      process.exit(1);
    }   
  }
  else {
    process.stdout.write('Not quite right, try again!');  
    process.exit(1);
  }
  
  process.stdout.write('Well done!');  
  process.exit(0);
  
}
catch(e) {
//   console.log(e);
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
  