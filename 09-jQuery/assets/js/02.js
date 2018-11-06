/*------------------------------------------------
 *              Les Sélecteurs jQuery
 -----------------------------------------------*/
// -- Le format est le suivant : $('selecteur')
// -- En jQuery, tout les sélecteurs CSS sont disponible...

$(function() { // -- Les DOM et ready
    // -- Les flémmards JS
    l = p => console.log(p);
    // -- Sélectionner les balises SPAN :
    l(document.getElementsByTagName('span'));
    l($('span'));
    // -- Selectionner mon Menu par son ID
    l(document.getElementById('menu'));
    l($('#menu'));
    /* -- Remarquez que jQuery, me permet de selectionner des élements
        de façon beaucoup plus simple que JavaScript */

    // -- Selectionner une classe :
    l(document.getElementsByClassName('maClasse'));
    l($('.maClasse'));

    l($('[href="https://google.fr"]')); // -- Attention aux guillemets
    l($('[href]'));
});