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


//new button system. 
var ziggy = {};
var glint = {};
var valnos = {};

var cadet = [ziggy, glint, valnos];
var createCadetButtons = function() {
	//Test thumbnail buttons
	if (state.Glint.status == 'available') {
	var button = $(' <button id=GlintThumb>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
		$("#GlintThumb").addClass("hidden")
		$("#Glint").removeClass("hidden")
		cadetIndex = 1;
		showNextDialogue();
		
		};
	}
	if (state.Ziggy.status == 'available') {
	var button = $(' <button id=ZiggyThumb>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
		$("#ZiggyThumb").addClass("hidden")
		$("#Ziggy").removeClass("hidden")
		cadetIndex = 0;
		showNextDialogue();
		}
	}
		if (state.Valnos.status == 'available') {
	var button = $(' <button id=ValnosThumb>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
		$("#ValnosThumb").addClass("hidden")
		$("#Valnos").removeClass("hidden")
		cadetIndex = 2;
		showNextDialogue();
		}
	
	}
	
	 
	
		var button = $(' <button id=Glint>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			
			$(this).removeClass("new");
			$(this).siblings().attr('disabled', true);
			cadetIndex = 1;
			showNextDialogue();
			});
			button.popover(options)
	
	
		var button = $(' <button id=Ziggy>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			
			$(this).removeClass("new");
			$(this).siblings().attr('disabled', true);
			cadetIndex = 0;
			showNextDialogue();
			});
			button.popover(options)
	


		var button = $(' <button id=Valnos>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			
			$(this).removeClass("new");
			$(this).siblings().attr('disabled', true);
			cadetIndex = 2;
			showNextDialogue();
			});
			button.popover(options)
	
}
var cadetIndex;
var i = 0;

var options = {
    container: 'body',
    placement: 'top',
    content: function() {
		if (cadet[cadetIndex].banter[i].text == undefined) {    //This part doesent work.
			"Cadet has nothing to say"
		}
		else { 
        return cadet[cadetIndex].banter[i].text; }
    }, 
    trigger: 'manual'
};


var showNextDialogue = function () {
	
	
    var banter = cadet[cadetIndex].banter;
    var previousTarget = null;
    if(i > 0) {
        var previousTarget = banter[i-1].target; 
    } 
    var currentTarget = null
    if (banter.length > i) {
       var currentTarget = banter[i].target; 
    }
	if (i > 0 && banter[i-1].imageClass) {
		$(banter[i-1].target).removeClass(banter[i-1].imageClass)
	}
    // if this isn't the first line, 
    // and this line isn't being spoken by the same person as the last line,
    // then hide the previous line
    if(i > 0 && previousTarget !== currentTarget) {
        $(banter[i-1].target).popover('hide');
		console.log('checkcheck', previousTarget, currentTarget, banter, i)
    }
    // if i has gone beyond the size of the banter array
    if(i >= banter.length) {
        // reset i, stop the popover from being shown
        i = 0;
        $('#Ziggy, #Glint, #Valnos').attr('disabled', false);
        return;
    }
    
    $(banter[i].target).popover('show');
	if (banter[i].imageClass) {
		$(banter[i].target).addClass(banter[i].imageClass)
	}
    i += 1;
};
var newDialogue = function () {
$("#Ziggy").addClass("new")
$("#Glint").addClass("new")
$("#Valnos").addClass("new")
}
// Old button system. 
/*

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
    var content = $("#" + cadetName + "-dialogue").html() || cadetName + " has nothing to add";
    button.popover({
      placement: "top",
      title: cadetName + " says:",
      content: content,
	  html: true
	
    });
  }
  return button;
};
*/
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
  shipHealth: 10,
  vore: 0,
  piety: 0,
  raptorians: 3,
  injuries: 0,
  delay: 0,
  game: 0,
  flock: {
	avolc: 0,
	ziggy: 0,
	arn: 0,
	keeper: 0,
	team: 0,
	opponent: 0,
	cardMatron: 1,
	cardHigh: 2,
	cardLow: 3,
  },

  inventory: [],
  preludeEvents: [],
  events: [],
  preludeScore: 0,
  wulfCaptain: 0,
  wulfQuestions: [],
  battle: []
}
///////////////////////////

var parts = document.location.href.split('/');
var lastPart = parts[parts.length-1];
state = lib.load('state-'+lastPart) || initialState;



displayMoraleStatus = function () {
	console.trace();
	if (state.crewMorale >= 10 && state.crewMorale < 13 ) {
		$(".Crew-morale-description").text("Soaring").css('color', 'darkgreen');;
	}
	else if (state.crewMorale >= 8 && state.crewMorale < 10 ) {
		$(".Crew-morale-description").text("Good").css('color', 'green');;
	  } 
	else if (state.crewMorale >= 6 && state.crewMorale < 8 ) {
		$(".Crew-morale-description").text("Normal").css('color', 'green');;
	  } 
	else if (state.crewMorale >= 5 && state.crewMorale < 6 ) {
		$(".Crew-morale-description").text("Shaky").css('color', 'Orange');
	  } 
	else if (state.crewMorale >= 3 && state.crewMorale < 5 ) {
		$(".Crew-morale-description").text("Poor").css('color', 'Orange');
	  } 
	  else if (state.crewMorale >= 1 && state.crewMorale < 3 ) {
		$(".Crew-morale-description").text("Terrible!").css('color', 'red');
	  } 
	   else if (state.crewMorale >= -5 && state.crewMorale < 1 ) {
		$(".Crew-morale-description").text("Open rebellion").css('color', 'red');
	  } 
	}
displayShipStatus = function () {
	console.trace();
	if (state.shipHealth >= 9 && state.shipHealth < 13 ) {
		$(".Ship-Health-description").text("Great").css('color', 'darkgreen');
	}
	else if (state.shipHealth >= 7 && state.shipHealth < 9 ) {
		$(".Ship-Health-description").text("Serviceable").css('color', 'green');
	  } 
	else if (state.shipHealth >= 5 && state.shipHealth < 7 ) {
		$(".Ship-Health-description").text("Poor").css('color', 'Yellow');
	  } 
	else if (state.shipHealth >= 3 && state.shipHealth < 5 ) {
		$(".Ship-Health-description").text("Listing in the water").css('color', 'Orange');
	  } 
	  else if (state.shipHealth >= 1 && state.shipHealth < 3 ) {
		$(".Ship-Health-description").text("Taking on water!").css('color', 'OrangeRed');
	  } 
	   else if (state.shipHealth >= -5 && state.shipHealth < 1 ) {
		$(".Ship-Health-description").text("About to sink!").css('color', 'red');
	  } 
	  else if (state.shipHealth < -5 ) {
		$(".Ship-Health-description").text("Floating wreckage").css('color', 'red');
	  } 
	}

/*
moraleFailureCheck = function() {
	if (state.crewMorale < -4) {
	document.location.href = '/terrible-end.html'; }
}
*/
$(document).ready(function() {
  // EDIT THIS ///////////////
  // Code you want to run at the beginning of every page load goes here.
  // For example, code that tests the state to see if morale is low enough to redirect you to an ending.
// lib.makeCadetButtons();
 createCadetButtons();
 
  console.log('Current state:', JSON.stringify(state, null, '\t'))
  
  ////////////////////////////
});