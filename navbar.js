// const mageToggle = document.getElementById('MageHover');
// console.log(mageToggle);
// // mageToggle.addEventListener('click', () => {
// //     mageToggle.style.backgroundColor = "green";
// // });

function showSubMenu(subMenu, bigBtn){
    document.getElementById(subMenu).classList.toggle('active');
    document.getElementById(bigBtn).classList.toggle('active');
    // const Mage = document.getElementsByClassName('Mage-options')[0];
    // Mage.classList.toggle('active');
}
function hideAllBut(e){
    for(let k = 0; k < ListofMancys.length; k++){
		document.getElementById(ListofMancys[k]).style.display = "none";
	}
	document.getElementById(e).style.display = "inline-block";
    for(let h=0; h<ListofCtypes.length; h++){
      if(e == ListofCtypes[h]){
        document.getElementById(e).style.display = "flex";
      }
    }
	// document.getElementById('MancyTitle').innerHTML = e;


    // document.getElementById('Exploration').style.display = 'none';
    // document.getElementById(e).style.display = 'inline-block';
}


let settingBtn;
let settingText;
/*window.addEventListener('load', (event) =>{
    console.log('fully loaded eventListeners are added');
    let Cool = document.getElementsByClassName('Skill');
    let attrNum = 1;
    let attrString;
    let index = 0;
    let count = 0;
    // console.log(Cool);
    for(let i=0; i<Cool.length; i++){
        if(attrNum === 10) { index++; attrNum = 1; }
        attrString = 'Attr'+ parseInt(attrNum);
        // console.log(attrString + 'with an index of: ' + index);
        attrNum++;
        count++;
        Cool[i].addEventListener('click', (event) =>{
            newPower(attrString, index);
        });
    }
    console.log('the count is: ' + count);
    // console.log(document.getElementsByClassName('aAttr1'));
    // document.getElementById('ilAttr1').addEventListener('click', (event) =>{
    //     newPower(`Attr1`, 0);
    // });
}); */









window.addEventListener('load', () =>{
    let myB;
    myB = document.getElementById('ilAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr1Text`); });

    myB = document.getElementById('ilAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr2Text`); });

    myB = document.getElementById('ilAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr3Text`); });

    myB = document.getElementById('ilAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr4Text`); });

    myB = document.getElementById('ilAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr5Text`); });

    myB = document.getElementById('ilAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr6Text`); });

    myB = document.getElementById('ilAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr7Text`); });

    myB = document.getElementById('ilAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr8Text`); });

    myB = document.getElementById('ilAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 0); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ilAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ilAttr9Text`); });


    myB = document.getElementById('elAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr1Text`); });

    myB = document.getElementById('elAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr2Text`); });

    myB = document.getElementById('elAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr3Text`); });

    myB = document.getElementById('elAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr4Text`); });

    myB = document.getElementById('elAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr5Text`); });

    myB = document.getElementById('elAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr6Text`); });

    myB = document.getElementById('elAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr7Text`); });

    myB = document.getElementById('elAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr8Text`); });

    myB = document.getElementById('elAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 1); });
    myB.addEventListener('mouseover', () =>{ tooltip(`elAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`elAttr9Text`); });


    myB = document.getElementById('mtAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr1Text`); });

    myB = document.getElementById('mtAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr2Text`); });

    myB = document.getElementById('mtAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr3Text`); });

    myB = document.getElementById('mtAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr4Text`); });

    myB = document.getElementById('mtAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr5Text`); });

    myB = document.getElementById('mtAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr6Text`); });

    myB = document.getElementById('mtAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr7Text`); });

    myB = document.getElementById('mtAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr8Text`); });

    myB = document.getElementById('mtAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 2); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mtAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mtAttr9Text`); });

    myB = document.getElementById('aoAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr1Text`); });

    myB = document.getElementById('aoAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr2Text`); });

    myB = document.getElementById('aoAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr3Text`); });

    myB = document.getElementById('aoAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr4Text`); });

    myB = document.getElementById('aoAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr5Text`); });

    myB = document.getElementById('aoAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr6Text`); });

    myB = document.getElementById('aoAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr7Text`); });

    myB = document.getElementById('aoAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr8Text`); });

    myB = document.getElementById('aoAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 3); });
    myB.addEventListener('mouseover', () =>{ tooltip(`aoAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`aoAttr9Text`); });


    myB = document.getElementById('prAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr1Text`); });

    myB = document.getElementById('prAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr2Text`); });

    myB = document.getElementById('prAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr3Text`); });

    myB = document.getElementById('prAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr4Text`); });

    myB = document.getElementById('prAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr5Text`); });

    myB = document.getElementById('prAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr6Text`); });

    myB = document.getElementById('prAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr7Text`); });

    myB = document.getElementById('prAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr8Text`); });

    myB = document.getElementById('prAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 4); });
    myB.addEventListener('mouseover', () =>{ tooltip(`prAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`prAttr9Text`); });


    myB = document.getElementById('evAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr1Text`); });

    myB = document.getElementById('evAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr2Text`); });

    myB = document.getElementById('evAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr3Text`); });

    myB = document.getElementById('evAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr4Text`); });

    myB = document.getElementById('evAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr5Text`); });

    myB = document.getElementById('evAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr6Text`); });

    myB = document.getElementById('evAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr7Text`); });

    myB = document.getElementById('evAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr8Text`); });

    myB = document.getElementById('evAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 5); });
    myB.addEventListener('mouseover', () =>{ tooltip(`evAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`evAttr9Text`); });


    myB = document.getElementById('nmAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr1Text`); });

    myB = document.getElementById('nmAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr2Text`); });

    myB = document.getElementById('nmAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr3Text`); });

    myB = document.getElementById('nmAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr4Text`); });

    myB = document.getElementById('nmAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr5Text`); });

    myB = document.getElementById('nmAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr6Text`); });

    myB = document.getElementById('nmAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr7Text`); });

    myB = document.getElementById('nmAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr8Text`); });

    myB = document.getElementById('nmAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 6); });
    myB.addEventListener('mouseover', () =>{ tooltip(`nmAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`nmAttr9Text`); });


    myB = document.getElementById('ioAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr1Text`); });

    myB = document.getElementById('ioAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr2Text`); });

    myB = document.getElementById('ioAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr3Text`); });

    myB = document.getElementById('ioAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr4Text`); });

    myB = document.getElementById('ioAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr5Text`); });

    myB = document.getElementById('ioAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr6Text`); });

    myB = document.getElementById('ioAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr7Text`); });

    myB = document.getElementById('ioAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr8Text`); });

    myB = document.getElementById('ioAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 7); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ioAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ioAttr9Text`); });


    myB = document.getElementById('poAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr1Text`); });

    myB = document.getElementById('poAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr2Text`); });

    myB = document.getElementById('poAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr3Text`); });

    myB = document.getElementById('poAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr4Text`); });

    myB = document.getElementById('poAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr5Text`); });

    myB = document.getElementById('poAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr6Text`); });

    myB = document.getElementById('poAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr7Text`); });

    myB = document.getElementById('poAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr8Text`); });

    myB = document.getElementById('poAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 8); });
    myB.addEventListener('mouseover', () =>{ tooltip(`poAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`poAttr9Text`); });


    myB = document.getElementById('mhAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr1Text`); });

    myB = document.getElementById('mhAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr2Text`); });

    myB = document.getElementById('mhAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr3Text`); });

    myB = document.getElementById('mhAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr4Text`); });

    myB = document.getElementById('mhAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr5Text`); });

    myB = document.getElementById('mhAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr6Text`); });

    myB = document.getElementById('mhAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr7Text`); });

    myB = document.getElementById('mhAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr8Text`); });

    myB = document.getElementById('mhAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 9); });
    myB.addEventListener('mouseover', () =>{ tooltip(`mhAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`mhAttr9Text`); });


    myB = document.getElementById('ruAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr1Text`); });

    myB = document.getElementById('ruAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr2Text`); });

    myB = document.getElementById('ruAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr3Text`); });

    myB = document.getElementById('ruAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr4Text`); });

    myB = document.getElementById('ruAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr5Text`); });

    myB = document.getElementById('ruAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr6Text`); });

    myB = document.getElementById('ruAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr7Text`); });

    myB = document.getElementById('ruAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr8Text`); });

    myB = document.getElementById('ruAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 10); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ruAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ruAttr9Text`); });


    myB = document.getElementById('ssAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr1Text`); });

    myB = document.getElementById('ssAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr2Text`); });

    myB = document.getElementById('ssAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr3Text`); });

    myB = document.getElementById('ssAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr4Text`); });

    myB = document.getElementById('ssAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr5Text`); });

    myB = document.getElementById('ssAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr6Text`); });

    myB = document.getElementById('ssAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr7Text`); });

    myB = document.getElementById('ssAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr8Text`); });

    myB = document.getElementById('ssAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 11); });
    myB.addEventListener('mouseover', () =>{ tooltip(`ssAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`ssAttr9Text`); });


    myB = document.getElementById('guAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr1Text`); });

    myB = document.getElementById('guAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr2Text`); });

    myB = document.getElementById('guAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr3Text`); });

    myB = document.getElementById('guAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr4Text`); });

    myB = document.getElementById('guAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr5Text`); });

    myB = document.getElementById('guAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr6Text`); });

    myB = document.getElementById('guAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr7Text`); });

    myB = document.getElementById('guAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr8Text`); });

    myB = document.getElementById('guAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 12); });
    myB.addEventListener('mouseover', () =>{ tooltip(`guAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`guAttr9Text`); });


    myB = document.getElementById('juAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr1Text`); });

    myB = document.getElementById('juAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr2Text`); });

    myB = document.getElementById('juAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr3Text`); });

    myB = document.getElementById('juAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr4Text`); });

    myB = document.getElementById('juAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr5Text`); });

    myB = document.getElementById('juAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr6Text`); });

    myB = document.getElementById('juAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr7Text`); });

    myB = document.getElementById('juAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr8Text`); });

    myB = document.getElementById('juAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 13); });
    myB.addEventListener('mouseover', () =>{ tooltip(`juAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`juAttr9Text`); });


    myB = document.getElementById('auAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr1Text`); });

    myB = document.getElementById('auAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr2Text`); });

    myB = document.getElementById('auAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr3Text`); });

    myB = document.getElementById('auAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr4Text`); });

    myB = document.getElementById('auAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr5Text`); });

    myB = document.getElementById('auAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr6Text`); });

    myB = document.getElementById('auAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr7Text`); });

    myB = document.getElementById('auAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr8Text`); });

    myB = document.getElementById('auAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 14); });
    myB.addEventListener('mouseover', () =>{ tooltip(`auAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`auAttr9Text`); });


    myB = document.getElementById('acAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr1Text`); });

    myB = document.getElementById('acAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr2Text`); });

    myB = document.getElementById('acAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr3Text`); });

    myB = document.getElementById('acAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr4Text`); });

    myB = document.getElementById('acAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr5Text`); });

    myB = document.getElementById('acAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr6Text`); });

    myB = document.getElementById('acAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr7Text`); });

    myB = document.getElementById('acAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr8Text`); });

    myB = document.getElementById('acAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 15); });
    myB.addEventListener('mouseover', () =>{ tooltip(`acAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`acAttr9Text`); });


    myB = document.getElementById('duAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr1Text`); });

    myB = document.getElementById('duAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr2Text`); });

    myB = document.getElementById('duAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr3Text`); });

    myB = document.getElementById('duAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr4Text`); });

    myB = document.getElementById('duAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr5Text`); });

    myB = document.getElementById('duAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr6Text`); });

    myB = document.getElementById('duAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr7Text`); });

    myB = document.getElementById('duAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr8Text`); });

    myB = document.getElementById('duAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 16); });
    myB.addEventListener('mouseover', () =>{ tooltip(`duAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`duAttr9Text`); });


    myB = document.getElementById('taAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr1Text`); });

    myB = document.getElementById('taAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr2Text`); });

    myB = document.getElementById('taAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr3Text`); });

    myB = document.getElementById('taAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr4Text`); });

    myB = document.getElementById('taAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr5Text`); });

    myB = document.getElementById('taAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr6Text`); });

    myB = document.getElementById('taAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr7Text`); });

    myB = document.getElementById('taAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr8Text`); });

    myB = document.getElementById('taAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 17); });
    myB.addEventListener('mouseover', () =>{ tooltip(`taAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`taAttr9Text`); });


    myB = document.getElementById('heAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr1Text`); });

    myB = document.getElementById('heAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr2Text`); });

    myB = document.getElementById('heAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr3Text`); });

    myB = document.getElementById('heAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr4Text`); });

    myB = document.getElementById('heAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr5Text`); });

    myB = document.getElementById('heAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr6Text`); });

    myB = document.getElementById('heAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr7Text`); });

    myB = document.getElementById('heAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr8Text`); });

    myB = document.getElementById('heAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 18); });
    myB.addEventListener('mouseover', () =>{ tooltip(`heAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`heAttr9Text`); });


    myB = document.getElementById('alAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr1Text`); });

    myB = document.getElementById('alAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr2Text`); });

    myB = document.getElementById('alAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr3Text`); });

    myB = document.getElementById('alAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr4Text`); });

    myB = document.getElementById('alAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr5Text`); });

    myB = document.getElementById('alAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr6Text`); });

    myB = document.getElementById('alAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr7Text`); });

    myB = document.getElementById('alAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr8Text`); });

    myB = document.getElementById('alAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 19); });
    myB.addEventListener('mouseover', () =>{ tooltip(`alAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`alAttr9Text`); });


    myB = document.getElementById('exAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr1Text`); });

    myB = document.getElementById('exAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr2Text`); });

    myB = document.getElementById('exAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr3Text`); });

    myB = document.getElementById('exAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr4Text`); });

    myB = document.getElementById('exAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr5Text`); });

    myB = document.getElementById('exAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr6Text`); });

    myB = document.getElementById('exAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr7Text`); });

    myB = document.getElementById('exAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr8Text`); });

    myB = document.getElementById('exAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 20); });
    myB.addEventListener('mouseover', () =>{ tooltip(`exAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`exAttr9Text`); });


    myB = document.getElementById('orAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr1Text`); });

    myB = document.getElementById('orAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr2Text`); });

    myB = document.getElementById('orAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr3Text`); });

    myB = document.getElementById('orAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr4Text`); });

    myB = document.getElementById('orAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr5Text`); });

    myB = document.getElementById('orAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr6Text`); });

    myB = document.getElementById('orAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr7Text`); });

    myB = document.getElementById('orAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr8Text`); });

    myB = document.getElementById('orAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 21); });
    myB.addEventListener('mouseover', () =>{ tooltip(`orAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`orAttr9Text`); });


    myB = document.getElementById('peAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr1Text`); });

    myB = document.getElementById('peAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr2Text`); });

    myB = document.getElementById('peAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr3Text`); });

    myB = document.getElementById('peAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr4Text`); });

    myB = document.getElementById('peAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr5Text`); });

    myB = document.getElementById('peAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr6Text`); });

    myB = document.getElementById('peAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr7Text`); });

    myB = document.getElementById('peAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr8Text`); });

    myB = document.getElementById('peAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 22); });
    myB.addEventListener('mouseover', () =>{ tooltip(`peAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`peAttr9Text`); });


    myB = document.getElementById('arAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr1Text`); });

    myB = document.getElementById('arAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr2Text`); });

    myB = document.getElementById('arAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr3Text`); });

    myB = document.getElementById('arAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr4Text`); });

    myB = document.getElementById('arAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr5Text`); });

    myB = document.getElementById('arAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr6Text`); });

    myB = document.getElementById('arAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr7Text`); });

    myB = document.getElementById('arAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr8Text`); });

    myB = document.getElementById('arAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 23); });
    myB.addEventListener('mouseover', () =>{ tooltip(`arAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`arAttr9Text`); });


    myB = document.getElementById('coAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr1Text`); });

    myB = document.getElementById('coAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr2Text`); });

    myB = document.getElementById('coAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr3Text`); });

    myB = document.getElementById('coAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr4Text`); });

    myB = document.getElementById('coAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr5Text`); });

    myB = document.getElementById('coAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr6Text`); });

    myB = document.getElementById('coAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr7Text`); });

    myB = document.getElementById('coAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr8Text`); });

    myB = document.getElementById('coAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 24); });
    myB.addEventListener('mouseover', () =>{ tooltip(`coAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`coAttr9Text`); });


    myB = document.getElementById('stAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr1Text`); });

    myB = document.getElementById('stAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr2Text`); });

    myB = document.getElementById('stAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr3Text`); });

    myB = document.getElementById('stAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr4Text`); });

    myB = document.getElementById('stAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr5Text`); });

    myB = document.getElementById('stAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr6Text`); });

    myB = document.getElementById('stAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr7Text`); });

    myB = document.getElementById('stAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr8Text`); });

    myB = document.getElementById('stAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 25); });
    myB.addEventListener('mouseover', () =>{ tooltip(`stAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`stAttr9Text`); });


    myB = document.getElementById('psAttr1');
    myB.addEventListener('click', () =>{ newPower(`Attr1`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr1Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr1Text`); });

    myB = document.getElementById('psAttr2');
    myB.addEventListener('click', () =>{ newPower(`Attr2`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr2Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr2Text`); });

    myB = document.getElementById('psAttr3');
    myB.addEventListener('click', () =>{ newPower(`Attr3`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr3Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr3Text`); });

    myB = document.getElementById('psAttr4');
    myB.addEventListener('click', () =>{ newPower(`Attr4`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr4Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr4Text`); });

    myB = document.getElementById('psAttr5');
    myB.addEventListener('click', () =>{ newPower(`Attr5`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr5Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr5Text`); });

    myB = document.getElementById('psAttr6');
    myB.addEventListener('click', () =>{ newPower(`Attr6`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr6Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr6Text`); });

    myB = document.getElementById('psAttr7');
    myB.addEventListener('click', () =>{ newPower(`Attr7`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr7Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr7Text`); });

    myB = document.getElementById('psAttr8');
    myB.addEventListener('click', () =>{ newPower(`Attr8`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr8Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr8Text`); });

    myB = document.getElementById('psAttr9');
    myB.addEventListener('click', () =>{ newPower(`Attr9`, 26); });
    myB.addEventListener('mouseover', () =>{ tooltip(`psAttr9Text`); });
    myB.addEventListener('mouseleave', () =>{ tooltipdelete(`psAttr9Text`); });

});