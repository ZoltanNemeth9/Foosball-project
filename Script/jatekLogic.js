/**
/* Egyetlen 5 jatékból álló forduló szimulálása
*/
function forduloLejatszasa(){
	//Gólok generálása
	aktualisMeccsek[i].gol1 = Math.floor(Math.random() * 11);
	aktualisMeccsek[i].gol2 = aktualisMeccsek[i].gol1;			
	//Pontok frissítése
	if(aktualisMeccsek[i].gol1 < aktualisMeccsek[i].gol2){
		csapatok[aktualisMeccsek[i].csapat2].pont += 3;
	} else if(aktualisMeccsek[i].gol1 > aktualisMeccsek[i].gol2){
		csapatok[aktualisMeccsek[i].csapat1].pont += 3;
	} else {
		csapatok[aktualisMeccsek[i].csapat1].pont += 1;
		csapatok[aktualisMeccsek[i].csapat2].pont += 1;
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