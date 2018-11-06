/*---------------------------------------------------
 *      Les Sélecteurs d'Enfants jQuery
 ----------------------------------------------------*/

$(function() {
    l = p => console.log(p);
    // -- je souhaite selectionner toutes les div de ma page
    l($('div'));
    // -- je souhaite selectionner le menu de ma page
    l($('#menu'));
    // -- En partant du menu , je souhaite cibler tous les éléments descendants direct (enfants) qui sont dans '#menu'
    l($('#menu').children());
    // -- Parmi ces descendants, je souhaite cibler uniquement l'élément 'ul'
    l($('#menu').children('ul'));
    // -- En partant du 'ul', je souhaite récupérer tous les éléments "li"
    //l($('#menu').children('ul').children());
    //l($('#menu').children('ul').find('li');
    l($('#menu').find('li'));
    // -- Je souhaite récupérer uniquement le 2ème élément "li"
    // -- ici je ne pourrais appeler que des méthodes javascript ; plus de chainage jQuery possible
    l($('#menu').find('li')[1] );
    l($('#menu').find('li').get(1));
    // -- Ici je conserve mes fonction jQuery, je peux donc continuer mon chainage (METHODE RECOMMANDEE)
    l($('#menu').find('li').eq(1));
    // -- Je souhaite connaitre le voisin immediat de mon "#menu"
    l($('#menu').next() );
    l($('#menu').next().next() ); // -- Le voisin du voisin
    l($('#menu').prev() ); // -- Le voisin d'avant
    l($('#menu').parent() ); // -- Le parent



});