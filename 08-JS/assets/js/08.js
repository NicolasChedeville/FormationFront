/********************************
 *       Les Conditions ❔      *
 ********************************/
/*
var majoriteLegaleFR = 18;
if (15 >= majoriteLegaleFR) {
    alert('Welcome :)');
} else {
    //le else n'est pas obligatoire
    alert('Va voir chez Google si...');
}
*/
/* -------------------------------
             EXERCICE
    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */
/**
 * Dans la version 6 il faut préviligier les constantes.
 */
/*
const majoriteLegaleFR = 18;
const age = parseInt(prompt("Quel age avez-vous ?", 'Saisissez votre age'));

function ageLegale(age) {
    if (age >= majoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}
if (ageLegale(age)) {
    alert("Welcome :) !");
} else {
    alert("Vous devez être majeur pour pour acceder au site !!");
    document.location.href = 'https://google.fr';
}
*/
/*---------------------------------------------------------------
 |              LES OPERATEURS DE COMPARAISON                   |
 | ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  |
 |                                                              |
 |  L'opérateur de comparaison "=="  signifie que : Egal à.     |
 |  Il permet de vérifier que deux variables sont identiques.   |
 |                                                              |
 |  L'opérateur de comparaison "===" signifie : strictement     |
 |  égal à. Il va comparer la valeur, mais aussi le type        |
 |                                                              |
 |  if(14 == "14"){} // true                                    |
 |  if(14 === "14"){} // false                                  |
 |  if(14 === 14){} //true                                      |
 |                                                              |
 |  L'opérateur "!=" : Différent de                             |
 |  L'opérateur "!==" : Strictement Différent de                |
 |                                                              |
 ****************************************************************/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";

// -- 2.  Je vérifie si le mail / mdp correspond avec ceux de la BDD
function login(mailUser, mdpUser) {
    return mailUser === email && mdpUser === mdp;
}
// -- 1. Demande à l'utilisateur son mail / mdp
const mail = prompt("Bonjour ! Connexion espace sécurisé", "Veuillez saisir votre mail");
const motDePasse = prompt("Votre mot de passe", "Veuillez saisir votre mot de passe");
// -- 2.  Je vérifie si le mail / mdp correspond avec ceux de la BDD
if (login(mail, motDePasse)) {
    // -- 3. Tous est OK
    alert("Bienvenue sur le site");
} else {
    // -- 4. Erreur d'autentification
    alert("ATTENTION !!! email / mdp incorrect !!");
}
/*  
        /* --------------------------------------------------------------*\
       /                                                                   \
      /                 Les Opérateurs logiques                             \
     /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
        |       L'opérateur ET : && Si la combinaison email et mail         |
        |       correspond, ET la combinaison mdp et motDePasse correspond. |
        |                                                                   |
        |       Dans cette condition, les 2 doivent OBLIGATOIREMENT         |
        |       Correspondre pour être validée.                             |
        |       Ex : if(mail === email && motDePasse === mdp){...}          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
        |                                                                   |
        |       L'opérateur OU : || Si la condition email et mail           |
        |       correspond, ET / OU la combinaison motDePasse et mdp        |
        |       correspond                                                  |
        |                                                                   |
        |       Dans cette condition, au moins l'une des deux doit          |
        |       correspondre pour être validée.                             |
        |       Ex :  if (mail === email || motDePasse === mdp){...}        |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
        |                                                                   |     
        |       L'opération " ! " ou encore NOT                             |
        |       Il signifie le contraire de, different de                   |
        |                                                                   |
        |       var monUtilisateurEstApprouve = true                        |
        |       if(! monUtilisateurEstApprouve){ ... }                      |`
        |       si mon utilisateur n'est pas approuvé                       |
        \*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _*/