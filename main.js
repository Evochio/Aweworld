lib = {}

lib.load = function (key) {
  var value = localStorage.getItem(key);
  try {
    value = JSON.parse(value);
    return value;
  }
  catch (SyntaxError) {
    return null;
  }
}

lib.save = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
};

lib.goTo = function (href) {
  var parts = href.split('/');
  var lastPart = parts[parts.length-1];
  lib.save('state-'+lastPart, state);
  document.location.href = href;
}


// EDIT THIS //////////////
// initialState is how you want the state to be at the beginning of the game.
var initialState = {
  crewMorale: 6,
  vore: 0,
  piety: 0,
  raptorians: 3,
  delay: 0,
  inventory: []
}
///////////////////////////

var parts = document.location.href.split('/');
var lastPart = parts[parts.length-1];
state = lib.load('state-'+lastPart) || initialState;

displayMoraleStatus = function () {
	if (state.crewMorale >= 7 && state.crewMorale < 9 ) {
		$(".Crew-morale-description").text("Good");
	  } 
	else if (state.crewMorale >= 5 && state.crewMorale < 7 ) {
		$(".Crew-morale-description").text("Average");
	  } 
	else if (state.crewMorale >= 3 && state.crewMorale < 5 ) {
		$(".Crew-morale-description").text("Poor");
	  } 
	}

$(document).ready(function() {
  // EDIT THIS ///////////////
  // Code you want to run at the beginning of every page load goes here.
  // For example, code that tests the state to see if morale is low enough to redirect you to an ending.
  
  if (state.crewMorale < -4) {
    document.location.href = '/terrible-end.html';
  }
  
  console.log('Current state:', JSON.stringify(state, null, '\t'))
  
  ////////////////////////////
});