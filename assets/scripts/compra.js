const shows = [
    {
        img: '../assets/images/BAR1.jpg',
        descricao: '6 DE ABRIL DE 2024 <br>Endereço: AV RODRIGO OTAVIO - MANAUS  - AM <br>Local: STUDIO 5<br> Abertura das Portas: 19:00 <br> Classificação: +18 ',
        titulo: 'Bar Aquarius',
    },

    {
        img: '../assets/images/BAR2.webp',
        descricao: '29 DE JUNHO DE 2024 <BR> Endereço: PARINTINS - PARINTINS - AM <br> Local: AMAZON RÍVER <br> Abertura das Portas: 11:00 <br>Classificação: +18 ',
        titulo: 'Bar Piry'
    },

    {
        img: '../assets/images/BAR4.jpg',
        descricao: ' 24 DE AGOSTO DE 2024 <br> Endereço: AV RODRIGO OTAVIO - MANAUS - AM <br> Local: STUDIO 5 <br> Abertura das Portas: 22:00 <br> Início do Evento: 22:00 <br> Classificação: +18 ',
        titulo : 'Bar Petra'
    },

    {
        img: '../assets/images/BAR3.webp',
        descricao: '30 DE MARÇO DE 2024<br>Endereço: ESTAC. RIO TAPAJÓS SHOPPING - SANTARÉM - PA <br> Local: ESTAC. RIO TAPAJÓS SHOPPING <br>Abertura das Portas: 21:00 <br>Classificação: +18 ',
        titulo: 'Bar Tatu Bola'
    },

    {
        img: '../assets/images/BAR5.jpg',
        descricao: '4 DE MAIO DE 2024 <br> Endereço: UNIVERSIDADE NILTON LINS - MANAUS - AM <br> Local: UNIVERSIDADE NILTON LINS <br> Abertura das Portas: 16:00 <br> Classificação: Livre',
        titulo: 'Bar Woodstock',
    },

    {
        img: '../assets/images/Bar6.webp',
        descricao: '13 DE ABRIL DE 2024 <br> Endereço: AV RODRIGO OTAVIO - MANAUS - AM <br> Local: STUDIO 5 <br> Abertura das Portas: 22:00 <br> Classificação: +18 ',
        titulo: 'Bar Dodô'
    },

    {
        img: '../assets/images/BANNER1BAR',
        descricao:'4 DE MAIO DE 2024 <br> Endereço: CARNANINDEUA - ANANINDEUA - PA <br> Local: AV ARTERIAL 18 <br> Abertura das Portas: 21:00 <br> Classificação: +18',
        titulo: 'Simone Mendes'
    },

    {
        img: '../assets/images/BANNER2.png',
        descricao: '13 DE ABRIL DE 2024 <br> Endereço: AV RODRIGO OTAVIO - MANAUS - AM <br> Local: STUDIO 5 <br> Abertura das Portas: 22:00 <br> Classificação: +18 ',
        titulo: 'Paralamas do Sucesso'
    },

    {
        img: '../assets/images/jota27813-20231008125757.webp',
        descricao: '4 DE MAIO DE 2024 <br> Endereço: CARNANINDEUA - ANANINDEUA - PA <br> Local: AV ARTERIAL 18 <br> Abertura das Portas: 21:00 <br> Classificação: +18',
        titulo: 'Jota Quest'
    }
]

let idElementoClicado = localStorage.getItem('idElementoClicado');

mudaImagem()
mudaDescricao()
mudaTitulo()

function mudaImagem () {
    const imagem = document.getElementById('show-img')
    imagem.src = shows[idElementoClicado].img
}

function mudaDescricao() {
    const descricao = document.getElementById('show-descricao')
    descricao.innerHTML = shows[idElementoClicado].descricao
}

function mudaTitulo () {
    const tituloShow = document.getElementById('titulo-show')
    tituloShow.innerText = shows[idElementoClicado].titulo
}


