function comecar() {
    var numsecreto = parseInt(Math.random() * 501)
   
    while ( chute != numsecreto) {
        var chute = prompt('Escolha um número entre 1 e 500')
    if (chute == numsecreto){
        alert('Parabéns, você acertou!')
    } else if (chute > numsecreto) {
        alert('Você errou, o número é menor.')
    } else if (chute < numsecreto) {
        alert('Você errou, o número é maior')
    } else {
        alert('Parabéns, você acertou!!')
    }
    } 
}