function askName()  {
    var name = prompt("Enter your name");
    return name
} // 10

function greeting(a) { // parameter
       alert(`What's the temperature?.`)
} // 20

function asktemperature() {
    var rachi = (`what's the temperature?`);
    return rachi
}
var n = askName()

greeting(n) // argument

function convertTemperature  {
    var ran = Math.floor(Math.random() * 9) /5 + 32
    return ran
} // 20

function convertTemperature  {
    var ran = Math.floor(Math.random() - 32) * 5 /9
    return ran
} // 20

function temp() {
    var t = prompt("Do you want to converte the temperature to 'C' or 'F'?.")
    resturn t
}

function cToF() {
    var cf = ((x * 9)/5)+ 32
}

function fToC() {
    var fc = ((y - 32)* 5 ) / 9
    return fc
}


function comparingNumbers(computer, human) { // parameters
    if (computer == human) {
        alert(`Great! We were thinking of number ${computer}.`)
    } else {
        alert(`Sorry. I was thinking of number $(computer), and you guessed $(human).`)
    }

} // 15

comparingNumbers(computerNumber(), userNumber())

function something() {
    var a = "house" // local variable - can only be seen inside the function. Cannot be accessed outside of it.
    return a
}

var a = "building" // global variable - can be seen anywhere in the code.

function somethingElse() {
    alert(a)
}

somethingElse()

//85