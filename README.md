Leia-me do Blog de Pescaria
O que o blog nos oferece?
Nosso blog proporciona uma imersão completa no mundo da pescaria. Ele oferece informações valiosas sobre:

Locais de pesca: Dicas sobre os melhores lugares para pescar.
Festivais de pesca: Informações sobre eventos e festivais de pesca.
Cidades e pontos de pesca: Foco especial na região Centro-Oeste, destacando os melhores pontos e cidades para a prática da pescaria.
Estrutura do Código
O blog foi desenvolvido utilizando principalmente HTML, CSS e JavaScript. Utilizamos a API do Google Maps para exibir mapas interativos, facilitando a localização dos pontos de pesca.

Para melhorar a funcionalidade de busca no site, utilizamos jQuery, permitindo aos usuários encontrar palavras-chave específicas de forma eficiente.

Exemplo de Código jQuery
Abaixo está um exemplo de código jQuery utilizado em nosso site para implementar a funcionalidade de busca por palavras-chave:

<img src="./imagens/jquery.png" alt="Jquery">

Explicação do Código
Vamos explicar passo a passo o código jQuery apresentado:

$(document).ready(function() { ... });

Esta função assegura que o script só será executado após o carregamento completo do documento HTML.
$('#botao-pesquisa').click(function() { ... });

Define uma ação a ser executada quando o botão de pesquisa for clicado.
var termoPesquisa = $('#pesquisa').val().toLowerCase();

Captura o valor inserido pelo usuário no campo de pesquisa e o converte para letras minúsculas, garantindo que a busca não seja sensível a maiúsculas/minúsculas.
var elementoPesquisa = $('[data-palavra-chave="' + termoPesquisa + '"]');*

Seleciona todos os elementos no documento que contenham a palavra-chave inserida no atributo data-palavra-chave.
if (elementoPesquisa.length) { ... } else { ... }

Verifica se algum elemento correspondente à palavra-chave foi encontrado:
Se encontrado: Anima a rolagem da página para levar o usuário até o elemento.
Se não encontrado: Exibe um alerta informando que nenhum resultado foi encontrado para a palavra-chave inserida.
$('html, body').animate({ scrollTop: elementoPesquisa.offset().top }, 1000);

Anima a rolagem da página para o topo do elemento encontrado, ao longo de 1 segundo (1000 milissegundos).
alert("Nenhum resultado encontrado para '" + termoPesquisa + "'");

Exibe um alerta caso nenhum elemento correspondente seja encontrado.
$('#pesquisa').val('');

Limpa o campo de pesquisa após a tentativa de busca.
initMap();

Chama a função initMap, que inicializa o mapa interativo utilizando a API do Google Maps.
Este código melhora a experiência de busca no blog, permitindo aos usuários localizar rapidamente o conteúdo desejado e navegar de maneira eficiente.

Aqui esta o exemplo da onde utilizar ela no site 

<img src="./imagens/botao-pesquisa.png" alt="aonde usar no site">

##

Mapa Interativo de Pescaria
Criamos um mapa interativo utilizando JavaScript para facilitar a navegação e localização dos melhores pontos de pesca. O mapa é compacto e fácil de usar, permitindo que os usuários explorem diferentes áreas, como se estivessem usando o Google Maps online. Além disso, destacamos os locais de pesca e áreas com alta densidade de peixes.

<img src="./imagens/mapa.png" alt="aonde usar no site">
<img src="./imagens/mapa-unemat.png" alt="aonde usar no site">
<img src="./imagens/mapa2.png" alt="aonde usar no site">

Exemplo de Código do Mapa
Abaixo está o código JavaScript utilizado para criar o mapa interativo:

<img src="./imagens/codmap1.png" alt="cod1">
<img src="./imagens/codmap2.png" alt="cod2">
<img src="./imagens/codmap3.png" alt="cod3">
<img src="./imagens/codmap4.png" alt="cod4">
<img src="./imagens/codmap5.png" alt="cod5">

Função initMap()
A função initMap inicializa o mapa principal e adiciona marcadores para os locais de pesca:

Configuração do Mapa:
O código define o centro do mapa e o nível de zoom inicial:

var mapOptions = {
    center: {lat: -11.8605, lng: -55.5063},
    zoom: 12 
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
Locais de Pesca:
Um array contém informações sobre os locais de pesca, incluindo nome, coordenadas e imagem:

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
Adicionando Marcadores:
Para cada local, um marcador é criado e adicionado ao mapa. Uma InfoWindow é configurada para exibir informações sobre o local ao clicar (em dispositivos móveis) ou ao passar o mouse (em desktops):

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
Função createModal(city)
A função createModal cria um modal para exibir informações sobre eventos de pesca em uma cidade específica:

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
Cria um modal com título, informações sobre o evento e um botão para fechar o modal.
Função showEventInfo(city)
A função showEventInfo chama createModal para exibir informações sobre eventos de pesca em uma cidade e exibe um quadro adicional:

function showEventInfo(city) {
    createModal(city);
    exibirQuadro();
}
Funções exibirQuadro() e esconderQuadro()
Estas funções exibem ou escondem um quadro de informações na página:

function exibirQuadro() {
    var quadro = document.getElementById("quadro");
    quadro.style.display = "block";
}

function esconderQuadro() {
    var quadro = document.getElementById("quadro");
    quadro.style.display = "none";
}
Função initMiniMap()
A função initMiniMap inicializa um minimapa com alguns rios marcados:

Configuração do Mini Mapa:
O código define o centro do minimapa e o nível de zoom inicial:

var centroMapa = { lat: -11.8605, lng: -55.5063 };

var mapaOptions = {
    center: centroMapa,
    zoom: 8, 
    disableDefaultUI: true 
};

var minimapa = new google.maps.Map(document.getElementById('minimapa'), mapaOptions);
Rios:
Um array contém informações sobre os rios, incluindo nome e coordenadas:

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
Botões de Zoom:
Botões de zoom são adicionados ao minimapa:

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
Finalmente, a função initMiniMap é chamada quando a janela é carregada:

google.maps.event.addDomListener(window, 'load', initMiniMap);


Este código cria uma experiência de usuário rica e interativa, permitindo explorar locais de pesca e visualizar informações relevantes de maneira intuitiva.