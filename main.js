

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

//Clear has been added as means to test clearing local storage better. Use with lib.clear()
lib.clear = function() {
    localStorage.clear();
    state = initialState;
}

lib.goTo = function (href) {
	
	if (offList == null) {
		var officerX = 0;
	}
	else {officerX = offList}
  var parts = href.split('/');
  var lastPart = parts[parts.length-1];
  lib.save('state-'+lastPart, state);
  lib.save('offData-'+lastPart, officerX);
  document.location.href = href;
 // localStorage.setItem("officerData", JSON.stringify([officer3, officer, offlist.activeRoster, offlist.firstOfficer, offlist.deadRoster]));
}
lib.dialogue = function(e, className) { 
	var answer1 = $("."+ className).html()
	$("#story-text").animate({opacity: 0}, function(){$(this).html(answer1)}).animate({opacity: 1})
	/*
	$("."+ className+":first").remove();   <- What does this do? When removed stops making text get stuck on buttons you revisit to read on example lore page.
	console.log($("."+ className+":first"))
	
	/*if (!$("."+ className).length) {
		$(e.target).removeClass("btn-default").addClass("btn-info")      // feature i no longer need atm
	}
	*/
}


//new button system. 
var ziggy = {};
var glint = {};
var valnos = {};
var notCadet = {};

var checkHidden = function() {
	if (state.Ziggy.status == 'available' || 'disabled') {
			$("#Ziggy").removeClass("hidden")
			}
	if (state.Glint.status == 'available' || 'disabled') {
			$("#Glint").removeClass("hidden")
			}
	if (state.Valnos.status == 'available' || 'disabled') {
			$("#Valnos").removeClass("hidden")
			}
}

var checkHidden2 = function() {
	if (state.Ziggy.status == 'available' || 'disabled') {
			$("#ZThumb").removeClass("hidden")
			}
	if (state.Glint.status == 'available' || 'disabled') {
			$("#GThumb").removeClass("hidden")
			}
	if (state.Valnos.status == 'available' || 'disabled') {
			$("#VThumb").removeClass("hidden")
			}
}


//Test Noncadet
var cadet = [ziggy, glint, valnos, notCadet];
var createCadetButtons = function() {
	
	// Thumbnail system
	if (state.Glint.status == 'available') {
		var button = $(' <button id=GThumb>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			$(this).removeClass("new");
			$('#Glint').removeClass("noBorder");
			$('#Glint').addClass("border");
			$('#Glint').siblings().attr('disabled', true);
			$("#Gthumb").addClass("hidden")
        	$("#ZThumb, #GThumb, #VThumb").addClass("hidden")
			checkHidden();
						
			cadetIndex = 1;
			showNextDialogue();
	
      });
	  
	}
	if (state.Ziggy.status == 'available') {
		var button = $(' <button id=ZThumb>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			$(this).removeClass("new");
			$('#Ziggy').removeClass("noBorder");
			$('#Ziggy').addClass("border");
			$('#Ziggy').siblings().attr('disabled', true);
			$("#Zthumb").addClass("hidden")
        	$("#ZThumb, #GThumb, #VThumb").addClass("hidden")
			checkHidden();
			
			cadetIndex = 0;
			showNextDialogue();
	
      });
	  
	}
	if (state.Valnos.status == 'available') {
		var button = $(' <button id=VThumb>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			
			$(this).removeClass("new");
			$('#Valnos').removeClass("noBorder");
			$('#Valnos').addClass("border");
			$('#Valnos').siblings().attr('disabled', true);
			$("#Vthumb").addClass("hidden")
        	$("#ZThumb, #GThumb, #VThumb").addClass("hidden")
			checkHidden();
			
			cadetIndex = 2;
			showNextDialogue();
	
      });
	  
	}
	
	
	// .......
	if (state.Glint.status == 'available') {
		var button = $(' <button id=Glint>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			$(this).removeClass("new");
			$(this).siblings().attr('disabled', true);
			cadetIndex = 1;
			showNextDialogue();
			});
			button.popover(options)
	}
	if (state.Ziggy.status == 'available') {
		var button = $(' <button id=Ziggy>  </button> ')
		$('#cadetButtons').append(button)
		button.on('click', function() {
			
			$(this).removeClass("new");
			$(this).siblings().attr('disabled', true);
			cadetIndex = 0;
			showNextDialogue();
			});
			button.popover(options)
	}

	if (state.Valnos.status == 'available') {
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
	
	
	
}
//test non-Cadet
var testCadet = function() {
if (state.Valnos.status == 'available') {
		var button = $(' <img class=NotCadet src=""></img> ')
		$('#testbutton').append(button)
		
			button.popover(options2)	
			
	}
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


//Test Noncadet
var options2 = {
    container: 'body',
    placement: 'right',
    content: function() {
		 
        return cadet[cadetIndex].banter[i].text; 
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
		
		
		checkHidden2();
		$('#ZThumb, #GThumb, #VThumb').attr('disabled', false);
		$('#Ziggy, #Glint, #Valnos').addClass("hidden");
        $('#Ziggy, #Glint, #Valnos').attr('disabled', false);
		$('#Ziggy, #Glint, #Valnos').addClass("noBorder");
		$('#Ziggy, #Glint, #Valnos').removeClass("border");
        return;
    }
    
    $(banter[i].target).popover('show');
	if (banter[i].imageClass) {
		$(banter[i].target).addClass(banter[i].imageClass)
	}
    i += 1;
};


var newDialogue = function () {
$("#ZThumb").addClass("new")
$("#GThumb").addClass("new")
$("#VThumb").addClass("new")
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
		Experience: 5
		
	},
	Valnos: {
		status: "Invisible", 
		Experience: 5
		
	},
	Ziggy: {
		status: "Invisible", 
		Experience: 5
		
	},
	NonCadet: {
		
		
		
	},
  crewMorale: 6,
  shipHealth: 10,
  crewLoss: 0,
  crewLossBattle: 0,
  supplies: 10,
  vore: 0,
  days: 0,
  piety: 0,
  raptorians: 3,
  scoutNumber: 3,
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
  chapter: [],
  preludeScore: 0,
  wulfCaptain: 0,
  wulfQuestions: [],
  battle: [],
  auto: [],
  locations: [],
  visited: [],
  destination: []
}

///////////////////////////


var parts = document.location.href.split('/');
var lastPart = parts[parts.length-1];
state = lib.load('state-'+lastPart) || initialState;






 displayDays = function () {
$(".days").text(state.days).css('color', 'white');
	}
	
 displayCrew = function () {
$(".crew").text(state.crewLoss);
	}
	
 displayMorale = function () {
$(".morale").text(state.crewMorale);
	}

	
displayHealth = function () {

	if (state.injuries == 0 ) {
		$(".health").text("You've been careful and made it through unscathed and without injury. 'Better safe then sorry'!")
	}
	else if (state.injuries == 1) {
		$(".health").text("You've recieved a bump, easily healed however. Expected in the line of duty.")
	  } 
	else if (state.injuries == 2) {
		$(".health").text("You've put yourself on the forefront of danger and it shows. But whats another scar?")
	  } 
	else if (state.injuries == 3) {
		$(".health").text("You've been injured more then anyone on the crew! Your body aches as it tries to keep up with your will.")
	  } 
	}

displayMoraleStatus = function () {

	if (state.crewMorale >= 10 && state.crewMorale < 13 ) {
		$(".Crew-morale-description").text("Soaring").css('color', 'darkgreen');
	}
	else if (state.crewMorale >= 8 && state.crewMorale < 10 ) {
		$(".Crew-morale-description").text("Good").css('color', 'green');
	  } 
	else if (state.crewMorale >= 6 && state.crewMorale < 8 ) {
		$(".Crew-morale-description").text("Steady").css('color', 'green');
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
		$(".Crew-morale-description").text("Rebellious").css('color', 'red');
	  } 
	}
displayShipStatus = function () {

	if (state.shipHealth >= 9 && state.shipHealth < 13 ) {
		$(".Ship-Health-description").text("Great").css('color', 'darkgreen');
	}
	else if (state.shipHealth >= 7 && state.shipHealth < 9 ) {
		$(".Ship-Health-description").text("Serviceable").css('color', 'green');
	  } 
	else if (state.shipHealth >= 5 && state.shipHealth < 7 ) {
		$(".Ship-Health-description").text("Lightly damaged").css('color', 'Yellow');
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
	
	displayShedule = function () {

	if (state.delay == 0 ) {
		$(".schedule").text("On Schedule").css('color', 'white');
	}
	else if (state.delay == 1) {
		$(".schedule").text("Behind Schedule").css('color', 'Yellow');
	  } 
	else if (state.delay == 2) {
		$(".schedule").text("Running late").css('color', 'Orange');
	  } 
	else if (state.delay == 3) {
		$(".schedule").text("Very Late").css('color', 'Red');
	  } 
	else if (state.delay == 4) {
		$(".schedule").text("Extremely late").css('color', 'Red');
	  } 
	}
	function removeLore() {
    var elem = document.getElementById('lore');
    elem.parentNode.removeChild(elem);
    return false;
	}
	
	loreButton = function () {
	var button = $(' <button class="btn btn-default" id=lore>Lore</button> ')
		$('#head').append(button)
		button.on('click', function() {
		
		window.open('Lore.html')	
	
      });
}


saveButton = function () {
	var button = $(' <button class="btn btn-default" id=save>Save</button> ')
		$('#head').append(button)
		xSave = state;
		button.on('click', function() {
		
		Cookies.set('save', JSON.stringify(xSave), { expires: 365, path: '/' });
		Cookies.set('save2', JSON.stringify(offList.activeRoster), { expires: 365, path: '/' });
		Cookies.set('save3', JSON.stringify(offList.deadRoster), { expires: 365, path: '/' });
		Cookies.set('save4', JSON.stringify(offList.firstOfficer), { expires: 365, path: '/' });
      });
}


/*

	Cookies.set('save2', JSON.stringify(offList.activeRoster), { expires: 365, path: '/' });
		
		Cookies.set('save4', JSON.stringify(offList.firstOfficer), { expires: 365, path: '/' });


moraleFailureCheck = function() {
	if (state.crewMorale < -4) {
	document.location.href = '/terrible-end.html'; }
}
*/
	currentPage = function () {
	$('.sub').on('click', function() {
	$("ul").find(".current").removeClass("current");
	$(this).addClass("current");
	
	
	$(this).parent().removeClass("current");
	});
	}


$(document).ready(function() {
  // EDIT THIS ///////////////
  // Code you want to run at the beginning of every page load goes here.
  // For example, code that tests the state to see if morale is low enough to redirect you to an ending.
// lib.makeCadetButtons();
 createCadetButtons();
 loreButton();
 saveButton();
 var officerX;
 newDialogue();
  console.log('Current state:', JSON.stringify(state, null, '\t'))
  $('#Ziggy, #Glint, #Valnos').addClass("hidden");
  $('#Ziggy, #Glint, #Valnos').addClass("noBorder");
  ////////////////////////////
});