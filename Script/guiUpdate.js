function jatekButton_ClickHandler(){
	//az aktuális 5 meccs lejátszása
	forduloLejatszasa();
	//eredmény megjelenítése
	var nodesEredmenySorok = document.querySelectorAll('#idEredmeny tbody tr');
	for(var i = 0; i < csapatok.length; i++){
		var nodesAktualisSorCellai = nodesEredmenySorok[i].children;
		for(var j = i + 1; j < csapatok.length; j++){
			var meccsSorszam = keresMeccs(i,j);
			if(meccsEredmeny != -1){
				nodesAktualisSorCellai[j+1].innerText = meccsek[meccsSorszam].gol1 + ':' + meccs[meccsSorszam].gol2;
			}
			nodesAktualisSorCellai[j+1].innerText = '&nbsp;';
		}
	}
}

function osszesMeccsButton_ClickHandler(){
	//minden meccs lejátszása

	//eredmény megjelenítése
}