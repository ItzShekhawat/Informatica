function nonTradurre(){
    msg = document.getElementById("result").innerText = " Passa il mouse sull'oggetto per veder il suo nome in inglese"
    
}

function namethis1(name){
    var msg = document.getElementById("result")
    msg.style.fontFamily = "Italic"
    msg.innerText.bold("5px")
    msg.style.bold

    if(name == "img1"){
        msg.innerText = "Banana"
    }if(name == "img2"){
        msg.innerText = "Apple"
    }if(name == "img3"){
        msg.innerText = "Car"
    }if(name == "img4"){
        msg.innerText = "Bike"
    }if(name == "img5"){
        msg.innerText = "Dog"
    }if(name == "img6"){
        msg.innerText = "Cat"
    }

}

