function csapatTabla(){
  var nodeCsapat = document.querySelector("#idCsapat thead");

  var s = "<tr><td></td>";

  for(var i=0;i<csapatok.length;i++){
    s += "<td>"+csapatok[i].csapatnev+"</td>";
  }
  s += "</td>";

  nodeCsapat.innerHTML = s;

}

function eredmenyTabla(){
  var nodeEredmeny = document.querySelector("#idEredmeny thead");

  var s = "<tr><th></th>";

  for(var i=0;i<csapatok.length;i++){
    s += "<th>"+csapatok[i].csapatnev+"</th>";
  }
  s += "<th>Pontszám</th></tr>";

  nodeEredmeny.innerHTML = s;

  nodeEredmeny = document.querySelector("#idEredmeny tbody");

  s='';

  for(var i=0;i<csapatok.length;i++){
    s += "<tr>";
    s += "<th>"+csapatok[i].csapatnev+"</th>";
    for(var j=0;j<csapatok.length+1;j++){
      s+= "<td>&nbsp;</td>";
    }
    s += "</tr>";
  }
  nodeEredmeny.innerHTML = s;

}
