
 function clicou(id) {
    let showId = id   
    localStorage.setItem('idElementoClicado', showId)
    window.location.href = 'pages/compra.html'
}

