'use strict';

// Módulo do catálogo
var catalogo = (function($) {
 
    // Inicialização do módulo
    function init() {
        _render();
    }
 
    // Renderizar um catálogo
    function _render() {
        var template = _.template($('#catalogo-template').html()),
            $goods = $('#goods');
 
        $.getJSON('data/goods.json', function(data) {
            $goods.html(template({goods: data}));
        });
    }
 
    // Exportando para fora
    return {
        init: init
    }
     
})(jQuery);