function csapatGenerator(){
	var i= 0;
	var players2 = players;

	var iter = Math.floor(players.length/2);
	while ( i < iter) {

		var csapat = {};

		var randomPlayerIndex = Math.floor(Math.random() * players2.length);
		csapat.tamado = players2[randomPlayerIndex];
		players2.splice(randomPlayerIndex, 1);

		var randomPlayerIndex2 = Math.floor(Math.random()*players2.length);
		csapat.vedekezo = players2[randomPlayerIndex2];
		players2.splice(randomPlayerIndex2, 1);

		csapat.pont = 0;

		csapat.csapatnev = csapatNevek[i];
		csapatok.push(csapat);

		i++;

	}
}

function parositasGenerator(){
	parositasok = [];

	for(var i = 0; i < csapatok.length - 1; i++){
		for(var j = i + 1; j < csapatok.length; j++){
			var par = {};
			par.csapat1 = i;
			par.csapat2 = j;
			parositasok.push(par);
		}
	}
	console.log(parositasok);
}
