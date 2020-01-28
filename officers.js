 var officer = {
		arn: {
		image: '../Images/assets/Arn.png',
		name: 'Arn',
		title: 'First-Officer',
		experience: 6,
		strength: '(+++--)',
		intelligence: '(+++--)',
		charm: '(+++--)'
		},
		melon: {
		image: '../Images/assets/Melon.png',
		name: 'Melon',
		title: 'Child',
		experience: 0,
		strength: 2,
		intelligence: 2,
		charm: 7
		},
		ulv: {
		image: '../Images/assets/Ulv.png',
		name: 'Ulv',
		title: 'Ballistics Officer',
		experience: 4,
		strength: '(+++--)',
		intelligence: '(+++--)',
		charm: '(++---)'
		},
		tick: {
		image: '../Images/assets/Tick.png',
		name: 'Tick',
		title: 'Maintenance Officer',
		experience: 5,
		strength: 3,
		intelligence: 7,
		charm: 3
		},
		mirr: {
		image: '../Images/assets/Mirr.png',
		name: 'Mirr',
		title: 'Crew-Officer',
		experience: 5,
		strength: 4,
		intelligence: 5,
		charm: 6
		},
		keeper: {
		image: '../Images/assets/Keeperface.png',
		name: 'Keeper',
		title: 'Logistics-Officer',
		experience: 3,
		strength: 2,
		intelligence: 6,
		charm: 7
		},
		nyxie: {
		image: '../Images/assets/Nyxie.png',
		name: 'Nyxie',
		title: 'Navigation-Officer',
		experience: 3,
		strength: 4,
		intelligence: 6,
		charm: 5
		},
		garsch: {
		image: '../Images/assets/Garsch.png',
		name: 'Garsch',
		title: 'Arms-Officer',
		experience: 7,
		strength: 5,
		intelligence: 5,
		charm: 2
		},
		tung: {
		image: '../Images/assets/Tung.png',
		name: 'Tung',
		title: 'Arms-Officer',
		experience: 5,
		strength: '(++++-)',
		intelligence: '(++---)',
		charm: '(++---)'
		},
		evok: {
		image: '../Images/assets/Evok.png',
		name: 'Evok',
		title: 'Pack-Master',
		experience: 5,
		strength: 9,
		intelligence: 3,
		charm: 2
		},
		elda: {
		image: '../Images/assets/Eldaface.png',
		name: 'Elda',
		title: 'Pouch-Matron',
		experience: 6,
		strength: 4,
		intelligence: 5,
		charm: 6
		},
		ljus: {
		image: '../Images/assets/Priestess.png',
		name: 'Ljus',
		title: 'Soft-Spoken',
		experience: 3,
		strength: 4,
		intelligence: 5,
		charm: 8
		},
		valnos: {
		image: '../Images/assets/Valnosface.png',
		name: 'Valnos',
		title: 'Cadet',
		experience: 1,
		strength: 2,
		intelligence: 5,
		charm: 5
		},
		ziggy: {
		image: '../Images/assets/Ziggyface.png',
		name: 'Ziggy',
		title: 'Cadet',
		experience: 1,
		strength: 4,
		intelligence: 3,
		charm: 6
		},
		glint: {
		image: '../Images/assets/Glintface.png',
		name: 'Glint',
		title: 'Cadet',
		experience: 1,
		strength: 3,
		intelligence: 4,
		charm: 5
	}
  
 }
 

 
 //Function that unhides text related to the officer chosen
 function revealText() {
	 $('.' + choiceOfficer[0].name + 'text').removeClass("hidden");
 }
 
 
 //Without prints out an array without a thing.  _.without(activeRoster, officer.tung)
 // write a function that remove(officer) and takes it away from activeRoster and adds it to Roster of the vored. like: function remove(x) { activeRoster = _.without(activeRoster, x) && deadRoster.push("x"); }
var offList = {
    activeRoster: [officer.arn, officer.keeper, officer.mirr, officer.nyxie, officer.ulv, officer.garsch, officer.elda, officer.ljus, officer.tung, officer.tick, officer.evok],
    fullRoster: [officer.valnos, officer.ziggy, officer.glint, officer.melon, officer.arn, officer.keeper, officer.mirr, officer.nyxie, officer.tick, officer.ulv, officer.garsch, officer.tung, officer.evok, officer.elda, officer.ljus,],
	firstOfficer: [officer.mirr],
	deadRoster: []
	
 }
	choiceOfficer = [];
 	officer3 = [offList.firstOfficer[0], officer.mirr, officer.ulv];
	backupOfficer = [];
	
	function removeOfficer(x) {
		
		offList.activeRoster = _.without(offList.activeRoster, x);
		offList.deadRoster.push(x);
		
	}
	
	
		
		
	
	
	function checkdeadRoster() {
		
		 for (var i = 0, l=officer3.length; i < l; i++) {
			 
			if ( _.contains(offList.deadRoster, officer3[i])) {
			var a = i;
			}
		 }
		
	 if (offList.deadRoster.indexOf(backupOfficer[0]) !== -1) 
		{
			
			officer3[a] = backupOfficer[1]
		}
		else {
			
			officer3[a] = backupOfficer[0] 
			}
	 
	}
	
	
	function officerDouble() {

		if (offList.firstOfficer[0].name == officer3[1].name && officer3[1].name == officer3[0].name)  {
		
			if (_.contains(offList.activeRoster, backupOfficer[0])) {
			officer3[1] = backupOfficer[0];
			console.log(backupOfficer[0].name)
			}
			else {
			officer3[1] = backupOfficer[1];	
			}
			
		}	
			
		if (offList.firstOfficer[0].name == officer3[2].name && officer3[2].name == officer3[0].name) {
				
			if (_.contains(offList.activeRoster, backupOfficer[0])) {
			officer3[2] = backupOfficer[0];
			console.log(backupOfficer[0].name)
			}
			else {
			officer3[2] = backupOfficer[1];	
			}
		
		}
	}
		
	
	
   /*
   Original 
    { officerDiv = $('<div class="officerObjects" id="officerObject'+key+'"><p><img class="testimage"></img><span>Name: </span><span class="name"></span><br/><span>Title:</span><span class="title"></span><br/><span>Experience: </span><span class="experience"></span><br/><span>Strength: </span><span class="strength"></span><br/><span>Intelligence: </span><span class="intelligence"></span><br/><span>Charm: </span><span class="charm"></span></p></div>'); $('#officerObject' + key).append(value); 
	 
   */
 
function officerButtonNames() { 
	$("#officer0").text(officer3[0].name) 
	$("#officer1").text(officer3[1].name) 
	$("#officer2").text(officer3[2].name) 
};
 
 function createOfficer4(officers) { 
	 if ($.isArray(officers)) {
	 
	 officers.forEach(function (officer) {
	 
	 $('.theOfficer').empty(); officers.forEach(function(value, key) { officerDiv = $('<div class="officerObjects" id="officerObject'+key+'"><p><img class="testimage"></img><span>Name: </span><span class="name"></span><br/><span>Title:</span><br/><span class="title"></span><br/><span>Strength: </span><span class="strength"></span><br/><span>Intelligence: </span><span class="intelligence"></span><br/><span>Charm: </span><span class="charm"></span></p></div>'); $('#officerObject' + key).append(value); 
	 
	
	officerDiv.find('.testimage').attr('src', value.image)	
	officerDiv.find('.title').append(value.title)
	officerDiv.find('.name').append(value.name)
	officerDiv.find('.strength').append(value.strength)
	officerDiv.find('.intelligence').append(value.intelligence)
	officerDiv.find('.charm').append(value.charm)
	$('.theOfficer').append(officerDiv)
																	});
	 	 
										} ); 
							}
	else {
				 
		$(".theOfficer").html( "<img class='testimage'></img><span>Name: </span><span class='name'></span><br/><span>Title:</span><br/><span class='title'></span><br/><span>Strength: </span><span class='strength'></span><br/><span>Intelligence: </span><span class='intelligence'></span><br/><span>Charm: </span><span class='charm'></span><br/>" );
		$(".testimage").attr('src', officers.image)
		$(".name").text(officers.name)
		$(".title").text(officers.title)
		$(".strength").text(officers.strength)
		$(".intelligence").text(officers.intelligence)
		$(".charm").text(officers.charm)
  
  

		}
							
	
	};

