/* --
    CONSIGNE : 
    
    A partir du tableau fourni, vous devez mettre en place un système d'authentification. 
    Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, 
    et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue 
    avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    { prenom: 'Hugo', nom: 'LIEGEARD', email: 'wf3@hl-media.fr', mdp: 'wf3' },
    { prenom: 'Rodrigue', nom: 'NOUEL', email: 'rodrigue@hl-media.fr', mdp: 'wf3' },
    { prenom: 'Nathanael', nom: 'DORDONNE', email: 'nathanael.d@hl-media.fr', mdp: 'wf3' }
];
var nb = BaseDeDonnees.length;
// -- Demander à l'utilisateur son email et son mot de passe
const mail = prompt("Bonjour ! Connexion espace sécurisé", "Veuillez saisir votre mail");
const motDePasse = prompt("Votre mot de passe", "Veuillez saisir votre mot de passe");
// -- Vérifier si l'email et le mot de passe données correspondent à la BDD


/* La seconde méthode avec find */
function cherche(mailUser) {
    //retourne l'objet qui correspond à la condition sinon retourne undefined
    return mailUser.email === mail && mailUser.mdp === motDePasse;
}
// return BaseDeDonnees.find(user => user.email === mail && user.mdp === motDePasse);
var identifiant = BaseDeDonnees.find(cherche);




/* Méthode avec une boucle dans une fonction */
/*
function login(email, mdp) {
    for (let i = 0; i < nb; i++) {
        if (email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp) {
            return BaseDeDonnees[i];
        }
    }
    return false;
}
var identifiant = login(mail, motDePasse);
*/


if (!identifiant || identifiant === 'undefined') {
    // -- En cas d'échec informer l'utilisateur de l'erreur
    alert("ATTENTION !!! email / mdp incorrect !!");
} else if (mail === identifiant.email) {
    // -- En cas de succés lui souhaiter la bienvenue
    document.write("Bonjour " + identifiant.prenom + ', ' + identifiant.nom + " :) Bienvenue sur le site ! 👍🏼");
}