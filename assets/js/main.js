function clearScreen() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("final").innerHTML = "";
}


function display(value) {
    document.getElementById("result").innerHTML += value;
}

function calc() {
    let x = document.getElementById("result").innerHTML;
    let y = eval(x);
    document.getElementById("final").innerHTML = y;
}

// let input = document.getElementById("result").innerHTML;
// if (input.match(/\.{2,}/)) {
//     document.getElementById("final").innerHTML = "Invalid input";
// }
// function back() {
//     let a = document.getElementById("result").value;
//     document.getElementById("final").value = a.pop();
// }
// function sin() {
//     let x = document.getElementById("result").value;
//     let y = x * Math.PI / 180;
//     document.getElementById("final").value = y;
// }

// function sinFxn(){
//     let x = document.getElementById("result").value;
//     if (x.includes(sin)){

//     }
// }