 var officer = {
		arn: {
		image: '../Images/assets/Arnface.png',
		name: 'Arn',
		title: 'First-Officer',
		experience: 6,
		strength: 5,
		intelligence: 4,
		charm: 5
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
		strength: 5,
		intelligence: 4,
		charm: 5
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
		title: 'Logistics Officer',
		experience: 3,
		strength: 2,
		intelligence: 6,
		charm: 7
		},
		nyxie: {
		image: '../Images/assets/Nyxie.png',
		name: 'Nyxie',
		title: 'Navigation Officer',
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
		strength: 5,
		intelligence: 4,
		charm: 4
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
    activeRoster = [officer.arn, officer.keeper, officer.mirr, officer.nyxie, officer.tick, officer.ulv, officer.garsch, officer.tung, officer.evok, officer.elda, officer.ljus,];
    fullRoster = [officer.valnos, officer.ziggy, officer.glint, officer.melon, officer.arn, officer.keeper, officer.mirr, officer.nyxie, officer.tick, officer.ulv, officer.garsch, officer.tung, officer.evok, officer.elda, officer.ljus,];
	firstOfficer = [officer.arn];
	officer3 = [firstOfficer[0], officer.mirr, officer.glint];
   
   /*
   Original 
    { officerDiv = $('<div class="officerObjects" id="officerObject'+key+'"><p><img class="testimage"></img><span>Name: </span><span class="name"></span><br/><span>Title: </span><span class="title"></span><br/><span>Experience: </span><span class="experience"></span><br/><span>Strength: </span><span class="strength"></span><br/><span>Intelligence: </span><span class="intelligence"></span><br/><span>Charm: </span><span class="charm"></span></p></div>'); $('#officerObject' + key).append(value); 
	 
   */
 
function officerButtonNames() { 
	$("#officer0").text(officer3[0].name) 
	$("#officer1").text(officer3[1].name) 
	$("#officer2").text(officer3[2].name) 
};
 
 function createOfficer4(officers) { 
	 if ($.isArray(officers)) {
	 
	 officers.forEach(function (officer) {
	 
	 $('.theOfficer').empty(); officers.forEach(function(value, key) { officerDiv = $('<div class="officerObjects" id="officerObject'+key+'"><p><img class="testimage"></img><span>Name: </span><span class="name"></span><br/><span>Title: </span><span class="title"></span><br/><span>Experience: </span><span class="experience"></span><br/><span>Strength: </span><span class="strength"></span><br/><span>Intelligence: </span><span class="intelligence"></span><br/><span>Charm: </span><span class="charm"></span></p></div>'); $('#officerObject' + key).append(value); 
	 
	
	officerDiv.find('.testimage').attr('src', value.image)	
	officerDiv.find('.title').append(value.title)
	officerDiv.find('.name').append(value.name)
	officerDiv.find('.experience').append(value.experience)
	officerDiv.find('.strength').append(value.strength)
	officerDiv.find('.intelligence').append(value.intelligence)
	officerDiv.find('.charm').append(value.charm)
	$('.theOfficer').append(officerDiv)
																	});
	 	 
										} ); 
							}
	else {
				 
		$(".theOfficer").html( "<img class='testimage'></img><span>Name: </span><span class='name'></span><br/><span>Title: </span><span class='title'></span><br/><span>Experience: </span><span class='experience'></span><br/><span>Strength: </span><span class='strength'></span><br/><span>Intelligence: </span><span class='intelligence'></span><br/><span>Charm: </span><span class='charm'></span><br/>" );
		$(".testimage").attr('src', officers.image)
		$(".name").text(officers.name)
		$(".title").text(officers.title)
		$(".experience").text(officers.experience)
		$(".strength").text(officers.strength)
		$(".intelligence").text(officers.intelligence)
		$(".charm").text(officers.charm)
  
  

		}
							
	
	};

