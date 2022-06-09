let p1 = "X";
let p2 = "O";
let controlVez = "";
let div = document.getElementsByTagName("div");
for (let i = 0; i < 9; i++) {
    div[i].addEventListener("click", marcador);
}


function marcador() {
    if (this.innerHTML == "" || this.innerHTML == null || this.innerHTML == undefined) {
        this.innerHTML = p1;
        controlVez = p1;
        p1 = p2;
        p2 = controlVez;
    } else if (controlVez == p1 && this.innerHTML == "") {
        this.innerHTML = "O";
    } else {
        alert("Esta opçãojá oi selecionada!!")
    }

    for (let i = 0; i < 3; i++) {
        if (document.getElementById(`cel${i}0`).innerHTML == "X" && document.getElementById(`cel${i}1`).innerHTML == "X" && document.getElementById(`cel${i}2`).innerHTML == "X") {
            document.getElementById(`cel${i}0`).classList.toggle("vencedor");
            document.getElementById(`cel${i}1`).classList.toggle("vencedor");
            document.getElementById(`cel${i}2`).classList.toggle("vencedor");
        }
        if (document.getElementById(`cel0${i}`).innerHTML == "X" && document.getElementById(`cel1${i}`).innerHTML == "X" && document.getElementById(`cel2${i}`).innerHTML == "X") {
            document.getElementById(`cel0${i}`).classList.toggle("vencedor");
            document.getElementById(`cel1${i}`).classList.toggle("vencedor");
            document.getElementById(`cel2${i}`).classList.toggle("vencedor");
        }
        if (document.getElementById(`cel${i}0`).innerHTML == "O" && document.getElementById(`cel${i}1`).innerHTML == "O" && document.getElementById(`cel${i}2`).innerHTML == "O") {
            document.getElementById(`cel${i}0`).classList.toggle("vencedor");
            document.getElementById(`cel${i}1`).classList.toggle("vencedor");
            document.getElementById(`cel${i}2`).classList.toggle("vencedor");
        }
        if (document.getElementById(`cel0${i}`).innerHTML == "O" && document.getElementById(`cel1${i}`).innerHTML == "O" && document.getElementById(`cel2${i}`).innerHTML == "O") {
            document.getElementById(`cel0${i}`).classList.toggle("vencedor");
            document.getElementById(`cel1${i}`).classList.toggle("vencedor");
            document.getElementById(`cel2${i}`).classList.toggle("vencedor");
        }
        
    }
    
    if (document.getElementById("cel00").innerHTML == "X" && document.getElementById("cel11").innerHTML == "X" && document.getElementById("cel22").innerHTML == "X") {
        document.getElementById("cel00").classList.toggle("vencedor");
        document.getElementById("cel11").classList.toggle("vencedor");
        document.getElementById("cel22").classList.toggle("vencedor");
    }
    if (document.getElementById("cel20").innerHTML == "X" && document.getElementById("cel11").innerHTML == "X" && document.getElementById("cel02").innerHTML == "X") {
        document.getElementById("cel20").classList.toggle("vencedor");
        document.getElementById("cel11").classList.toggle("vencedor");
        document.getElementById("cel02").classList.toggle("vencedor");
    }
    if (document.getElementById("cel00").innerHTML == "O" && document.getElementById("cel11").innerHTML == "O" && document.getElementById("cel22").innerHTML == "O") {
        document.getElementById("cel00").classList.toggle("vencedor");
        document.getElementById("cel11").classList.toggle("vencedor");
        document.getElementById("cel22").classList.toggle("vencedor");
    }
    if (document.getElementById("cel20").innerHTML == "O" && document.getElementById("cel11").innerHTML == "O" && document.getElementById("cel02").innerHTML == "O") {
        document.getElementById("cel20").classList.toggle("vencedor");
        document.getElementById("cel11").classList.toggle("vencedor");
        document.getElementById("cel02").classList.toggle("vencedor");
    }
}