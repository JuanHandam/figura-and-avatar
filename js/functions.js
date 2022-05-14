function cuadrado() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("cuadrado")
}

function circulo() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("circulo")
}

function arriba() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("arriba")

}

function abajo() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("abajo")

}

function isqui() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("isquierda")

}

function derec() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("derecha")

}

function img() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("imagen")

}

function digsupis() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("digsupis")

}

function diginfdr() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("diginfdr")

}

function recthoriz() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("recthoriz")

}

function rectverti() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("rectverti")

}
function rombo() {
    var selector = document.getElementById("figura");
    selector.className = "";
    selector.classList.toggle("rombo")

}

function capturarDATOS() {
    var nombre = document.getElementById("cNOMBRES").value;
    var edad = document.getElementById("cEDAD").value;
    var fecha = document.getElementById("cFECHA").value;
    var genero = document.getElementById("cGENERO").value;
    var email = document.getElementById("cEMAIL").value;
    var descri = document.getElementById("cDESCRIPC").value;
    var color = document.getElementById("cCOLOR").value;


    var name = document.getElementById("mNOMBRES");
    var age = document.getElementById("mEDAD");
    var fechs = document.getElementById("mFECHA");
    var genes = document.getElementById("mGENERO");
    var imeils = document.getElementById("mEMAIL");
    var descris = document.getElementById("mDESCRIPC");


    name.textContent = nombre;
    age.textContent = edad;
    fechs.textContent = fecha;
    genes.textContent = genero;
    imeils.textContent = email;
    descris.textContent = descri;


    var selector =document.getElementById("card-avatar")

    switch (color) {
        case "Negro":
            selector.style.backgroundColor = 'black';
            break;
        case "Azul":
            selector.style.backgroundColor = 'blue';
            break;
        case "Rojo":
            selector.style.backgroundColor = 'red';
   }
//  capturar la foto para el cambio de genero
   var imgavatar= document.getElementById("foto")

   switch (genero) {
       case "Femenino":
           imgavatar.src ='img/mujer.png';
           break;
        case "masculino":
            imgavatar.src ='img/hombre.png';
           break;
        case  "Otro":
            imgavatar.src ='img/desconocido.png'
   }

}

