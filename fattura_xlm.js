var textToSave = "";
var term = "\r\n";

var v_piva_d = "", 
    v_naz = "IT",
    v_prinv = "", 
    v_formtrasm = "SDI11", 
    v_coddest = "", 
    v_tel_d = "", 
    v_mail_d = "", 
    v_den_d = "", 
    v_regfisc = "", 
    v_ind_d = "",
    v_cap_d = "", 
    v_cit_d = "", 
    v_prov_d = "", 
    v_piva_f = "", 
    v_den_f = "", 
    v_ind_f = "", 
    v_cap_f = "", 
    v_cit_f = "", 
    v_prov_f = "",
    v_tipdoc = "", 
    v_divisa = "EUR", 
    v_data = "", 
    v_totdoc = 0, 
    v_causale = "", 
    v_iddoc = "", 
    v_codcig = "",
    v_descr = "", 
    v_iva = 22,
    v_qt2 = 0, 
    v_pu2 = 0, 
    v_pt2 = 0, 
    v_qt3 = 0, 
    v_pu3 = 0, 
    v_pt3 = 0, 
    v_qt4 = 0, 
    v_pu4 = 0, 
    v_pt4 = 0, 
    v_qt5 = 0, 
    v_pu5 = 0, 
    v_pt5 = 0, 
    v_impon = 0, 
    v_impost = 0, 
    v_esigib = "", 
    v_condpag = "", 
    v_modpag = "", 
    v_imppag = "", 
    v_istfin = "", 
    v_iban = "", 
    v_abi = "", 
    v_cab = "";

textToSave = 
"<p:FatturaElettronica versione=\"1.1\" xmlns:p=\"http://www.fatturapa.gov.it/sdi/fatturapa/v1.1\">" + term +
"  <FatturaElettronicaHeader>" + term +
"    <DatiTrasmissione>" + term +
"      <IdTrasmittente>" + term +
"        <IdPaese>" + v_naz + "</IdPaese>" + term +
"        <IdCodice>" + v_prinv + "</IdCodice>" + term +
"      </IdTrasmittente>" + term + 
"      <ProgressivoInvio>" + v_prinv + "</ProgressivoInvio>" + term + 
"      <FormatoTrasmissione>" + v_formtrasm + "</FormatoTrasmissione>" + term + 
"      <CodiceDestinatario>" + v_coddest + "</CodiceDestinatario>" + term + 
"      <ContattiTrasmittente>" + term + 
"        <Telefono>" + v_tel_d + "</Telefono>" + term + 
"        <Email>" + v_mail_d + "</Email>" + term + 
"      </ContattiTrasmittente>" + term + 
"    </DatiTrasmissione>" + term +
"    <CedentePrestatore>" + term +
"      <DatiAnagrafici>" + term +
"        <IdFiscaleIVA>" + term +
"         <IdPaese>" + v_naz + "</IdPaese>" + term +
"          <IdCodice>" + v_piva_d + "</IdCodice>" + term +
"        </IdFiscaleIVA>" + term +
"        <CodiceFiscale>" + v_piva_d + "</CodiceFiscale>" + term +
"        <Anagrafica>" + term +
"          <Denominazione>" + v_den_d + "</Denominazione>" + term +
"        </Anagrafica>" + term +
"        <RegimeFiscale>" + v_regfisc + "</RegimeFiscale>" + term +
"      </DatiAnagrafici>" + term +
"      <Sede>" + term +
"        <Indirizzo>" + v_ind_d + "</Indirizzo>" + term +
"        <CAP>" + v_cap_d + "</CAP>" + term +
"        <Comune>" + v_cit_d + "</Comune>" + term +
"       <Provincia>" + v_prov_d + "</Provincia>" + term +
"        <Nazione>" + v_naz + "</Nazione>" + term +
"     </Sede>" + term +
"    </CedentePrestatore>" + term +
"    <CessionarioCommittente>" + term +
"      <DatiAnagrafici>" + term +
"        <CodiceFiscale>" + v_piva_f + "</CodiceFiscale>" + term +
"        <Anagrafica>" + term +
"          <Denominazione>" + v_den_f + "</Denominazione>" + term +
"        </Anagrafica>" + term +
"      </DatiAnagrafici>" + term +
"      <Sede>" + term +
"        <Indirizzo>" + v_ind_f + "</Indirizzo>" + term +
"        <CAP>" + v_cap_f + "</CAP>" + term +
"        <Comune>" + v_cit_f + "</Comune>" + term +
"        <Provincia>" + v_prov_f + "</Provincia>" + term +
"        <Nazione>" + v_naz + "</Nazione>" + term +
"      </Sede>" + term +
"    </CessionarioCommittente>" + term +
" </FatturaElettronicaHeader>" + term +
"  <FatturaElettronicaBody>" + term +
"   <DatiGenerali>" + term +
"      <DatiGeneraliDocumento>" + term +
"        <TipoDocumento>" + v_tipdoc + "</TipoDocumento>" + term +
"        <Divisa>" + v_divisa + "</Divisa>" + term +
"        <Data>" + v_data + "</Data>" + term +
"        <Numero>1</Numero>" + term +
"        <ImportoTotaleDocumento>" + v_totdoc + "</ImportoTotaleDocumento>" + term +
"        <Causale>" + v_causale + "</Causale>" + term +
"      </DatiGeneraliDocumento>" + term +
"      <DatiContratto>" + term +
"        <IdDocumento>" + v_iddoc + "</IdDocumento>" + term +
"        <CodiceCIG>" + v_codcig + "</CodiceCIG>" + term +
"      </DatiContratto>" + term +
"    </DatiGenerali>" + term +
"    <DatiBeniServizi>" + term +
"      <DettaglioLinee>" + term +
"        <NumeroLinea>1</NumeroLinea>" + term +
"        <Descrizione>" + v_descr + "</Descrizione>" + term +
"        <Quantita>0.0000</Quantita>" + term +
"        <UnitaMisura>--</UnitaMisura>" + term +
"        <PrezzoUnitario>0.0000</PrezzoUnitario>" + term +
"        <PrezzoTotale>0.00</PrezzoTotale>" + term +
"        <AliquotaIVA>" + v_iva + "</AliquotaIVA>" + term +
"      </DettaglioLinee>" + term +
"      <DettaglioLinee>" + term +
"        <NumeroLinea>2</NumeroLinea>" + term +
"        <Descrizione>operazione di bonifica di complessità A</Descrizione>" + term +
"        <Quantita>" + v_qt2 + "</Quantita>" + term +
"        <UnitaMisura>PZ</UnitaMisura>" + term +
"        <PrezzoUnitario>" + v_pu2 + "</PrezzoUnitario>" + term +
"        <PrezzoTotale>" + v_pt2 + "</PrezzoTotale>" + term +
"        <AliquotaIVA>" + v_iva + "</AliquotaIVA>" + term +
"      </DettaglioLinee>" + term +
"      <DettaglioLinee>" + term +
"        <NumeroLinea>3</NumeroLinea>" + term +
"        <Descrizione>operazione di bonifica di complessità D</Descrizione>" + term +
"        <Quantita>" + v_qt3 + "</Quantita>" + term +
"        <UnitaMisura>PZ</UnitaMisura>" + term +
"        <PrezzoUnitario>" + v_pu3 + "</PrezzoUnitario>" + term +
"        <PrezzoTotale>" + v_pt3 + "</PrezzoTotale>" + term +
"        <AliquotaIVA>" + v_iva + "</AliquotaIVA>" + term +
"      </DettaglioLinee>" + term +
"      <DettaglioLinee>" + term +
"        <NumeroLinea>4</NumeroLinea>" + term +
"        <Descrizione>operazione di bonifica di complessità C</Descrizione>" + term +
"        <Quantita>" + v_qt4 + "</Quantita>" + term +
"        <UnitaMisura>PZ</UnitaMisura>" + term +
"        <PrezzoUnitario>" + v_pu4 + "</PrezzoUnitario>" + term +
"        <PrezzoTotale>" + v_pt4 + "</PrezzoTotale>" + term +
"        <AliquotaIVA>" + v_iva + "</AliquotaIVA>" + term +
"      </DettaglioLinee>" + term +
"      <DettaglioLinee>" + term +
"        <NumeroLinea>5</NumeroLinea>" + term +
"        <Descrizione>operazione di bonifica di complessità B</Descrizione>" + term +
"        <Quantita>" + v_qt5 + "</Quantita>" + term +
"        <UnitaMisura>PZ</UnitaMisura>" + term +
"        <PrezzoUnitario>" + v_pu5 + "</PrezzoUnitario>" + term +
"        <PrezzoTotale>" + v_pt5 + "</PrezzoTotale>" + term +
"        <AliquotaIVA>" + v_iva + "</AliquotaIVA>" + term +
"      </DettaglioLinee>" + term +
"      <DatiRiepilogo>" + term +
"        <AliquotaIVA>" + v_iva + "</AliquotaIVA>" + term +
"        <SpeseAccessorie>0.00</SpeseAccessorie>" + term +
"        <Arrotondamento>0.00</Arrotondamento>" + term +
"        <ImponibileImporto>" + v_impon + "</ImponibileImporto>" + term +
"        <Imposta>" + v_impost + "</Imposta>" + term +
"        <EsigibilitaIVA>" + v_esigib + "</EsigibilitaIVA>" + term +
"      </DatiRiepilogo>" + term +
"    </DatiBeniServizi>" + term +
"    <DatiPagamento>" + term +
"      <CondizioniPagamento>" + v_condpag + "</CondizioniPagamento>" + term +
"      <DettaglioPagamento>" + term +
"        <ModalitaPagamento>" + v_modpag + "</ModalitaPagamento>" + term +
"        <ImportoPagamento>" + v_imppag + "</ImportoPagamento>" + term +
"        <IstitutoFinanziario>" + v_istfin + "</IstitutoFinanziario>" + term +
"        <IBAN>" + v_iban + "</IBAN>" + term +
"        <ABI>" + v_abi + "</ABI>" + term +
"        <CAB>" + v_cab + "</CAB>" + term +
"      </DettaglioPagamento>" + term +
"    </DatiPagamento>" + term +
"  </FatturaElettronicaBody>" + term +
"</p:FatturaElettronica>" + term;
