$(window).on('load', () => {
    $('#conteudo').load('./src/home.html')
    $('#home').on('click', () => {
        $('#conteudo').load('./src/home.html')
    })
    $('#tabu').on('click', () => {
        $('#conteudo').load('./src/tabuada.html')
    })
    $('#moeda').on('click', () => {
        $('#conteudo').load('./src/cotacao.html')
    })
    $('#sal').on('click', () => {
        $('#conteudo').load('./src/salario.html')
    })
    $('#imc').on('click', () => {
        $('#conteudo').load('./src/imc.html')
    })
    $('#game').on('click', () => {
        $('#conteudo').load('./src/adivinha.html')
    })
})
