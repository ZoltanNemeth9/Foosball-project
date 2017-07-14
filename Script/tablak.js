function csapatTabla(){

  var nodeCsapatHead = document.querySelector("#idCsapat thead");
  var nodeCsapatBody = document.querySelector("#idCsapat tbody");

  var s = "<tr><th>Csapatnév</th><th></th>";
  var p = "<tr><td><b>Támadó</b></td><td></td>";
  var q = "<tr><td><b>Védekező</b></td><td></td>";

  for(var i=0;i<csapatok.length;i++){
    s += "<th>"+csapatok[i].csapatnev+"</th>";
  }
  s += "</td>";

  nodeCsapatHead.innerHTML = s;

  for(var i=0;i<csapatok.length;i++){
    p += "<td>"+csapatok[i].tamado+"</td>";
  }
  p += "</td>";


  for(var i=0;i<csapatok.length;i++){
    q += "<td>"+csapatok[i].vedekezo+"</td>";
  }
  q += "</td>";

  nodeCsapatBody.innerHTML = p + q;
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
