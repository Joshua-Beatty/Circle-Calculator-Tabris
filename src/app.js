const {TextInput, Slider, TextView, contentView} = require('tabris');
const Big = require('big.js');

const fontSize = '30px';
const fontSizeSlider = '20px';

let radius = Big(0);
let diameter = Big(0);
let area = Big(0);
let circumference = Big(0);
let fullPi = "3.1415192653589793238";
let pi = Big(3.14);
let changing = false;


let idG = null;
let nG = null;

changeFunction = function(n, id) {
	if(n != ""){
		idG = id;
		nG = n;
		switch(id) {
			case 1:
			radius = Big(n);
			break;
			case 2:
			radius = Big(n).div(2);
			break;
			case 3:
			radius = Big(n).div(pi).sqrt();
			break;
			case 4:
			radius = Big(n).div(pi.times(2));
			break;
		}
		if(id != 1){
			radiusTextinput.text = radius.toFixed(15) * 1;
		}if(id != 2){
			diameterTextinput.text = radius.times(2).toFixed(15)* 1;
		}if(id != 3){
			areaTextinput.text = radius.pow(2).times(pi).toFixed(15)* 1;
		}if(id != 4){
			circumferenceTextinput.text = radius.times(pi.times(2)).toFixed(15)* 1;
		}
	} else {
radiusTextinput.text = "";
diameterTextinput.text = "";
areaTextinput.text = "";
circumferenceTextinput.text = "";

	}
}

changePi = function(n){
	if(n > 1) {
		n = Number(n) + 1
	}
	pi = Big(fullPi.substr(0, n));
	piText.text = `Pi: ${pi}`;
	if(nG){
		changeFunction(nG, idG);
	}
}
new TextView({
	centerX: true, top: '5%',
	font: fontSize,
	text: "Radius",
}).appendTo(contentView);

const radiusTextinput = new TextInput({
	top: '12%', left: '20%', right: '20%',
	font: fontSizeSlider,
	message: 'Radius',
	keyboard: 'decimal',
	floatMessage: false,
}).onInput( ({text}) => changeFunction(`${text}`, 1) ).appendTo(contentView);


new TextView({
	centerX: true, top: '22%',
	font: fontSize,
	text: "Diameter",
}).appendTo(contentView);

const diameterTextinput = new TextInput({
	top: '29%', left: '20%', right: '20%',
	font: fontSizeSlider,
	message: 'Diameter',
	keyboard: 'decimal',
	floatMessage: false,
}).onInput(({text}) => changeFunction(`${text}`, 2)).appendTo(contentView);

new TextView({
	centerX: true, top: '39%',
	font: fontSize,
	text: "Area",
}).appendTo(contentView);

const areaTextinput = new TextInput({
	top: '46%', left: '20%', right: '20%',
	font: fontSizeSlider,
	message: 'Area',
	keyboard: 'decimal',
	floatMessage: false,
}).onInput(({text}) => changeFunction(`${text}`, 3)).appendTo(contentView);

new TextView({
	centerX: true, top: '56%',
	font: fontSize,
	text: "Circumference",
}).appendTo(contentView);

const circumferenceTextinput = new TextInput({
	top: '63%', left: '20%', right: '20%',
	font: fontSizeSlider,
	message: 'Circumference',
	keyboard: 'decimal',
	floatMessage: false,
}).onInput(({text}) => changeFunction(`${text}`, 4)).appendTo(contentView);

const piText = new TextView({
	centerX: true, top: '75%',
	font: fontSize,
	text: `Pi: ${pi}`,
}).appendTo(contentView);

new Slider({
	top: '80%',
	left: '15%', right: '15%',
	maximum: 15,
	minimum: 1,
	selection: 2,
}).onSelect(({selection}) => changePi(`${selection}`)).appendTo(contentView);