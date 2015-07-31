
var fs = require('fs');

collisionEvent = null;
var _count = 0;
var _last = '';
var _true = true;
global.player = {};

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-5.js', 'utf8');
  eval(data);
  
  if(typeof collisionEvent  == 'function') {
  
    global.showMessage = function(val) {
      _count++;
      _true = _true && (_last != val);
      _last = val;
    }

    collisionEvent('wall');
    collisionEvent('monster');
    collisionEvent('energy');
    collisionEvent('goal');
    
    if(_count != 4 || !_true) {
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
