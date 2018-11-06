/*---------------------------------------------------------
                La disponibilité du DOM
    
    A partir du moment, ou mon DOM, c'est à dire
    l'ensemble de l'arborescence de ma page HTML
    est complétement chargé ; je peux commencer
    à utiliser jQuery.

    Je vais mettre l'ensemble de mon code dans une
    fonction, sui sera appelée automatiquement ! Par
    jQuery lorsque le DOM sera entièrement défini.

    3 façons :
*/
jQuery(document).ready(function() {
    // -- Ici le DOM est entiérement chargé ;
    // -- Je peux procéder à mon code !
});
// -- 2ème méthode
$(document).ready(function() {
    // -- Ici le DOM est entiérement chargé ;
    // -- Je peux procéder à mon code !
});

// -- 3ème méthode
$(function() {
    // ...
});

// -- 4ème méthode en ES6
$(() => {
    // ...
    // -- En JS
    document.getElementById('texteEnJQ').innerHTML = "<strong>Mon texte en JS</strong>";
    // -- En JQ
    $('#texteEnJQ').html("<h3>Mon texte en jQuery</h3>");
});