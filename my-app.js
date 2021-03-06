// Initialize your app
var myApp = new Framework7({
    //Disable App's automatic initialization
    init: false, 
    // traduzione in italiano
    modalButtonCancel: 'Annulla',
    modalTitle: 'Fatture',
    // chiudi automaticamente una smart list
    smartSelectBackOnSelect: true,
});

// dichiarazione per tutto il file
'use strict';

// variabili globali
// window.dirittiPosta = null;
// window.scontoDiritti = null;

// ============================= //
// inizializzazione delle pagine //
// ============================= //

// ============================= //
// pagina: index                 //
// ============================= //

//Now we add our callback for initial page
myApp.onPageInit('index', function (page) {
// recupera la prima variabile globale da pagina impostazioni
    // var storedData = myApp.formGetData('form_impostazioni_4');
    // if(storedData) {
    //     var jsonstring = JSON.stringify(storedData); 
    //     var jsonvalues = JSON.parse(jsonstring);
    //     dirittiPosta = parseFloat(jsonvalues.posimp);
    // }
// applica il tema selezionato
    var storedData2 = myApp.formGetData('form_cambiatema');
    if(storedData2) {
        var jsonstring2 = JSON.stringify(storedData2);
        var jsonvalues2 = JSON.parse(jsonstring2);
        var mytema = jsonvalues2.checktema;
        if (mytema == "on") {
            alert("changing tema");
            fModificaTema2();
        }
    }
});

//And now we initialize app
myApp.init();

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});






// ============================= //
// inizializzazione delle pagine //
// ============================= //

// ============================= //
// pagina impostazioni           //
// ============================= //

// prima di aprire la pagina impostazioni
// 1 - aggiungi i decimali ai valori memorizzati
// 2 - disabilita tutti gli input
// 3 - check per modifiche: off
myApp.onPageInit("impostazioni", function (page) {
    // 1 - aggiungi i decimali
    fListDecimali("listaImpostazioniPra");
    fListDecimali("listaImpostazioniUmc");
    fListDecimali("listaImpostazioniAci");
    fListDecimali("listaImpostazioniPoste");
    // 2 - loop per tutti gli input
    fDisabilitaInput("listaImpostazioniPra");
    fDisabilitaInput("listaImpostazioniUmc");
    fDisabilitaInput("listaImpostazioniAci");
    fDisabilitaInput("listaImpostazioniPoste");
    // 3 - checkbox: off
    var chkBox = document.getElementById('checkimpostazioni');
    chkBox.checked = false;
});

// toggle input box quando click su checkimpostazioni
function fModificaImpostazioni() {
    fDisabilitaInput("listaImpostazioniPra");
    fDisabilitaInput("listaImpostazioniUmc");
    fDisabilitaInput("listaImpostazioniAci");
    fDisabilitaInput("listaImpostazioniPoste");
}

// aggiunta conferma per reset impostazioni
function fResetImpostazioni() {
    myApp.confirm("Cancello tutte le impostazioni?", function () {
        fListReset("listaImpostazioniPra");
        fListReset("listaImpostazioniUmc");
        fListReset("listaImpostazioniAci");
        fListReset("listaImpostazioniPoste");
        myApp.formDeleteData("form_impostazioni_1");
        myApp.formDeleteData("form_impostazioni_2");
        myApp.formDeleteData("form_impostazioni_3");
        myApp.formDeleteData("form_impostazioni_4");
    });
}

// funzione generica
function fListDecimali(nomelista) {
    var ul = document.getElementById(nomelista);
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        var numero = items[i].value;
        numero = parseFloat(numero).toFixed(2);
        items[i].value = numero;
    }
}

// funzione generica
function fDisabilitaInput(nomelista) {
    var ul = document.getElementById(nomelista);
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle("disabled");
    }
}

// ============================= //
// pagina passaggi               //
// ============================= //

// function fModificaCdp() {
//     var notepra = 2;
//     var chkcdp = document.getElementById("checkcdp");
//     if (chkcdp.checked) {
//         notepra = 2;
//     }
//     else {
//         notepra = 3;
//     }
//     // presa da sotto, inizializzazione pagina passaggi
//     var storedData1 = myApp.formGetData('form_impostazioni_1');  // il form della seconda pagina form_gen2
//     if(storedData1) {
//         var jsonstring1 = JSON.stringify(storedData1);
//         var jsonvalues1 = JSON.parse(jsonstring1);
//         var dirittiPra = parseFloat(jsonvalues1.pradir); 
//         var bolloPra = parseFloat(jsonvalues1.praimp); 
//         var totPra = (dirittiPra + (bolloPra * notepra)).toFixed(2);
//         document.getElementById("passPra").value = totPra;
//     }
// }

// prendi i valori da impostazioni on init
// button -> prendi i valori della pagina
// myApp.onPageInit("passaggi", function (page) {

// // default: cdp checked, 30anni unchecked
//     var chkcdp = document.getElementById("checkcdp");
//     chkcdp.checked = true;
//     var chk30anni = document.getElementById("check30anni");
//     chk30anni.checked = false;
//     // deafult:
//     var notepra = 2;

//      // da pagina impostazioni 
//     var storedData1 = myApp.formGetData('form_impostazioni_1');  // il form della seconda pagina form_gen2
//     if(storedData1) {
//         //alert("preso2");
//         var jsonstring1 = JSON.stringify(storedData1); // qui ci sono tutte le coppie nome/valore
//         //myApp.alert(cippa);
//         var jsonvalues1 = JSON.parse(jsonstring1);
//         var dirittiPra = parseFloat(jsonvalues1.pradir); 
//         var bolloPra = parseFloat(jsonvalues1.praimp); 
//         //var uella = lippa.checkcdp;
//         //alert(dirittiPra + bolloPra);
//         var totPra = (dirittiPra + (bolloPra * notepra)).toFixed(2);
//         //alert(totPra);
//         //document.getElementById("passPra").value = (dirittiPra + (bolloPra * 2)).toFixed(2);
//         document.getElementById("passPra").value = totPra;
//     }

//     var storedData2 = myApp.formGetData('form_impostazioni_2');  // il form della seconda pagina form_gen2
//     if(storedData2) {
//         var jsonstring2 = JSON.stringify(storedData2); // qui ci sono tutte le coppie nome/valore
//         var jsonvalues2 = JSON.parse(jsonstring2);
//         var dirittiUmc = parseFloat(jsonvalues2.umcdir); 
//         var bolloUmc = parseFloat(jsonvalues2.umcimp); 
//         document.getElementById("passUmc").value = (dirittiUmc + bolloUmc + (dirittiPosta * 2)).toFixed(2);
//         //alert((dirittiUmc + bolloUmc + (dirittiPosta * 2)).toFixed(2));
//     }

//     var storedData3 = myApp.formGetData('form_impostazioni_3');  // il form della seconda pagina form_gen2
//     if(storedData3) {
//         var jsonstring3 = JSON.stringify(storedData3); // qui ci sono tutte le coppie nome/valore
//         var jsonvalues3 = JSON.parse(jsonstring3);
//         var dirittiAci1 = parseFloat(jsonvalues3.acidir1); 
//         var dirittiAci2 = parseFloat(jsonvalues3.acidir2); 
//         var dirittiAci3 = parseFloat(jsonvalues3.acidir3); 
//         scontoDiritti = parseFloat(jsonvalues3.acisconto);
//         document.getElementById("passDiritti").value = (dirittiAci1 + dirittiAci2 + dirittiAci3).toFixed(2);
//         document.getElementById("passIva").value = ((dirittiAci1 + dirittiAci2 + dirittiAci3) * 0.22).toFixed(2);

//     }
//     // hack orribile per ricalcolo forzato
//     fCalcolaIpt();
// });

// ============================= //
// funzioni generiche            //
// ============================= //

// funzione per resettare tutti gli elenchi
// usare con nome della lista come "string"
function fListReset(nomelista){
var ul = document.getElementById(nomelista);
var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
}

// funzione per calcolare il totale dei valori di una lista
function fGenericTotale(nomelista, idtotale){
var ul = document.getElementById(nomelista);
var items = ul.getElementsByTagName("input");
var totaleValoreAssegni = 0;
    for (var i = 0; i < items.length -1; i++) {
        var a = parseFloat(items[i].value);
        if (isNaN(a) === true){
            a = 0;
        }
     totaleValoreAssegni += a;
    }
    document.getElementById(idtotale).value = totaleValoreAssegni.toFixed(2);
}

// ============================= //
// codice per pagine             //
// ============================= //

// ============================= //
// pagina bollettini             //
// ============================= //
// function fBollettiniImporto(){
//     var ul = document.getElementById("listaBollettini");
//     var items = ul.getElementsByTagName("input");
//     var importi = [10.20, 0, 16, 0, 32, 0, 13.58, 0, 22.26, 0, 41.78, 0, 5.1, 0, 18.37, 0, 24.74, 0, 19.32, 0, 41.37, 0];
//     //var dirittiPosta = 1.78;
//     var totaleBollettini = 0;
//     for (var i = 0; i < 22; i = i + 2) {
//         var a = items[i].value;
//         var b = importi[i];
//         var c = a * (b + dirittiPosta);
//         var d = parseFloat(c);
//         if (d === 0) {
//             items[i+1].value = null;
//             } else if (d !== null) {
//             items[i+1].value = d.toFixed(2);
//         }
//         totaleBollettini += d;
//     }
//     // scrivi i totale sull'ultima riga'
//     document.getElementById("idtot").value = totaleBollettini.toFixed(2);
// }
// function fBollettiniResto(){
//     // per sicurezza, ricalcola il totale
//     fBollettiniImporto();
//     // calcola il resto
//     var valcont, valrest, valtot;
// 	valcont = document.getElementById('idcont').value;
//     if (valcont > 0) {
//         valtot = document.getElementById("idtot").value;
//         valrest = parseFloat(valcont) - parseFloat(valtot);
//         document.getElementById("idrest").value = valrest.toFixed(2);
//     }
// }
// function fBollettiniReset(){
//     fListReset("listaBollettini");
//     fListReset("listaBollettiniTot");
//     // delete stored data
//     myApp.formDeleteData("form_bollettini");
//     myApp.formDeleteData("form_bollettini_b");
// }

// ============================= //
// pagina contanti               //
// ============================= //
// function fContantiTotale(){
//     var ul = document.getElementById("listaContanti");                                      // necessario dare un id alla lista
//     var items = ul.getElementsByTagName("input");                                           // recuperare i valori di input
//     var importi = [5, 0, 10, 0, 20, 0, 50, 0, 100, 0, 200, 0, 500, 0];    // orribile hack, ma mi serve per recuperare gli elementi pari
//     var totaleContanti = 0;
//     for (var i = 0; i < 14; i = i + 2) {                                                     // anche qui, i < 14 per fermarsi prima di ultima riga
//         // valore di input                                                                  // il codice per tutti gli elementi sarebbe
//         var a = items[i].value;                                                             // i < items.length
//         var b = importi[i]; // array. non serve "value"
//         var c = a * b;
//         // calcola il totale
//         var d = parseFloat(c);
//         if (d === 0) {
//             items[i+1].value = null;
//             } else if (d !== null) {
//             items[i+1].value = d;
//         }
//         totaleContanti += d;
//     }
//     // scrivi i totale sull'ultima riga'
//     document.getElementById("idtotcont").value = totaleContanti;
// }

// function fContantiReset(){
//     fListReset("listaContanti");
//     myApp.formDeleteData("form_contanti");
// }

// ============================= //
// pagina assegni 1 e 2          //
// ============================= //
// function fAssegniTotale(){
//     fGenericTotale("listaAssegni", "assegnoTotale");
// }

// function fAssegniReset(){
//     fListReset("listaAssegni");
//     myApp.formDeleteData("form_assegni1");
// }

// function fAssegniTotale2(){
//     fGenericTotale("listaAssegni2", "assegnoTotale2");
// }

// function fAssegniReset2(){
//     fListReset("listaAssegni2");
//     myApp.formDeleteData("form_assegni2");
// }


// ============================= //
// pagina passaggi               //
// ============================= //

// calcolo dell'ipt e del costo totale
// function fCalcolaIpt(){

// var province00 = ["ao","bz","tn"];
// var province10 = ["mt"];
// var province20 = ["ar","av","bn","ci","gr","lt","pn","re","sr","ts","ud","vi"];
// var province25 = ["fe","kr","so"];
// var provinciaselezionata = null;

// var testSelProv = $$("select#provincia").val();

// if (province00.indexOf(testSelProv) > -1 ) {
//     provinciaselezionata = 1.0;
// } else if (province10.indexOf(testSelProv) > -1 ) {
//     provinciaselezionata = 1.1;
// } else if (province20.indexOf(testSelProv) > -1 ) {
//     provinciaselezionata = 1.2;
// } else if (province25.indexOf(testSelProv) > -1 ) {
//     provinciaselezionata = 1.25;
// } else {
//     provinciaselezionata = 1.3;
// }


// var testTipoVeicolo = $$("select#tipoveicolo").val();

// var iptBase = 150.81;
// var iptCoeff = 3.51;
// var portataNetta = $$("select#portatanetta").val();
// var importoIpt; // = null;
// var valoreKw = document.getElementById("numerokw").value;
// var chk30anni = document.getElementById("check30anni");


// if (testTipoVeicolo == "av") {
//     if (chk30anni.checked) {
//         importoIpt = 52;
//         } else if (valoreKw < 54) {
//             importoIpt = (iptBase * provinciaselezionata);
//             importoIpt = Math.floor(importoIpt);
//             } else {
//                 importoIpt = valoreKw * iptCoeff * provinciaselezionata;
//                 importoIpt = Math.ceil(importoIpt);
//             }
//     } else if (testTipoVeicolo === "mc") {
//         if (chk30anni.checked) {
//             importoIpt = 26;
//         } else {
//             importoIpt = 0;
//         }
//             //alert(importoIpt);
//     } else if (testTipoVeicolo === "ac") {
//         importoIpt = portataNetta * provinciaselezionata;
//         importoIpt = Math.round(importoIpt);
//     } else if (testTipoVeicolo === "sp") {
//         importoIpt = (valoreKw * iptCoeff * provinciaselezionata) / 4;
//         importoIpt = Math.round(importoIpt);
//     }

//     document.getElementById("passIpt").value = importoIpt.toFixed(2);


// // mettiamo insieme i valori:
// var impIpt = parseFloat(importoIpt);
// var impPra = parseFloat(document.getElementById("passPra").value);
// var impUmc = parseFloat(document.getElementById("passUmc").value);
// var impDiritti = parseFloat(document.getElementById("passDiritti").value);
// var impIva = parseFloat(document.getElementById("passIva").value);
// var totale = (impIpt + impPra + impUmc + impDiritti + impIva);

// totale = round5(totale);

// document.getElementById("passTotale").value = totale.toFixed(2);

// var chkSconto = document.getElementById("checksconto");
//     if (chkSconto.checked) {
//         document.getElementById("passScontato").value = parseFloat((totale - scontoDiritti)).toFixed(2);
//     } else {
//                 document.getElementById("passScontato").value = null;
//     }
// }

// modifica tema white/dark
function fModificaTema(){
    document.body.classList.toggle("layout-desktop-dark");
    document.body.classList.toggle("layout-desktop-white");
}
// fix per il tema nero all'apertura del programma
function fModificaTema2(){
    document.body.classList.add("layout-desktop-dark");
    document.body.classList.remove("layout-desktop-white");
}

// ============================= //
// altre funzioni generiche      //
// ============================= //

function round5(x){
    return Math.ceil(x/5)*5;
}

// function fPassaggiReset() {
//     fListReset("listaPassaggi");
//     myApp.formDeleteData("form_passaggi");
// }

// function fApplicaASconto() {
//     fCalcolaIpt();
// }


// ============================= //
// link attivi                   //
// ============================= //

$$(document).on('click','a.item-link',function(){
    var target=$$(this);
    target.closest('ul').find('a.item-link').removeClass('my-class');
    target.addClass('my-class');
});
