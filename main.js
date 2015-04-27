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
lib.dialogue = function(e, className) { 
	var answer1 = $("."+ className).html()
	$("#story-text").animate({opacity: 0}, function(){$(this).html(answer1)}).animate({opacity: 1})
	$("."+ className+":first").remove()
	if (!$("."+ className).length) {
		$(e.target).removeClass("btn-default").addClass("btn-info")
	}
}

lib.makeCadetButtons = function () {
  var buttons = $("<div id='cadet-buttons'></div>");
  buttons.append(lib.makeCadetButton('Glint'));
  buttons.append(lib.makeCadetButton('Ziggy'));
  buttons.append(lib.makeCadetButton('Valnos'));
  $("body").append(buttons);
};

lib.makeCadetButton = function(cadetName) {
  // cadetName is either 'Glint', 'Ziggy', 'Valnos'
  var button = $();
  if (state[cadetName].status == "available") {
    var button = $("<button>" + cadetName + "</button>"); //Put image here
    var content = $("#" + cadetName + "-dialogue").text() || cadetName + " has nothing to add";
    button.popover({
      placement: "top",
      title: cadetName + " says:",
      content: content
    });
  }
  return button;
};
// EDIT THIS //////////////
// initialState is how you want the state to be at the beginning of the game.
var initialState = {
	Glint: {
		status: "Invisible", 
		Loyalty: 5
		
	},
	Valnos: {
		status: "Invisible", 
		Loyalty: 5
		
	},
	Ziggy: {
		status: "Invisible", 
		Loyalty: 5
		
	},
  crewMorale: 6,
  vore: 0,
  piety: 0,
  raptorians: 3,
  delay: 0,
  game: 0,
  inventory: []
}
///////////////////////////

var parts = document.location.href.split('/');
var lastPart = parts[parts.length-1];
state = lib.load('state-'+lastPart) || initialState;

theGame = function () {
	$(".current-score").text(blah);
}

displayMoraleStatus = function () {
	if (state.crewMorale >= 9 && state.crewMorale < 13 ) {
		$(".Crew-morale-description").text("Great");
	}
	else if (state.crewMorale >= 7 && state.crewMorale < 9 ) {
		$(".Crew-morale-description").text("Good");
	  } 
	else if (state.crewMorale >= 5 && state.crewMorale < 7 ) {
		$(".Crew-morale-description").text("Average");
	  } 
	else if (state.crewMorale >= 3 && state.crewMorale < 5 ) {
		$(".Crew-morale-description").text("Poor");
	  } 
	  else if (state.crewMorale >= 1 && state.crewMorale < 3 ) {
		$(".Crew-morale-description").text("Mutinous");
	  } 
	   else if (state.crewMorale >= -5 && state.crewMorale < 1 ) {
		$(".Crew-morale-description").text("Open rebellion");
	  } 
	}


moraleFailureCheck = function() {
	if (state.crewMorale < -4) {
	document.location.href = '/terrible-end.html'; }
}
$(document).ready(function() {
  // EDIT THIS ///////////////
  // Code you want to run at the beginning of every page load goes here.
  // For example, code that tests the state to see if morale is low enough to redirect you to an ending.
lib.makeCadetButtons();
 
  
  console.log('Current state:', JSON.stringify(state, null, '\t'))
  
  ////////////////////////////
});