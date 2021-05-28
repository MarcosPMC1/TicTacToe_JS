
let game_status = ["","","","","","","","","",];
const win = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
var player = "X";
var game_status_win = false;

function clicked(id){
    if(game_status[id] !== "" || !game_status_win){
        game_status[id] = player; 
        id_cell = "cell" + id;
        document.getElementById(id_cell).innerHTML = player;
        check_win();
        switch_player();
    }
}

function check_win() {
    for (let y = 0; y <= 7; y++) {
        const test = win[y];
        let a = game_status[test[0]];
        let b = game_status[test[1]];
        let c = game_status[test[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }else if (a === b && b === c) {
            game_status_win = true;
            break;
        }
    }
    if (game_status_win) {
        document.getElementById("msg").innerHTML = player + " Ganhou!";
    }
    let fim = !game_status.includes("");
    if (fim) {
        document.getElementById("msg").innerHTML = "Empate!";
    }
}

function switch_player(){
    if (player === "X") {
        player = "O";
    }else{
        player = "X";
    }
}

function reiniciar() {
    game_status = ["","","","","","","","","",];
    player = "X";
    game_status_win = false;
    document.getElementById("msg").innerHTML = "";
    for (let r = 0; r <= 8; r++) {
        r_cell = "cell" + r;
        document.getElementById(r_cell).innerHTML = "";
    }
}