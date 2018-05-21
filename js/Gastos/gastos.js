var budget = 0;
var tGanhos = 0;
var tGastos = 0;

function enviar() {
    var desc = document.getElementById("desc").value;
    var grana = document.getElementById("grana").value;
    var tipo = document.getElementById("tipo").value;
  //window.alert(tipo);
    if (tipo == "add") {
        addGanho(desc, grana);
    }
  else if (tipo == "sub"){
    addDespesa(desc, grana);
  }

  document.getElementById("forme").reset();
  var showMoney = document.getElementById("totalGrana");
  showMoney.textContent = parseFloat(budget).toFixed(2);

  var tganho = document.getElementById("tganhos");
  tganho.textContent = parseFloat(tGanhos).toFixed(2);

  var tgasto = document.getElementById("tgastos");
  tgasto.textContent = parseFloat(tGastos).toFixed(2);

  var num = tGastos/tGanhos;
  var pct = (num*100).toFixed(1) + "%";

  var tporc = document.getElementById("tporc");
  tporc.textContent = pct;

  // alert(budget);
}


function calcPorc(valorG){
    var table = document.getElementById("Despesas").getElementsByTagName('tbody')[0];
    var rows = table.rows;
    
    for(let i=0; i<rows.length;i++){
        let v1 = rows[i].cells[1].innerHTML;
        //alert(v1);
        let num = v1/tGanhos;
        let pct = (num*100).toFixed(1) + "%";
        rows[i].cells[2].textContent = pct;
    }
    
    return valorG/tGanhos;
}

function addGanho(descricao, valorGrana) {
    tGanhos += parseFloat(valorGrana);
    budget += parseFloat(valorGrana);
    calcPorc(0);
    var table = document.getElementById("Ganhos").getElementsByTagName('tbody')[0];
     var row = table.insertRow(0);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = descricao;
     cell2.innerHTML = parseFloat(valorGrana).toFixed(2);
}

function addDespesa(descricao, valorGrana) {
  tGastos += parseFloat(valorGrana);
  budget -= parseFloat(valorGrana);
    
  var num = calcPorc(valorGrana);
  var pct = (num*100).toFixed(1) + "%";

  var table = document.getElementById("Despesas").getElementsByTagName('tbody')[0];
  var row = table.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = descricao;
  cell2.innerHTML = parseFloat(valorGrana).toFixed(2);
  cell3.innerHTML = pct;
}
