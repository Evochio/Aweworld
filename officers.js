 var officer = {
		avolc: {
		image: '../Images/assets/AvolcFace.png',
		image2: '../Images/assets/AvolcFaceflip.png',
		name: 'Avolc',
		title: 'Captain',
		experience: 7,
		martial: '[++++--]',
		technical: '[++++--]',
		diplomacy: '[++++--]'
		},
		arn: {
		image: '../Images/assets/Arn.png',
		name: 'Arn',
		title: 'First-Officer',
		experience: 6,
		martial: '(+++--)',
		technical: '(+++--)',
		diplomacy: '(+++--)'
		},
		melon: {
		image: '../Images/assets/Melon.png',
		name: 'Melon',
		title: 'Child',
		experience: 0,
		martial: '(+----)',
		technical: '(-----)',
		diplomacy: '(+++++)'
		},
		ulv: {
		image: '../Images/assets/Ulv.png',
		name: 'Ulv',
		title: 'Ballistics Officer',
		experience: 4,
		martial: '(++++-)',
		technical: '(+++--)',
		diplomacy: '(++---)'
		},
		tick: {
		image: '../Images/assets/Tick.png',
		name: 'Tick',
		title: 'Maintenance Officer',
		experience: 5,
		martial: '(++---)', //3
		technical: '(+++++)', //7
		diplomacy: '(++---)' //3
		},
		mirr: {
		image: '../Images/assets/Mirr.png',
		name: 'Mirr',
		title: 'Crew-Officer',
		experience: 5,
		martial: '(++---)', //4
		technical: '(+++--)', //5
		diplomacy: '(++++-)' //6
		},
		keeper: {
		image: '../Images/assets/Keeperface.png',
		name: 'Keeper',
		title: 'Logistics-Officer',
		experience: 3, 
		martial: '(++---)', //2
		technical: '(++---)', //6
		diplomacy: '(++++-)' //7
		},
		nyxie: {
		image: '../Images/assets/Nyxie.png',
		name: 'Nyxie',
		title: 'Navigation-Officer',
		experience: 3,
		martial: '(++---)', //4
		technical: '(++++-)', //6
		diplomacy: '(+++--)' //5
		},
		garsch: {
		image: '../Images/assets/Garsch.png',
		name: 'Garsch',
		title: 'Arms-Officer',
		experience: 7,
		martial: '(+++++)', //5
		technical: '(+++--)', //5
		diplomacy: '(++---)' //2
		},
		tung: {
		image: '../Images/assets/Tung.png',
		name: 'Tung',
		title: 'Arms-Officer',
		experience: 5,
		martial: '(++++-)', 
		technical: '(++---)',
		diplomacy: '(++---)'
		},
		evok: {
		image: '../Images/assets/Evok.png',
		name: 'Evok',
		title: 'Pack-Master',
		experience: 5,
		martial: '[++++++]',
		technical: '(+----)',
		diplomacy: '(++---)'
		},
		elda: {
		image: '../Images/assets/Eldaface.png',
		name: 'Elda',
		title: 'Pouch-Matron',
		experience: 6,
		martial: '(+----)', //4
		technical: '(++----)', //5
		diplomacy: '(+++++)' //6
		},
		ljus: {
		image: '../Images/assets/Priestess.png',
		name: 'Ljus',
		title: 'Soft-Spoken',
		experience: 3,
		martial: '(++---)', //4
		technical: '(++---)', //5
		diplomacy: '(++++-)' //8
		},
		krel: {
		image: '../Images/assets/ScoutM.png',
		name: 'Krel',
		title: 'Scout-Master',
		experience: 3,
		martial: '(+++--)', //4
		technical: '(++++-)', //6
		diplomacy: '(++---)' //3
		},
		valnos: {
		image: '../Images/assets/Valnosface.png',
		name: 'Valnos',
		title: 'Cadet',
		experience: 1,
		martial: '(+----)', //2
		technical: '(+++--)', //5
		diplomacy: '(++---)' //5
		},
		ziggy: {
		image: '../Images/assets/Ziggyface.png',
		name: 'Ziggy',
		title: 'Cadet',
		experience: 1,
		martial: '(+++--)', //4
		technical: '(++---)', //3
		diplomacy: '(++---)' //6
		},
		glint: {
		image: '../Images/assets/Glintface.png',
		name: 'Glint',
		title: 'Cadet',
		experience: 1,
		martial: '(++---)', //
		technical: '(++---)', //
		diplomacy: '(+++--)' // 5
	}
  
 }
 

 
 //Function that unhides text related to the officer chosen
 function revealText() {
	 $('.' + choiceOfficer[0].name + 'text').removeClass("hidden");
 }
 
 
 //Without prints out an array without a thing.  _.without(activeRoster, officer.tung)
 // write a function that remove(officer) and takes it away from activeRoster and adds it to Roster of the vored. like: function remove(x) { activeRoster = _.without(activeRoster, x) && deadRoster.push("x"); }
var offList = {
    activeRoster: [officer.arn, officer.keeper, officer.mirr, officer.nyxie, officer.ulv, officer.garsch, officer.elda, officer.ljus, officer.tung, officer.tick, officer.evok, officer.krel],
    fullRoster: [officer.valnos, officer.ziggy, officer.glint, officer.melon, officer.arn, officer.keeper, officer.mirr, officer.nyxie, officer.tick, officer.ulv, officer.garsch, officer.tung, officer.evok, officer.elda, officer.ljus,],
	firstOfficer: [officer.garsch],
	deadRoster: []
	
 }
	choiceOfficer = [];
 	officer3 = [offList.firstOfficer[0], officer.mirr, officer.ulv];
	backupOfficer = [];
	
	function removeOfficer(x) {
		
		offList.activeRoster = _.without(offList.activeRoster, x);
		offList.deadRoster.push(x);
		
	}

///////////////////////////////	
load = function (key) {
  var value = localStorage.getItem(key);
  try {
    value = JSON.parse(value);
    return value;
  }
  catch (SyntaxError) {
    return null;
  }
}
	
	
var parts2 = document.location.href.split('/');
var lastPart2 = parts2[parts2.length-1];
offList = load('offData-'+lastPart2) || offList;
///////////////////////////////	
	/*
		function officerData() {
			officerX = offList
			
		}
		
	*/
	
	if ( state.vore > 6 ) {
		officer.avolc.image = '../Images/assets/AvolcFace3.png'
		officer.avolc.image2 = '../Images/assets/AvolcFace3flip.png'
	}
	if ( state.vore > 2 ) {
		officer.avolc.image = '../Images/assets/AvolcFace2.png'
		officer.avolc.image2 = '../Images/assets/AvolcFace2flip.png'
	}
	
	if (_.contains(state.chapter, "nyxiefat")) {
		officer.nyxie.image = '../Images/assets/Nyxie+.png'
		officer.nyxie.diplomacy = '(++++-)'
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
		
			if (_.contains(offList.deadRoster, backupOfficer[0])) {
			officer3[1] = backupOfficer[1];	
			
			}
			else {
			officer3[1] = backupOfficer[0];
			}
			
		}	
			
		if (offList.firstOfficer[0].name == officer3[2].name && officer3[2].name == officer3[0].name) {
				
			if (_.contains(offList.deadRoster, backupOfficer[0])) {
			
			officer3[2] = backupOfficer[1];	
			}
			else {
			officer3[2] = backupOfficer[0];
			}
		
		}
	}
		
	
	
   /*
   Original 
    { officerDiv = $('<div class="officerObjects" id="officerObject'+key+'"><p><img class="testimage"></img><span>Name: </span><span class="name"></span><br/><span>Title:</span><span class="title"></span><br/><span>Experience: </span><span class="experience"></span><br/><span>Martial: </span><span class="martial"></span><br/><span>Technical: </span><span class="technical"></span><br/><span>Diplomacy: </span><span class="diplomacy"></span></p></div>'); $('#officerObject' + key).append(value); 
	 
   */
 
function officerButtonNames() { 
	$("#officer0").text(officer3[0].name) 
	$("#officer1").text(officer3[1].name) 
	$("#officer2").text(officer3[2].name) 
};
 
 function createOfficer4(officers) { 
	 if ($.isArray(officers)) {
	 
	 officers.forEach(function (officer) {
	 
	 $('.theOfficer').empty(); officers.forEach(function(value, key) { officerDiv = $('<div class="officerObjects" id="officerObject'+key+'"><p><img class="testimage"></img><span>Name: </span><span class="name"></span><br/><span>Title:</span><br/><span class="title"></span><br/><span>Martial: </span><span class="martial"></span><br/><span>Technical: </span><span class="technical"></span><br/><span>Diplomacy: </span><span class="diplomacy"></span></p></div>'); $('#officerObject' + key).append(value); 
	 
	
	officerDiv.find('.testimage').attr('src', value.image)	
	officerDiv.find('.title').append(value.title)
	officerDiv.find('.name').append(value.name)
	officerDiv.find('.martial').append(value.martial)
	officerDiv.find('.technical').append(value.technical)
	officerDiv.find('.diplomacy').append(value.diplomacy)
	$('.theOfficer').append(officerDiv)
																	});
	 	 
										} ); 
							}
	else {
				 
		$(".theOfficer").html( "<img class='testimage'></img><span>Name: </span><span class='name'></span><br/><span>Title:</span><br/><span class='title'></span><br/><span>Martial: </span><span class='martial'></span><br/><span>Technical: </span><span class='technical'></span><br/><span>Diplomacy: </span><span class='diplomacy'></span><br/>" );
		$(".testimage").attr('src', officers.image)
		$(".name").text(officers.name)
		$(".title").text(officers.title)
		$(".martial").text(officers.martial)
		$(".technical").text(officers.technical)
		$(".diplomacy").text(officers.diplomacy)
  
  

		}
							
	
	};

