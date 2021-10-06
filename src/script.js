function converter() {
    var temp1 = exibeTempInicialSelecionada();
    var temp2 = exibeTempFinalSelecionada();
    var tempConverter = parseFloat(document.getElementById("temperaturaInicial").value);
    valida_form()

    if (temp1 == temp2) {
        swal.fire({
            confirmButtonColor: '#3085d6',
            icon: 'error',
            text: "Selecione outra temperatura final"
        }
        )
    } else if (temp1 == 'Celcius' && temp2 == 'Fahrenheit') {
        var tempConvertida = (tempConverter * 9 / 5) + 32;
        document.getElementById("temperaturaConvertida").value = parseFloat(tempConvertida);
    } else if (temp1 == 'Celcius' && temp2 == 'Kelvin') {
        var tempConvertida = tempConverter + 273.15;
        document.getElementById("temperaturaConvertida").value = parseFloat(tempConvertida);
    }else if (temp1 == 'Fahrenheit' && temp2 == 'Celcius') {
        var tempConvertida =  (tempConverter - 32) * 5/9;
        document.getElementById("temperaturaConvertida").value = parseFloat(tempConvertida);
    }else if (temp1 == 'Fahrenheit' && temp2 == 'Kelvin') {
        var tempConvertida =  (tempConverter - 32) * 5/9 + 273.15;
        document.getElementById("temperaturaConvertida").value = parseFloat(tempConvertida);
    }

    
    console.log(tempConverter)
    console.log(tempConvertida)
}

var tempInicial = document.getElementById("temperatura");
var tempFinal = document.getElementById("tempConvertida");

function exibeTempInicialSelecionada(tempSelectInicial) {
    var tempSelectInicial = tempInicial.options[tempInicial.selectedIndex].value;
    console.log("inicial: ", tempSelectInicial)

    return tempSelectInicial
}

function exibeTempFinalSelecionada(tempSelectFinal) {
    var tempSelectFinal = tempFinal.options[tempFinal.selectedIndex].value;
    console.log("final: ", tempSelectFinal);

    return tempSelectFinal;
}
tempInicial.onchange = exibeTempInicialSelecionada;
tempFinal.onchange = exibeTempFinalSelecionada;
exibeTempInicialSelecionada();
exibeTempFinalSelecionada();

function valida_form() {
    if (document.getElementById("temperaturaInicial").value.length < 1) {
        document.getElementById("temperaturaInicial").focus();
        Swal.fire({
            confirmButtonColor: '#3085d6',
            icon: 'error',
            text: 'Por favor, preencha o valor da temperatura'
        });
        return false
    }
}