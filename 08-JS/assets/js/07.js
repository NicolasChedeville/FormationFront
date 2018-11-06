/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */
function question() {
    var name, age, year;
    name = prompt('Bonjour ! Quel est votre prénom ?', '<Saisir votre prénom>');
    age = parseInt(prompt('Bonjour ' + name + ' quel age as-tu ?', '<Saisir votre age>'));
    year = new Date().getFullYear() - age;
    alert('Tu es donc né en ' + year);
    return {
        prenom: name,
        age: age,
        anneeNaissaince: year
    };
}

var reponse = question();
document.write('Bonjour ' + reponse.prenom + ', tu as ' + reponse.age + ' ans.');