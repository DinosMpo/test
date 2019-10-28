"use strict";

function Store(number, name) {
	this.number = number;
	this.name = name;
};

let numbers = ['001', '006', '010', '016', '020', '024', '028', '050', '056', '060', '070', '075', '080', '085', '090', '092', '094', '098', '202', '203', '204', '208', '214', '221', '222', '225', '226', '231', '234', '239', '244', '245', '026', '228', '229', '230', '232', '233', '236', '238', '242', '220', '227', '235', '237', '240', '241', '243'];
// let numbers = ['7001', '7006', '7010', '7016', '7020', '7024', '7028', '7050', '7056', '7060', '7070', '7075', '7080', '7085', '7090', '7092', '7094', '7098', '7202', '7203', '7204', '7208', '7214', '7221', '7222', '7225', '7226', '7231', '7234', '7239', '7244', '7245', '7026', '7228', '7229', '7230', '7232', '7233', '7236', '7238', '7242', '7220', '7227', '7235', '7237', '7240', '7241', '7243'];
let	names = ['πυλαια', 'περιστερι', 'συνταγμα', 'νεα ερυθραια', 'βολος', 'καλαματα', 'κερκυρα 1', 'πειραιας', 'νεα σμυρνη', 'ιωαννινα', 'τσιμισκη', 'μαρουσι mall', 'γλυφαδα', 'αγιος δημητριος', 'αγια παρασκευη', 'αιγαλεω', 'ροδος 1', 'καστορια', 'ροδος 2', 'ψυχικο', 'ορεστιαδα', 'κατερινη', 'αργος', 'χαλανδρι', 'ζωγραφου', 'κερκυρα 2', 'κορινθος', 'κορυδαλος', 'golden hall', 'καλλιθεα', 'αεροδρομιο', 'κολωνακη', 'χανια', 'αγρινιο', 'λαμια', 'καβαλα', 'ηρακλειο', 'κομοτηνη', 'αλεξανδρουπολη', 'δραμα', 'λαρισα', 'κοζανη', 'τρικαλα', 'χαλκιδα', 'μυτιληνη', 'πυργος', 'σερρες', 'ρεθυμνο'];
let stores = [];

for(var i=0; i<numbers.length; i++) {
	stores.push(new Store(numbers[i], names[i]));
}

let input = document.getElementById('input');
let button = document.getElementById('button');
let view = document.getElementById('view');
// let clear = document.getElementById('clear');

button.addEventListener('click', function() {
	let value = input.value.toString();
	let found = false;
	console.log(value);
	for(var i=0; i<stores.length; i++) {
		if(value == stores[i].number) {
			console.log(stores[i].name);
			view.innerHTML = '7' + stores[i].number + ' / ' + stores[i].name.toUpperCase();
			input.value = '';
			found = true;
			break;
		}else{
			found = false;
		}
	}

	if(!found) {
		view.innerHTML = 'Δεν υπάρχει'
	}
});

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
})