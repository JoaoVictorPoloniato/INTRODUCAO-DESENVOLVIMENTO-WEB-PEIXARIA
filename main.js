$(document).ready(function() {
    $('#botao-pesquisa').click(function() {
        var termoPesquisa = $('#pesquisa').val().toLowerCase();
        var elementoPesquisa = $('[data-palavra-chave*="'+ termoPesquisa + '"]');
        if (elementoPesquisa.length) {
            $('html, body').animate({
                scrollTop: elementoPesquisa.offset().top
            }, 1000);
        } else {
            alert("Nenhum resultado encontrado para '" + termoPesquisa + "'");
        }

        $('#pesquisa').val('');
    });
});

function initMap() {
    // Configurações do mapa
    var mapOptions = {
        center: {lat: -11.8605, lng: -55.5063}, // Coordenadas do centro do mapa
        zoom: 10 // Nível de zoom
    };

    // Criar o mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adicionar marcador
    var marker = new google.maps.Marker({
        position: {lat: -11.8605, lng: -55.5063}, // Coordenadas do marcador
        map: map,
        title: 'Sinop, MT' // Título do marcador
    });
}