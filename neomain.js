var ListofMancys = ['Illusionist', 'Elementomancy', 'Mathomancy', 'Archaeomancy', 'Protector', 'Evoker', 'Necromancy', 'Inkomancy', 'Plantomancy', 'Magehunter', 'Runner', 'Spellsword', 'Guard', 'Juggernaut', 'Auror', 'Archery', 'Duelist', 'Tactician', 'Healer', 'Alchemist', 'Exploration', 'Orator', 'Performer', 'Artist', 'Commander', 'Stealth', 'Poisoner'];
var ListofCtypes = ['Mathomancy', 'Protector', 'Plantomancy', 'Spellsword', 'Auror', 'Duelist', 'Alchemist', 'Artist', 'Commander'];

var Attr1Array = ["Attr1-Attr3", "Attr1-Attr4"];
var Attr2Array = ["Attr2-Attr7", "Attr2-Attr8"];
var Attr3Array = ["Attr3-Attr5"];
var Attr4Array = ["Attr4-Attr5"];
var Attr5Array = ["Attr5-Attr6"];
var Attr6Array = [], Attr9Array = [];
var Attr7Array = ["Attr7-Attr9"];
var Attr8Array =["Attr8-Attr9"];

var A1LinesType2 = ["Attr1-Attr2", "Attr1-Attr3", "Attr1-Attr4"];
var A2LinesType2 = ["Attr2-Attr5"];
var A3LinesType2 = ["Attr3-Attr7", "Attr3-Attr6"];
var A4LinesType2 = ["Attr4-Attr6"];
var A5LinesType2 = [], A9LinesType2 =[];
var A6LinesType2 = ["Attr6-Attr8"];
var A7LinesType2 = ["Attr7-Attr9"];
var A8LinesType2 = ["Attr8-Attr9"];

var A1LinesType3 = ["Attr1-Attr3"];
var A2LinesType3 = ["Attr2-Attr4"];
var A3LinesType3 = ["Attr3-Attr4", "Attr3-Attr5"];
var A4LinesType3 = ["Attr4-Attr6"];
var A5LinesType3 = ["Attr5-Attr7"];
var A6LinesType3 = ["Attr6-Attr8", "Attr6-Attr9"];
var A7LinesType3 = ["Attr7-Attr9"];
var A8LinesType3 = [], A9LinesType3 = [];

var LineMasterArray = [Attr1Array, Attr2Array, Attr3Array, Attr4Array, Attr5Array, Attr6Array, Attr7Array, Attr8Array, Attr9Array];
var LMArrayType2 = [A1LinesType2, A2LinesType2, A3LinesType2, A4LinesType2, A5LinesType2, A6LinesType2, A7LinesType2, A8LinesType2, A9LinesType2];
var LMArrayType3 = [A1LinesType3, A2LinesType3, A3LinesType3, A4LinesType3, A5LinesType3, A6LinesType3, A7LinesType3, A8LinesType3, A9LinesType3];

var Passer;

const ButtonMasterArray = {
	Attr1: 0,
	Attr2: 1,
	Attr3: 2,
	Attr4: 3,
	Attr5: 4,
	Attr6: 5,
	Attr7: 6,
	Attr8: 7,
	Attr9: 8
};
let BtnObjSuprArray = [{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false},
	{ Attr1: false, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false}];

var LockedButtons = [
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false],
	[false, false, false, false, false, false, false, false, false]
	];

var MITOsuperArray = [{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: true, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false },
	{ Attr1: true, Attr2: false, Attr3: false, Attr4: false, Attr5: false, Attr6: false, Attr7: false, Attr8: false, Attr9: false }];

let myPoints = 99;

function newPower(e, my){
	let myprefix = getmyID(my);
	let myE = myprefix + e;
    let bfs = "";
	let cbs = "";
	let myButton = document.getElementById(myE);
	let TheColor = getMyColor(my);
if(BtnObjSuprArray[my][e] == false){
	if(myPoints <= 0){ console.log("no points"); return; }	
	if(MITOsuperArray[my][e] == true) {
		BtnObjSuprArray[my][e] = true;
		if(getMyTreeType(my) == 'A') {
		bfs = ButtonFlagSetter(e, my);
		myButton.style.backgroundColor = TheColor;
	    // myButton.style.border = "7px "+TheColor;
		pointUsed();
		Passer = getMyArray(e, my);
		LineLighter(Passer, BtnObjSuprArray[my][e], myprefix, TheColor);
		}
		else if (getMyTreeType(my) == 'B'){
			bfs = bfsTypeTwo(e, my);
			myButton.style.backgroundColor = TheColor;
			pointUsed();
			Passer = getMyArray(e, my);
			LineLighter(Passer, BtnObjSuprArray[my][e], myprefix, TheColor);
		}
		else if (getMyTreeType(my) == 'C'){
			bfs = bfsTypeThree(e, my);
			myButton.style.backgroundColor = TheColor;
			pointUsed();
			Passer = getMyArray(e, my);
			LineLighter(Passer, BtnObjSuprArray[my][e], myprefix, TheColor);
		}
	
	}
	else{ console.log(e + " could not be turned on before its parent."); }

}
else if(BtnObjSuprArray[my][e] == true){
	if(LockedButtons[my][ButtonMasterArray[e]]){
		console.log('This button is LOCKED!');
		return;
	}
	if(getMyTreeType(my) === 'A'){
		if(AreMyChildsOff(e, my) == true) { 
			myButton.style.backgroundColor = "black";
			pointReturned();
			BtnObjSuprArray[my][e] = false;
			bfs = ButtonFlagSetter(e, my);
			Passer = getMyArray(e, my);
			LineLighter(Passer, BtnObjSuprArray[my][e], myprefix, TheColor);
			}
			else { console.log("childs were not off; could not turn off button."); }
	}
	else if(getMyTreeType(my) === 'B'){
		if(AMCoffTwo(e, my) == true){
		myButton.style.backgroundColor = "black";
		pointReturned();
		BtnObjSuprArray[my][e] = false;
		bfs = bfsTypeTwo(e, my);
		Passer = getMyArray(e, my);
		LineLighter(Passer, BtnObjSuprArray[my][e], myprefix, TheColor);
		}
		
	}
	else if(getMyTreeType(my) === 'C'){
		if(AMCoffThree(e, my) == true){
		myButton.style.backgroundColor = "black";
		pointReturned();
		BtnObjSuprArray[my][e] = false;
		bfs = bfsTypeThree(e, my);
		Passer = getMyArray(e, my);
		LineLighter(Passer, BtnObjSuprArray[my][e], myprefix, TheColor);
		}
	}
	
}
  else {
	console.log("error with boolean in ButtonTruths.");
  }
}

function getmyID(my){
	switch(my) {
		case 0: return 'il'; 
		case 1: return 'el'; 
		case 2: return 'mt'; 
		case 3: return 'ao'; 
		case 4: return 'pr'; 
		case 5: return 'ev'; 
		case 6: return 'nm'; 
		case 7: return 'io'; 
		case 8: return 'po'; 
		case 9: return 'mh'; 
		case 10: return 'ru'; 
		case 11: return 'ss'; 
		case 12: return 'gu'; 
		case 13: return 'ju'; 
		case 14: return 'au'; 
		case 15: return 'ac'; 
		case 16: return 'du'; 
		case 17: return 'ta'; 
		case 18: return 'he'; 
		case 19: return 'al'; 
		case 20: return 'ex'; 
		case 21: return 'or'; 
		case 22: return 'pe'; 
		case 23: return 'ar'; 
		case 24: return 'co'; 
		case 25: return 'st'; 
		case 26: return 'ps'; 
		}
}

function getMyTreeType(num){
	switch(num){
		case 0: return 'A'; 
		case 1: return 'B'; 
		case 2: return 'C'; 
		case 3: return 'A'; 
		case 4: return 'C'; 
		case 5: return 'B'; 
		case 6: return 'A'; 
		case 7: return 'B'; 
		case 8: return 'C'; 
		case 9: return 'B'; 
		case 10: return 'A'; 
		case 11: return 'C'; 
		case 12: return 'A'; 
		case 13: return 'B'; 
		case 14: return 'C'; 
		case 15: return 'A'; 
		case 16: return 'C'; 
		case 17: return 'B'; 
		case 18: return 'B'; 
		case 19: return 'C'; 
		case 20: return 'A'; 
		case 21: return 'A'; 
		case 22: return 'B'; 
		case 23: return 'C'; 
		case 24: return 'C'; 
		case 25: return 'A'; 
		case 26: return 'B';
	}
}
function getMyColor(my){
	switch(my){
		case 0: return 'orange'; 
		case 1: return 'yellow'; 
		case 2: return 'Orange'; 
		case 3: return 'aqua'; 
		case 4: return 'FloralWhite'; 
		case 5: return 'Orange'; 
		case 6: return 'chartreuse'; 
		case 7: return 'silver'; 
		case 8: return 'green'; 
		case 9: return 'yellow'; 
		case 10: return 'rgb(254, 0, 2)'; //fire engine red
		case 11: return 'aqua'; 
		case 12: return 'chartreuse'; 
		case 13: return 'rgb(254, 0, 2)'; 
		case 14: return 'yellow'; 
		case 15: return 'floralwhite'; 
		case 16: return 'yellow'; 
		case 17: return 'rgb(254, 0, 2)'; 
		case 18: return 'aqua'; 
		case 19: return 'yellow'; 
		case 20: return 'floralwhite'; 
		case 21: return 'orange'; 
		case 22: return 'yellow'; 
		case 23: return 'aqua'; 
		case 24: return 'rgb(254, 0, 2)'; 
		case 25: return 'green'; 
		case 26: return 'chartreuse';
	}
}
function getMyArray(e, my){
	if(getMyTreeType(my) === 'A'){
	let p = ButtonMasterArray[e];
	return LineMasterArray[p];
	}
	else if (getMyTreeType(my) === 'B'){
	let p = ButtonMasterArray[e];
		return LMArrayType2[p];
	}
	else if (getMyTreeType(my) === 'C'){
		let p = ButtonMasterArray[e];
		return LMArrayType3[p];
	}
	else{ console.log("my did not fit my getMyArray param expectations"); }
}
function LineLighter(e, BT, myprefix, myClr){
	if (BT == true){
		for(let i = 0; i<e.length; i++){
		let myline = myprefix + e[i];
		document.getElementById(myline).style.backgroundColor = myClr;
		}
	}
	if(BT == false){
		for(let i = 0; i<e.length; i++){
		let OffLine = myprefix + e[i];
		document.getElementById(OffLine).style.backgroundColor = "purple";
		}
	}
}