const screen = document.querySelector('.screen')
let hayOperacion = false

let parteDerecha = ""
let parteIzquierda = ""
let operacion = ""


function pulsar(b) {
    screen.value += b.value

    if(operacion == "") {
        parteIzquierda += b.value
    }
    else {
        parteDerecha += b.value
    }
}

function ponerOperador(operador) {
    if(screen.value.length == 0 && operador.value == "√") {
        screen.value += operador.value
        hayOperacion = true
        operacion = operador.value
    }
    if(hayOperacion == false && screen.value.length != 0) {
        screen.value += operador.value
        hayOperacion = true
        operacion = operador.value
    }
}

function borrar() {
    screen.value = ''
    reiniciar()
    parteIzquierda = ""
}

function reiniciar() {
    hayOperacion = false
    parteDerecha = ""
    operacion = ""
}

function resultado() {
    let result = 0
    switch (operacion) {
        case "+":
            result = parseFloat(parteIzquierda) + parseFloat(parteDerecha)
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break
        case "-":
            result = parseFloat(parteIzquierda) - parseFloat(parteDerecha)
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break
        case "*":
            result = parseFloat(parteIzquierda) * parseFloat(parteDerecha)
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break
        case "/":
            if(parteIzquierda == "0") {
                result = ""
            }
            else {
                result = parseFloat(parteIzquierda) / parseFloat(parteDerecha)
            }
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break
        case "cos":
            result = Math.cos(parseInt(parteIzquierda)) 
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break   
        case "tan":
            result = Math.tan(parseInt(parteIzquierda)) 
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break
        case "^":
            result = parteIzquierda**parteDerecha 
            parteIzquierda = result
            screen.value = result
            reiniciar()
            break
        case "√":
                result = Math.sqrt(parseInt(parteDerecha))
                parteIzquierda = result
                screen.value = result
                reiniciar()
                break
    }
}

