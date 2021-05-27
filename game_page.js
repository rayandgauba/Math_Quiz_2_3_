var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

var player1_score = 0;
var player2_score = 0;


document.getElementById("player_1name").innerHTML = player1_name + " : ";
document.getElementById("player_2name").innerHTML = player2_name + " : ";

document.getElementById("player_1score").innerHTML = player1_score;
document.getElementById("player_2score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question_turn = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>"
    check_button = "<br> <br> <buton class='btn btn-info' onclick = 'check()'>Check</button>";
    row = queastion_turn + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
var question_turn = "Player 1";
var answer_turn = "Player 2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (answer == number1) {
        if (answer_turn == "Player 1") {
            player1_score = player1_score + 1;
            document.getElementById("player_1score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player_2score").innerHTML = player2_score;
        }
    }

    if (question_turn == "Player 1"){
        question_turn = "Player 2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "Player 1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "Player 1") {
        answer_turn = "Player 2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "Player 1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
