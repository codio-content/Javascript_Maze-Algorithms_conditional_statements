
var fs = require('fs');

keyPressedEvent  = null;

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-8.js', 'utf8');
  eval(data);
  
  var _if = false;
  var _elseIf = false;
  var _else = false;
  
  if(typeof turnTaken == 'function') {
  
    global.showMessage = function(val) {
      if(val.toLowerCase() == 'low energy') _if = true;
    }
    
    energy = 9;
    turnTaken();
    
    global.showMessage = function(val) {
      if(val.toLowerCase() == 'lots of energy') _elseIf = true;
    }
    
    energy = 30;
    turnTaken();

    global.showMessage = function(val) {
      if(val.toLowerCase() == 'energy ok') _else = true;
    }
    
    energy = 29;
    turnTaken();
    
    if(!_if || !_elseIf || !_else ) {
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
