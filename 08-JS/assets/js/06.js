/***************************************
 *           Les fonctions 👩🏼‍💻 
 ***************************************/

/**
 * Déclarer une fonction.
 * NB: Cette fonction ne retourne
 * aucune valeur et ne prend pas 
 * de paramètres.
 */
function bonjour() {
    alert('Bonjour !');
}

/**
 * J'execute ma fonction, et je déclenche
 * ses instructions.
 */

bonjour();

// fonction nomDeMaFonction(arg1,arg2,argn){
//     les instructions
// }

function ditBonjour(prenom, nom) {
    document.write('Bonjour <strong>' + prenom + ' ' + nom + '</strong> !<br>');
}
ditBonjour('Nicolas', 'Chedeville');

/*********************************************************
 * Exercice:
 * Créez une fonction permettant de faire
 * l'addition de deux nombres 
 **********************************************************/

function addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write(addition(5, 20));