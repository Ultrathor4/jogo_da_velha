let x = "X";
let o = "O";
let marker = x;
let vencedor = 0;

const jogoDaVelha = new Map([
    ["cel00", 0], ["cel01", 1], ["cel02", 2],
    ["cel10", 3], ["cel11", 4], ["cel12", 5],
    ["cel20", 6], ["cel21", 7], ["cel22", 8],
]);

function marcador(elem) {
    if (jogoDaVelha.has(elem.id) && vencedor == 0 && elem.innerHTML != "X" && elem.innerHTML != "O") {
        elem.innerHTML = marker;
        if (marker == x) {
            marker = o;
        } else if (marker == o) {
            marker = x;
        }
        jogoDaVelha.set(elem.id, elem.innerHTML)
        console.log(jogoDaVelha);

        for (let i = 0; i < 3; i++) {
            if (jogoDaVelha.get(`cel${i}0`) == elem.innerHTML && jogoDaVelha.get(`cel${i}1`) == elem.innerHTML && jogoDaVelha.get(`cel${i}2`) == elem.innerHTML) {
                vencedor = 1;
                alert("Temos um vencedor!")
            } else if (jogoDaVelha.get(`cel0${i}`) == elem.innerHTML && jogoDaVelha.get(`cel1${i}`) == elem.innerHTML && jogoDaVelha.get(`cel2${i}`) == elem.innerHTML) {
                vencedor = 1;
                alert("Temos um vencedor!")
            }
        }
        if (jogoDaVelha.get("cel00") == elem.innerHTML && jogoDaVelha.get("cel11") == elem.innerHTML && jogoDaVelha.get("cel22") == elem.innerHTML) {
            vencedor = 1;
            alert("Temos um vencedor!")
        }
        if (jogoDaVelha.get("cel20") == elem.innerHTML && jogoDaVelha.get("cel11") == elem.innerHTML && jogoDaVelha.get("cel02") == elem.innerHTML) {
            vencedor = 1;
            alert("Temos um vencedor!")
        }
    } else if (vencedor == 1) {
        alert("Opa...já temos um vencedor!")
    } else {
        alert("Opção indisponível. Para continuar, selecione um espaço vazio!")
    }
}