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