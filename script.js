// let x = "X";
// let o = "O";
// let marker = x;
// let vencedor = 0;
// let resultLin = 0;
// let resultCol = 0;
// let resultDiag = 0;
// const entryesLin = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
// const entryesCol = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
// let entryesDiag = [[0, 0, 0], [0, 0, 0]];


// // function insertValue(elem, l, c) {
// //     if (elem.innerHTML == "" && vencedor == 0) {
// //         elem.innerHTML = marker;
// //         if (marker == x) {
// //             marker = o;
// //         } else if (marker == o) {
// //             marker = x;
// //         }
// //         entryesLin[l][c] = elem.innerHTML;
// //         entryesCol[c][l] = elem.innerHTML;
// //         entryesDiag = [
// //             [entryesLin[0][0], entryesLin[1][1], entryesLin[2][2]],
// //             [entryesLin[2][0], entryesLin[1][1], entryesLin[0][2]]
// //         ];
// //         for (let i = 0; i < 3; i++) {
// //             resultLin = entryesLin[i].every(comparadorX);
// //             resultLin = entryesLin[i].every(comparadorO);
// //             resultCol = entryesCol[i].every(comparadorX);
// //             resultCol = entryesCol[i].every(comparadorO);
// //             console.log( entryesLin,resultLin, resultCol)
// //             if (resultLin || resultCol) {
// //                 vencedor = 1;
// //                 alert("Temos um vencedor!");
// //                 break;               
// //             }            
// //         }
// //         for (let i = 0; i < 2; i++) {
// //             resultDiag = entryesDiag[i].every(comparadorX);
// //             resultDiag = entryesDiag[i].every(comparadorO);
// //             console.log(resultDiag)
// //             if (resultDiag) {
// //                 vencedor = 1;
// //                 alert("Temos um vencedor!");
// //                 break;
// //             }
// //         }

// //     } else if (vencedor == 1) {
// //         alert("Opa...já temos um vencedor!")
// //     } else {
// //         alert("Opção indisponível. Para continuar, selecione um espaço vazio!")
// //     }
// //     console.log(entryesDiag)
// // }

// // function comparadorX(value) {
// //     return value == "X";
// // }
// // function comparadorO(value) {
// //     return value == "O";
// // }

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