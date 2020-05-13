function married(){
    document.getElementById("male").checked = false
    set = document.getElementById("myDiv")
    if(document.getElementById("female").checked){
        //alert("Fatto")
       set.style.display="block"
    } else {
        set.style.display="none"
    }
}

function saluto(){
    name = document.getElementById("name").value
    surname = document.getElementById("surname").value
    genderM = document.getElementById("male").checked
    genderF = document.getElementById("female").checked
    wife = document.getElementById("Si").checked
    var genere
    var buon
    var gen
    var ora = new Date()

    if(name == "" || name == null){
        alert("Nome non inserito")
    }
    if(surname == "" || surname == null){
        alert("Cognome non inserito")
    }
    if(genderM == false){
        genere = "Donna"
        document.getElementById("male").checked = false
    }else{
        genere = "Uomo"
    }

    if(ora.getHours > 19){
        buon = "Buonasera "
    }else{
        buon = "Buongiorno"
    }

    if(genere == "Donna" && wife == true){
        gen = "Signora"
    }else if(genere == "Donna" && wife == false){
        gen = "Signorina"
    }
    if(genere == "Uomo"){
        gen = "Signor"
    }

    msg = "" + buon + " " +  gen + " " +  name  + surname
    alert(msg)

}
