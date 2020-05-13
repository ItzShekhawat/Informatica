function chiedo(){
var msg;
var defalt = ""
msg = prompt("Inserire il messaggio : ", defalt );
if(msg == "Null"){
    alert("Non hai inserito nulla");
}else if(msg == null){
    alert("Non Annullare");
}
else{
    alert("Il tuo messaggio è : " + msg);
}
}