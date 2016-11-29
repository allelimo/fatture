//var textToSaveAsURL = null;

function ftestpage1()
{
    //var textToSave = document.getElementById("inputTextToSave").value;
    //var textToSave = "testo da salvare" + "\r\n" + "testo da salvare seconda riga";

    alert("generating page");
 
 




    var textToSave = "";
    var term = "\r\n";

    textToSave += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    textToSave += term;
    textToSave += "<p:FatturaElettronica versione=\"1.0\"";
    textToSave += term;
    textToSave += "xmlns:ds=\"http://www.w3.org/2000/09/xmldsig#\"";
    textToSave += term;
    textToSave += "xmlns:p=\"http://www.fatturapa.gov.it/sdi/fatturapa/v1.0\"";
    textToSave += term;
    textToSave += "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">";
    textToSave += term;
    textToSave += "  <FatturaElettronicaHeader>";
    textToSave += term;
    textToSave += "    <DatiTrasmissione>";
    textToSave += term;
    textToSave += "      <IdTrasmittente>";
    textToSave += term;
    textToSave += "        <IdPaese>IT</IdPaese>";
    textToSave += term;
    textToSave += "        <IdCodice>01234567890</IdCodice>";
    textToSave += term;
    textToSave += "      </IdTrasmittente>";
    textToSave += term;

    textToSave += "    </DatiTrasmissione>";
    textToSave += term;
    textToSave += "  </FatturaElettronicaHeader>";
    textToSave += term;
    textToSave += "	<FatturaElettronicaBody>";
    textToSave += term;
    textToSave += "  </FatturaElettronicaBody>";
    textToSave += term;
    textToSave += "</p:FatturaElettronica>";
    textToSave += term;




    //alert(textToSave);
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    //var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var fileNameToSaveAs = "myFile.xml";
 
    //var downloadLink = document.createElement("a");
    //downloadLink.download = fileNameToSaveAs;
    //alert(fileNameToSaveAs);
    //downloadLink.innerHTML = "Download File";
    //downloadLink.href = textToSaveAsURL;
    //alert(textToSaveAsURL);

    // questo funziona:
    // document.getElementById("mybutton_tp2").href = textToSaveAsURL;

    var mylink = document.getElementById("mybutton_tp3");
    mylink.download = fileNameToSaveAs;
    mylink.href = textToSaveAsURL;

    var mylink2 = document.getElementById("mybutton_tp4");
    mylink2.download = fileNameToSaveAs;
    mylink2.href = textToSaveAsURL;



  }

function ftestpage2() {

    // var sUrl = ftestpage1();
    
    // var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
    //         link.download = fileName;

    //        window.open(sUrl);


    //var query = '?download';


    //window.open(sUrl + query); 
    //window.open(ftestpage1() + query);

    
    //window.location.href = ftestpage1();
    
    //window.open(ftestpage1());
    
    //window.downloadLink(ftestpage1());

    //window.location.assign(ftestpage1());

    //window.open(url, "_blank", "download");  
    //window.open(url);
    //window.location.href = url;

    // var url = ftestpage1();    
    // document.getElementById("mybutton_tp2").href = url;

}

function mycalc() {

var uno = document.getElementById("testpage2_1").value;
var due = document.getElementById("testpage2_2").value;
uno = parseFloat(uno);
due = parseFloat(due);
//alert(uno);
//alert(due);
var tre = (uno * due);
//alert(tre);
document.getElementById("testpage2_3").value = tre;

var impon = tre;
var impos = (tre * .22);
var totdoc = (impon + impos);


document.getElementById("_imponibile").value = impon;
document.getElementById("_imposta").value = impos;
document.getElementById("_totaldoc").value = totdoc;

}
