/**
 * JS - Produto (Card e Listas)
 * UI Categorias, Buscas, Marcas etc...
 */

import {isMobile} from '../../functions/mobile';

$(document).ready(function () {
   
    if (!isMobile()) {

        /**
         * Semantic-UI DropDown
         * Monta lista de DropDown Cards e Lista de produtos.
         */
        $(".sku-options .ui.dropdown").dropdown({
            direction: "upward",
        });
    }

});

$(document)
    .on("click", ".quantidade-modificadores i.icon.caret", function() {
        let $input = $(this)
                .closest(".quantidade-block")
                .find("input"),
            value = parseInt($input.val());

        if ($(this).hasClass("up")) {
            $input.val(value + 1);
        }
        if ($(this).hasClass("down")) {
            if (value <= 1) {
                return false;
            }
            $input.val(value - 1);
        }
    })
    .on("change", ".quantidade-block input", function() {
        if (parseInt($(this).val()) < 1) {
            $(this).val("1");
        }
    });