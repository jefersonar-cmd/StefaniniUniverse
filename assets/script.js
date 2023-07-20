$(window).on('load', () => {
    $('#conteudo').load('./src/cotacao.html')
    $('#home').on('click', () => {
        $('#conteudo').load('./src/home.html')
    })
    $('#tabu').on('click', () => {
        $('#conteudo').load('./src/tabuada.html')
    })
})