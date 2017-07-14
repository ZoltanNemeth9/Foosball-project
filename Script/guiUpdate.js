/**
/* Egyetlen meccs lejátszása, amikor a látogató a Játék indítása gombra kattint
*/
function jatekButton_ClickHandler(){
	csapatparValasztasa();
	console.log(aktualisMeccs);
	//a két játszó csapat tagjainak megjelenítése a játéktérben
	jatekterFrissites();
	//az aktuális meccs lejátszása
	forduloLejatszasa();
	//eredmény megjelenítése
	eredmenyTablaFrissites();
}

/**
/* Az összes még le nem játszott meccs lejátszása, amikor a látogató az Összes meccs lejátszása gombra kattint
*/
function osszesMeccsButton_ClickHandler(){
	//minden meccs lejátszása
	var megLejatszandoMeccsekSzama = parositasok.length;
	for(var i = 0; i < megLejatszandoMeccsekSzama; i++){
		csapatparValasztasa();
		//a két játszó csapat tagjainak megjelenítése a játéktérben
		jatekterFrissites();
		//az aktuális meccs lejátszása
		forduloLejatszasa();
	}
	//eredmény megjelenítése
	eredmenyTablaFrissites();
}

/**
/* Az eredmény tábla frissítése a meccsek tömb (meccseredmények), valamint a csapatok tömb (pontszámok) tartalma alapján
*/
function eredmenyTablaFrissites(){
	var nodesEredmenySorok = document.querySelectorAll('#idEredmeny tbody tr');
	for(var i = 0; i < csapatok.length; i++){
		var nodesAktualisSorCellai = nodesEredmenySorok[i].children;
		for(var j = i + 1; j < csapatok.length; j++){
			var meccsSorszam = keresMeccs(i,j);
			if(meccsSorszam != -1){
				nodesAktualisSorCellai[j+1].innerText = meccsek[meccsSorszam].gol1 + ':' + meccsek[meccsSorszam].gol2;
			} else {
				nodesAktualisSorCellai[j+1].innerHTML = '&nbsp;';
			}
		}
		nodesAktualisSorCellai[nodesAktualisSorCellai.length-1].innerText = csapatok[i].pont;
	}
}

/**
/* Játéktér frissítése az aktuálisMeccs és a csapatok tömbök alapján
*/
function jatekterFrissites(){
	var nodeJatekterTabla = document.querySelector('#idJatekter tbody');
	//Neveket tartalmazó cellák lekérdezése
	var nodeElsoCsapatVedoCella = nodeJatekterTabla.children[0].children[0];
	var nodeElsoCsapatTamadoCella = nodeJatekterTabla.children[1].children[0];
	var nodeMasodikCsapatTamadoCella = nodeJatekterTabla.children[0].children[2];
	var nodeMasodikCsapatVedoCella = nodeJatekterTabla.children[1].children[1];

	//Játékos nevek frissítése a cellákban
	nodeElsoCsapatVedoCella.innerText = csapatok[aktualisMeccs.csapat1].vedekezo;
	nodeElsoCsapatTamadoCella.innerText = csapatok[aktualisMeccs.csapat1].tamado;
	nodeMasodikCsapatVedoCella.innerText = csapatok[aktualisMeccs.csapat2].vedekezo;
	nodeMasodikCsapatTamadoCella.innerText = csapatok[aktualisMeccs.csapat2].tamado;
}