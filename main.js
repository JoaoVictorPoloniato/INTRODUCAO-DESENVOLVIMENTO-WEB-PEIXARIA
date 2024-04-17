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
    var mapOptions = {
        center: {lat: -11.8605, lng: -55.5063},
        zoom: 12 
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var locaisDePesca = [
        { 
            nome: 'Salto Magessi - Santa Rita do Trivelato',
            coordenadas: { lat: -13.7708, lng: -55.2903 },
            imagem: './imagens/Salto-magessi.jpg'
        },
        {
            nome: 'Marina Santo Expedito - Itaúba',
            coordenadas: { lat: -11.8389, lng: -55.2833 },
            imagem: './imagens/Santo-expedito.png'
        },
        {
            nome: 'Córrego Luanda',
            coordenadas: { lat: -11.8481, lng: -55.6692 },
            imagem: './imagens/luanda.png'
        },
        {
            nome: 'Marina Mac Dog',
            coordenadas: { lat: -11.8123, lng: -55.4822 },
            imagem: './imagens/Salto-magessi.jpg'
        },
        {
            nome: 'Marina Tapajós',
            coordenadas: { lat: -11.8551, lng: -55.4995 },
            imagem: './imagens/Salto-magessi.jpg'
        }
    ];

    for (var i = 0; i < locaisDePesca.length; i++) {
        var local = locaisDePesca[i];
        var marker = new google.maps.Marker({
            position: local.coordenadas,
            map: map,
            title: local.nome
        });

        (function(marker, local) {
            var infoWindow = new google.maps.InfoWindow({
                content: '<div><h3>' + local.nome + '</h3><img src="' + (local.imagem || '') + '" width="200"></div>'
            });

            if ($(window).width() <= 768) {
                marker.addListener('click', function() {
                    infoWindow.open(map, this);
                });
            } else {
                marker.addListener('mouseover', function() {
                    infoWindow.open(map, this);
                });

                marker.addListener('mouseout', function() {
                    infoWindow.close();
                });
            }
        })(marker, local);
    }
}

function toggleEventInfo(city) {
    const eventoInfo = document.getElementById(`${city}-evento`);
    eventoInfo.classList.toggle('active');
}
