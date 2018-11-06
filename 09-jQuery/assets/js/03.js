/*----------------------------------------------
 *           Le chainage de méthodes
 ----------------------------------------------*/

$(function() {
    // -- DOM IS READY TO ROCK !!

    // -- Je souhaite chacher toutes les div de ma page HTML ?
    /* $('div').hide('slow', function() {
        //alert('Fin du Hide');
        // -- NB : La fonction s'executera pour l'ensemble des éléments du sélecteur.

        $('div').css('background-color', 'yellow');
        $('div').css('color', 'red');
        // -- Je fait réapparaitre mes DIV
        $('div').show();
    }); */
    // -- En utilisant le chainage de méthode,
    //      vous pouvez faire s'enchainer plusieurs
    //      fonctions les unes après les autres.
    //$('p').hide(2000).css('color', 'blue').css('font-size', '20px').delay(2000).show(500);
    $('p').hide(2000).css({ 'color': 'blue', 'font-size': '20px' }).delay(2000).show(500);


});