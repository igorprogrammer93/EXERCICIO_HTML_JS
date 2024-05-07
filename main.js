function validarFormulario() {
    var numA = parseFloat(document.getElementById('campoA').value);
    var numB = parseFloat(document.getElementById('campoB').value);
    
    if (numB > numA) {
        document.getElementById('mensagem').innerHTML = "Formulário <b>VÁLIDO</b>: O número do <b>Campo:B</b>, é maior que o número do <b>Campo:A.</b>";
    } else {
        document.getElementById('mensagem').innerHTML = "Formulário <b>INVÁLIDO!</b>: O número do <b>Campo:B</b>, deve ser maior que o número do <b>Campo:A.</b>";
    }
    }