/********************************
 *       Les Boucles 🔗         *
 ********************************/
/**
 * Pour i=0; Tant que i est strictement inférieur ou égal à 10; alors j'incrémente i de 1
 */
for (let i = 0; i <= 10; i++) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}
document.write('<hr>');
var j = 0;
while (j <= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');
    // ATTENTION à ne pas oublier l'incrémentation
    j++;
}

/*************************************
 *           EXERCICE
 *************************************/
const Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];
/**
 * Consigne : Grâce à une boucle FOR ou autre..,
 * afficher la liste des prénoms du tableau
 * ci-dessus dans la console ou sur votre page
 */
document.write('<p>');
var nb = Prenoms.length;
for (let i = 0; i < nb; i++) {
    if (Prenoms[i] != 'Hugo') {
        document.write(i + 1 + ' : ' + Prenoms[i] + '<br>');
    } else {
        // Supprime un élement du tableau
        Prenoms.splice(6, 1);
        i--;
    }
}
document.write('</p>');
console.log(Prenoms);

// -- ATTENTION !!!!! A LA PERFORMANCE

Prenoms.forEach(afficheUnPrenom);

function afficheUnPrenom(prenom, index) {
    console.log(index + ' ' + prenom);
}