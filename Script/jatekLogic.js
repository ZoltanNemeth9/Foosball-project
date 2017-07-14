/**
/* Egyetlen 5 jatékból álló forduló szimulálása
*/
function forduloLejatszasa(){
	//Gólok generálása
	for(var i = 0; i < aktualisMeccsek.length; i++){
		if(Math.random()<0.5){
			aktualisMeccsek[i].gol1 = 10;
			aktualisMeccsek[i].gol2 = Math.floor(Math.random() * 10);
		}
		else {
			aktualisMeccsek[i].gol1 = Math.floor(Math.random() * 10);
			aktualisMeccsek[i].gol2 = 10;
		}		
	}
	//Pontok frissítése
	for(var i = 0; i < aktualisMeccsek.length; i++){
		if(aktualisMeccsek[i].gol1 < aktualisMeccsek[i].gol2){
			csapatok[aktualisMeccsek[i].csapat2].pont += 3;
		} else if(aktualisMeccsek[i].gol1 > aktualisMeccsek[i].gol2){
			csapatok[aktualisMeccsek[i].csapat1].pont += 3;
		} else {
			csapatok[aktualisMeccsek[i].csapat1].pont += 1;
			csapatok[aktualisMeccsek[i].csapat2].pont += 1;
		}
	}
	//Párosítások átrakása a meccsek tömbbe
	for(var i = 0; i < aktualisMeccsek.length; i++){
		meccsek.push(aktualisMeccsek[i]);
	}
	aktualisMeccsek = [];
}

/**
/* Megkeres a meccsek[] tömbben egy elemet, ha tudjuk, hogy melyik két csapat játszotta
/*
/* @elsoCsapat		a meccset játszó egyik csapat sorszáma
/* @masodikCsapat	a meccset játszó másik csapat sorszáma
/*
/* @return			találat esetén a meccs tömbön belüli sorszám, különben -1
*/
function keresMeccs(elsoCsapat, masodikCsapat){
	var i = 0;
	while(i < meccsek.length && !(meccsek[i].csapat1 == elsoCsapat && meccsek[i].csapat2 == masodikCsapat)){
		i++;
	}
	if(i < meccsek.length){
		return i;
	}
	return -1;
}