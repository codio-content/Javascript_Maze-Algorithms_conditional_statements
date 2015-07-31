
var fs = require('fs');

collisionEvent = null;
var _count = 0;

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-6.js', 'utf8');
  eval(data);
      
  if(typeof collisionEvent  == 'function') {
  
    global.showMessage = function(val) {
      if(val == 'You hit : wall' || 
        val == 'You hit : monster' ||
        val == 'You hit : energy' ||
        val == 'You hit : goal')
      _count++;
    }

    collisionEvent('wall');
    collisionEvent('monster');
    collisionEvent('energy');
    collisionEvent('goal');
    
    if(_count != 4) {
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
