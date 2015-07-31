var fs = require('fs');

keyPressedEvent  = null;
global.player = {};

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-2.js', 'utf8');
  eval(data);
        
  var _left = false;
    
  if(typeof keyPressedEvent  == 'function') {
  
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('LEFT');
    
    if(!_left) {
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
//   console.log(e.message);
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
  