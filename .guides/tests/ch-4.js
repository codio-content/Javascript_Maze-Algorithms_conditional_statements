
$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {

  // Set up game
  createEmptyMaze(16, 8) 
  addPlayer(6, 4)

  // console.log(_commands);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, "Test not implemented yet. Coming soon.");  
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});