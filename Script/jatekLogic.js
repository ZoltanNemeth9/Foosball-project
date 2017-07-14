/**
/* Egyetlen 5 jatékból álló forduló szimulálása
*/
function forduloLejatszasa(){
	//Gólok generálása
	aktualisMeccs.gol1 = Math.floor(Math.random() * 11);
	aktualisMeccs.gol2 = 10 - aktualisMeccs.gol1;			
	//Pontok frissítése
	if(aktualisMeccs.gol1 < aktualisMeccs.gol2){
		csapatok[aktualisMeccs.csapat2].pont += 3;
	} else if(aktualisMeccs.gol1 > aktualisMeccs.gol2){
		csapatok[aktualisMeccs.csapat1].pont += 3;
	} else {
		csapatok[aktualisMeccs.csapat1].pont += 1;
		csapatok[aktualisMeccs.csapat2].pont += 1;
	}
	//Párosítások átrakása a meccsek tömbbe
	meccsek.push(aktualisMeccs);
	aktualisMeccs = null;
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