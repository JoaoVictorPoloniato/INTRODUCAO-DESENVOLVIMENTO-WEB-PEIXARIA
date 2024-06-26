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
    initMap();
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
    initMiniMap();
}

function createModal(city) {

    var modal = document.createElement('div');
    modal.classList.add('modal');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    var title = document.createElement('h2');
    title.textContent = 'Evento em ' + city;
    modalContent.appendChild(title);

    var eventInfo = document.createElement('p');

    eventInfo.textContent = 'Informações sobre os eventos de pesca em ' + city;
    modalContent.appendChild(eventInfo);

    var closeButton = document.createElement('button');

    closeButton.textContent = 'Fechar';
    closeButton.addEventListener('click', function() {
        modal.remove();
    });
    modalContent.appendChild(closeButton);

    modal.appendChild(modalContent);

    document.body.appendChild(modal);
}

function showEventInfo(city) {
    createModal(city);
}

function exibirQuadro() {

    var quadro = document.getElementById("quadro");
    quadro.style.display = "block";
}

function esconderQuadro() {
    
    var quadro = document.getElementById("quadro");
    quadro.style.display = "none";
}

function showEventInfo(city) {
    
    createModal(city);

    exibirQuadro();
}

function initMiniMap() {
    
    var centroMapa = { lat: -11.8605, lng: -55.5063 };

    var mapaOptions = {
        center: centroMapa,
        zoom: 8, 
        disableDefaultUI: true 
    };

    var minimapa = new google.maps.Map(document.getElementById('minimapa'), mapaOptions);

    var rios = [
        { nome: 'Teles Pires', coordenadas: { lat: -11.6875, lng: -54.8431 } },
        { nome: 'Paranatinga', coordenadas: { lat: -14.6094, lng: -54.0625 } }
    ];

    for (var i = 0; i < rios.length; i++) {
        var rio = rios[i];
        new google.maps.Marker({
            position: rio.coordenadas,
            map: minimapa,
            title: rio.nome
        });
    }

    var zoomInButton = document.createElement('button');
    zoomInButton.innerHTML = '+';
    zoomInButton.onclick = function() {
        minimapa.setZoom(minimapa.getZoom() + 1);
    };
    minimapa.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomInButton);

    var zoomOutButton = document.createElement('button');
    zoomOutButton.innerHTML = '-';
    zoomOutButton.onclick = function() {
        minimapa.setZoom(minimapa.getZoom() - 1);
    };
    minimapa.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomOutButton);
}

google.maps.event.addDomListener(window, 'load', initMiniMap);
