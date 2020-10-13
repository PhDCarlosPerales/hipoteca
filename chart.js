var evolucion_EURIBOR_fija=[
["Año",
"PesimistaRapido", "PesimistaRapido2Picos",
"PesimistaLentoSalto",  "PesimistaLentisimo",
"FijoOptimista", "Fijo", "PesimistaTarde",
"PocoPesimista"
],
[1,  0.00163,  0.00163,  0.00163,  0.00163,  0.00163,  0.02500,  0.00163,  0.00163],
[2,  0.00259,  0.00259,  0.00263,  0.00263,  0.00163,  0.02500,  0.00163,  0.00259],
[3,  0.00779,  0.00779,  0.00363,  0.00363,  0.00163,  0.02500,  0.00163,  0.00779],
[4,  0.02011,  0.02011,  0.00463,  0.00463,  0.00163,  0.02500,  0.00163,  0.01837],
[5,  0.02445,  0.02445,  0.00563,  0.00563,  0.00163,  0.02500,  0.00163,  0.01837],
[6,  0.02832,  0.02832,  0.00663,  0.00663,  0.00163,  0.02500,  0.00163,  0.01837],
[7,  0.04064,  0.04064,  0.00763,  0.00763,  0.00163,  0.02500,  0.00163,  0.01837],
[8,  0.04498,  0.04498,  0.00863,  0.00863,  0.00163,  0.02500,  0.00163,  0.01837],
[9,  0.04498,  0.04498,  0.00963,  0.00963,  0.00163,  0.02500,  0.00163,  0.01837],
[10, 0.04498,  0.04064,  0.01063,  0.01063,  0.00163,  0.02500,  0.00163,  0.01837],
[11, 0.04498,  0.02832,  0.01163,  0.01163,  0.00163,  0.02500,  0.02832,  0.01837],
[12, 0.04498,  0.02445,  0.01263,  0.01263,  0.00163,  0.02500,  0.04064,  0.01837],
[13, 0.04498,  0.02011,  0.01363,  0.01363,  0.00163,  0.02500,  0.04498,  0.01837],
[14, 0.04498,  0.00779,  0.01463,  0.01463,  0.00163,  0.02500,  0.04498,  0.01837],
[15, 0.04498,  0.00259,  0.01563,  0.01563,  0.00163,  0.02500,  0.04498,  0.01837],
[16, 0.04498,  0.00163,  0.01663,  0.01663,  0.00163,  0.02500,  0.04498,  0.01837],
[17, 0.04498,  0.00163,  0.01763,  0.01763,  0.00163,  0.02500,  0.04498,  0.01837],
[18, 0.04498,  0.00259,  0.01863,  0.01863,  0.00163,  0.02500,  0.04498,  0.01837],
[19, 0.04498,  0.00779,  0.01963,  0.01963,  0.00163,  0.02500,  0.04498,  0.01837],
[20, 0.04498,  0.02011,  0.02063,  0.02063,  0.00163,  0.02500,  0.04498,  0.01837],
[21, 0.04498,  0.02445,  0.02163,  0.02163,  0.00163,  0.02500,  0.04498,  0.01837],
[22, 0.04498,  0.02832,  0.02263,  0.02263,  0.00163,  0.02500,  0.04498,  0.01837],
[23, 0.04498,  0.04064,  0.02363,  0.02363,  0.00163,  0.02500,  0.04498,  0.01837],
[24, 0.04498,  0.04498,  0.02832,  0.02463,  0.00163,  0.02500,  0.04498,  0.01837],
[25, 0.04498,  0.04498,  0.04064,  0.02563,  0.00163,  0.02500,  0.04498,  0.01837],
[26, 0.04498,  0.04064,  0.04498,  0.02663,  0.00163,  0.02500,  0.04498,  0.01837],
[27, 0.04498,  0.02832,  0.04498,  0.02763,  0.00163,  0.02500,  0.04498,  0.01837],
[28, 0.04498,  0.02445,  0.04498,  0.02863,  0.00163,  0.02500,  0.04498,  0.01837],
[29, 0.04498,  0.02011,  0.04498,  0.02963,  0.00163,  0.02500,  0.04498,  0.01837],
[30, 0.04498,  0.00779,  0.04498,  0.03063,  0.00163,  0.02500,  0.04498,  0.01837]
];

var EURIBOR_enero_real=[
['Año', 'EURIBOR'],
[1999, 0.03069],
[2000, 0.03949],
[2001, 0.04574],
[2002, 0.03483],
[2003, 0.02705],
[2004, 0.02216],
[2005, 0.02312],
[2006, 0.02832],
[2007, 0.04064],
[2008, 0.04498],
[2009, 0.02622],
[2010, 0.01232],
[2011, 0.0155],
[2012, 0.01837],
[2013, 0.00575],
[2014, 0.00562],
[2015, 0.00299],
[2015, 0.00299],
[2016, 0.00042],
[2017, -0.00095],
[2018, -0.00189],
[2019, -0.00116]
];

var agno_final=this.EURIBOR_enero_real[this.EURIBOR_enero_real.length-1][0];
var EURIBOR_real_length=this.EURIBOR_enero_real.length;


/*Relleno hasta mucho tiempo*/
for(i=0;i<70;++i){
evolucion_EURIBOR_fija.push(evolucion_EURIBOR_fija[evolucion_EURIBOR_fija.length-1]);
}
var datos_fijos_length=this.evolucion_EURIBOR_fija.length;


/*Incluimos valores de evolucion a la tabla real*/
for (var columna_pred = 1; columna_pred < this.evolucion_EURIBOR_fija[0].length; columna_pred++) {
EURIBOR_enero_real[0].push(evolucion_EURIBOR_fija[0][columna_pred]);
for (var i = 1; i < this.EURIBOR_enero_real.length; i++) {
 this.EURIBOR_enero_real[i].push(0);
}
}

/*Relleno EURIBOR Real*/
for (var i = 1; i < datos_fijos_length; i++) {
  ls_to_push=[agno_final+i];
  ls_to_push.push(0);
  for (var columna_pred = 1; columna_pred < this.evolucion_EURIBOR_fija[0].length; columna_pred++) {
  ls_to_push.push(evolucion_EURIBOR_fija[i][columna_pred]);
  }
  this.EURIBOR_enero_real.push(ls_to_push);
}


function compare( a, b ) {
if(a[1]=="Total Pagado"){
return -1;
}
if(b[1]=="Total Pagado"){
return 1;
}
if ( a[1] < b[1] ){
return -1;
}
if ( a[1] > b[1] ){
return 1;
}
return 0;
}





function drawBarChart(data_to_plot) {

var chart = new google.visualization.BarChart(document.getElementById("bar_chart"));

var lista_colores= [
'#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
'#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'/*, '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'*/];
/*lista_colores.shift(); Borrando el EURIBOR pasado*/

data_to_plot[0].push({ role: 'style'});
data_to_plot[0].push({ role: 'annotation'});
for (i=0; i< lista_colores.length;++i){
data_to_plot[i+1].push(lista_colores[i]);
data_to_plot[i+1].push(Math.floor(data_to_plot[i+1][1]/1000) + "m");
}

data_to_plot.sort( compare );

var data = google.visualization.arrayToDataTable(data_to_plot);

var options = {
 title: "Totales pagados (€)",
 titleTextStyle: { color: '#fff' },
 hAxis: { viewWindow: {
  min: 0
  },
  textStyle:{color: '#FFF'} },
 vAxis: {gridlineColor: '#fff', textStyle:{color: '#FFF'}},
 legend: { position: 'none' },
 backgroundColor: { fill:'transparent' }
};

chart.draw(data, options);

}
function drawChart(data_to_plot, id_to_plot, title, min_to_display, max_to_display) {

var chart = new google.visualization.LineChart(document.getElementById(id_to_plot));

var lista_colores= [
'#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231',
'#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'/*, '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'*/];
if (id_to_plot=="money_chart"){
lista_colores.shift(); /*Borrando el EURIBOR pasado*/
}


var data = google.visualization.arrayToDataTable(data_to_plot);

var options = {
 title: title,
 titleTextStyle: { color: '#fff',textStyle:{color: '#FFF'} },
 /*curveType: 'function',*/
 hAxis: { viewWindow: {
  min: min_to_display,
  max: max_to_display
  },
  textStyle:{color: '#FFF'} },
 vAxis: {gridlineColor: '#fff', textStyle:{color: '#FFF'}},
 legend: { position: 'bottom' },
 lineWidth: 5,
          colors: lista_colores,
 backgroundColor: { fill:'transparent' }
};

/*var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));*/

chart.draw(data, options);
}
function add_cliente_to_EURIBOR(agnos,datos_a_rellenar){
var ret=JSON.parse(JSON.stringify(datos_a_rellenar));
ret[0].push("TuPrevisión");
for(i=0;i<agnos+EURIBOR_real_length;++i){
if(i<EURIBOR_real_length){
ret[i+1].push(0);
}else{
ret[i+1].push(parseFloat(document.getElementById('EURIBOR_cus_'+ (i-EURIBOR_real_length)).value));
}
}

return ret;
}
function add_cliente(agnos,datos_a_rellenar){
var ret=JSON.parse(JSON.stringify(datos_a_rellenar));
ret[0].push("TuPrevisión");
for(i=0;i<agnos;++i){
ret[i+1].push(parseFloat(document.getElementById('EURIBOR_cus_'+ (i)).value));
}

return ret;
}

function graficar(EURIBOR_enero_real_con_cliente, mensualidades, dat_escenarios){
var min_to_display=EURIBOR_enero_real_con_cliente[1][0];
var max_to_display=mensualidades[mensualidades.length-1][0];
drawChart(EURIBOR_enero_real_con_cliente,'curve_chart','Evolución EURIBOR',min_to_display,max_to_display);
drawChart(mensualidades,'money_chart','Mensualidad',min_to_display,max_to_display);
drawBarChart(dat_escenarios);
var carga=document.getElementsByClassName("loading")[0];
carga.style.display = "none";
}

function calcular() {
var carga=document.getElementsByClassName("loading")[0];
carga.style.display = "inline-block";


var elements = document.getElementById("prestamo").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

   
    var agnos = parseInt(obj["Años"]);
    var tabla_con_cliente=add_cliente(agnos,evolucion_EURIBOR_fija);
    var EURIBOR_enero_real_con_cliente=add_cliente_to_EURIBOR(agnos,EURIBOR_enero_real);

    tabla_con_cliente=tabla_con_cliente.slice(0,agnos+1);
    EURIBOR_enero_real_con_cliente=EURIBOR_enero_real_con_cliente.slice(0,agnos+EURIBOR_real_length+1);

    var res_amortiza=amortiza(obj["Euros"], obj["Diferencial"], obj["Años"],tabla_con_cliente);
    var txt_amortiza=res_amortiza[0];
    document.getElementById("tabla_amortizacion").innerHTML = txt_amortiza;

    var res_escenarios=res_amortiza[2];
    res_escenarios.splice(1, 0, ["Pedido",parseFloat(obj["Euros"])]);

    google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(function() { graficar(EURIBOR_enero_real_con_cliente, res_amortiza[1],res_escenarios); });

Array.from(document.getElementsByClassName("cl_graficas")).forEach(
   function(element, index, array) {
       element.style.display = "inline-block";
   }
);

add_collapse();
}


function amortiza(balance, wf_intereses_al_EURIBOR, agnos,tabla_EURIBORs)
{

var result = ""
var res_cuota=[tabla_EURIBORs[0]];
var numberOfcols = tabla_EURIBORs[0].length;
var escenarios= [["Escenario","Total Pagado"]];
for (var columna_tipo_previson = 1; columna_tipo_previson < numberOfcols; ++columna_tipo_previson)
{
var capital_amortizado=0;
var meses_pagados=0;
var cantidad_pagada=0;
var capital_vivo=parseFloat(balance)
var intereses_al_EURIBOR=parseFloat(wf_intereses_al_EURIBOR)
var agnos=parseInt(agnos)
result += '<button class="collapsible btn btn-primary btn-ghost">Escenario: ' +  
       tabla_EURIBORs[0][columna_tipo_previson] +
       '</button>'+
'<div class="content">' +
'<div class="header">'+
       "Cantidad pedida (€): " +
       capital_vivo.toFixed(2) +  
       "<br />"
valores_tabla="";
for (var i = 1; i <= agnos; ++i)
{
if (columna_tipo_previson==1){
res_cuota.push([agno_final+i]);
}

var intereses=intereses_al_EURIBOR+tabla_EURIBORs[i][columna_tipo_previson];

var interes_mensual = intereses/12;


var mensualidad=0;
for (var count = 0; count < 12; ++count)
{
mensualidad = capital_vivo * (
    interes_mensual
    /(1-Math.pow(1+interes_mensual, -((agnos*12)-meses_pagados)))
    );

    cantidad_pagada+=mensualidad;
valores_tabla += "<tr align=center>";
//Mes año
valores_tabla += "<td>" + i + "</td>";
valores_tabla += "<td>" + (count + 1) + "</td>";
/*result += "<td>" + interes_mensual.toFixed(2) + "</td>";*/
valores_tabla += "<td>" + mensualidad.toFixed(2) + "</td>";

interest = capital_vivo * interes_mensual;
valores_tabla += "<td> " + interest.toFixed(2) + "</td>";

amortizando = mensualidad - interest;
valores_tabla += "<td>" + amortizando.toFixed(2) + "</td>";

capital_vivo-=amortizando;
valores_tabla += "<td>" + capital_vivo.toFixed(2) + "</td>";

capital_amortizado+=amortizando;
valores_tabla += "<td>" + capital_amortizado.toFixed(2) + "</td>";
meses_pagados+=1;

}
res_cuota[i].push(mensualidad);
}

result +=
       "Intereses a sumar a EURIBOR (%): " +
       (intereses_al_EURIBOR*100).toFixed(2) +
       "%<br />" +
       "Plazo (Años): " +
       agnos +
       "<br />" +
       "Total Devuelto (€): " +
       cantidad_pagada.toFixed(2) +
       '</div>'
result += "<table cellspacing='0'><tr>" +
   "<th>Año</th>" +
   "<th>Mes</th>" +
   /*"<th>T. Mensual</th>" + */
   "<th>Mensualidad</th>" +
   "<th>Intereses</th>" +
   "<th>Amortización</th>" +
   "<th>Cap. Vivo</th>" +
   "<th>Cap. Amort</th>";

result += valores_tabla
   result += "</table></div>";

   escenarios.push([tabla_EURIBORs[0][columna_tipo_previson],cantidad_pagada.toFixed(2)]);

/*result = "Escenario: " + tabla_EURIBORs[0][columna_tipo_previson] +  "<br />" +
       "Total pagado (€) :" + cantidad_pagada.toFixed(2) +  "<br />"  +  result;*/

}

//returns the concatenated string to the page
    return [result, res_cuota,escenarios];
}

function create_agnos(top){

   
/*
form_table='<table id="ph_EURIBOR_custom_table";  align="center">'+
    '<tr>'+
    '<td  align="right">Año:</td>';
  for (i=0;i<top;i++){
  form_table+='<td id="name_EURIBOR_cus_'+ (i) +'">'+ (i+1) +'</td>';
  }
  form_table+='</tr><tr>'+
    '<td  align="right">EURIBOR:</td>';
    for (i=0;i<top;i++){
    form_table+='<td><input type="text" class="input_EURIBOR" value="0.0" name="EURIBOR_cus_'+ (i) +'" id="EURIBOR_cus_'+ (i) +'" /></td>';
    }
    form_table+='</tr></table>';
    return form_table;*/
    form_table="";
    for (i=0;i<top;i++){
    form_table+='<div class="div_input_EURIBOR"><label  id="name_EURIBOR_cus_'+
    (i) +'" for="EURIBOR_cus_'+ (i) +'">'+
    (i+1) +'</label><input type="text" class="input_EURIBOR" value="0.0" name="EURIBOR_cus_'+
    (i) +'" id="EURIBOR_cus_'+ (i) +'" /></div>';
    }
return form_table;
}
function hide_agnos_lt(agnos_amortizacion,top){
for (i=0;i<agnos_amortizacion;i++){
document.getElementById('name_EURIBOR_cus_'+ (i)).style.display = '';
document.getElementById('EURIBOR_cus_'+ (i)).style.display = '';
}
for (i=agnos_amortizacion;i<top;i++){
document.getElementById('name_EURIBOR_cus_'+ (i)).style.display = 'none';
document.getElementById('EURIBOR_cus_'+ (i)).style.display = 'none';
}
}

function display_agnos() {
    var agnos_amortizacion = parseInt(document.getElementById("agnos_amortizacion").value);
    var container = document.getElementById("ph_EURIBOR_custom_tabla");

    if (!container.hasChildNodes()){
    form_table=create_agnos(100);
    container.innerHTML =form_table;
    }
    hide_agnos_lt(agnos_amortizacion,100);
}

document.addEventListener('DOMContentLoaded', function(event) {
  display_agnos();
})

// Listen to paste on the document
document.addEventListener("paste", function(e) {
  // if the target is a text input
  if (e.target.type === "text") {
   var data = e.clipboardData.getData('Text');
   if (data.substring(data.length-1) == "\n")
    {
        data = data.substring(0, data.length-1);
    }
   // split clipboard text into single characters
   data = data.split(/(?:,| |\t|\n)+/);
   // find all other text inputs
   [].forEach.call(document.querySelectorAll("input[type=text]"), (node, index) => {
      // And set input value to the relative character
      if (index in data) {
      node.value = data[index];
      }
     
    });
    event.preventDefault();
  }
});

// Make sure this code gets executed after the DOM is loaded.
document.addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    calcular(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});


/*Colapsando*/
function add_collapse(){

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
 coll[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var content = this.nextElementSibling;
   if (content.style.maxHeight){
     content.style.maxHeight = null;
   } else {
     content.style.maxHeight = content.scrollHeight + "px";
   }
 });
}
}