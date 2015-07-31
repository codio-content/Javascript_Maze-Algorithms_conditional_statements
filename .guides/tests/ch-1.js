var fs = require('fs');

keyPressedEvent  = null;
global.player = {};

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-1.js', 'utf8');
  eval(data);
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
    
  if(typeof keyPressedEvent  == 'function') {
  
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('LEFT');

    player.moveRight = function () {
      _right = true;
    }

    keyPressedEvent('RIGHT');

    player.moveUp = function () {
      _up = true;
    }

    keyPressedEvent('UP');

    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('DOWN');
    
    if(!_left || !_right || !_up || !_down) {
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
  