/******************************************************
 * 
 *               La Concatanation 🐥 
 * 
 ******************************************************/

var debutDePhrase = "Aujourd'hui ";
var dateDuJour = new Date();
var suiteDePhrase = ", sont présent : ";
var nbApprenants = 17;
var finDePrase = " apprenants. <br>"

/**
 * Nous souhaitons maintenant, grâce à la concaténation,
 * afficher le tout en une phrase sur notre page !
 */
document.write(debutDePhrase + dateDuJour.getDate() + '/' + (dateDuJour.getMonth() + 1) + '/' + dateDuJour.getFullYear() + suiteDePhrase + nbApprenants + finDePrase);