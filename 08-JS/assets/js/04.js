/**
 * Les Opérateurs Arithmetiques
 */
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;
// -- L'Addition -- 
resultat = nb1 + nb2;
console.log('L\'addition de nb1 et nb2 = ' + resultat);
// -- La Soustraction -- 
resultat = nb1 - nb2;
console.log('La soustraction de nb1 et nb2 = ' + resultat);
// -- La Multiplication -- 
resultat = nb1 * nb2;
console.log('La multiplication de nb1 et nb2 = ' + resultat);
// -- La Division -- 
resultat = nb1 / nb2;
console.log('La division de nb1 et nb2 = ' + resultat);
// -- Le Modulo --  (le reste de la division)
nb1 = 11;
resultat = nb1 % nb2;
console.log('Le modulo de nb1 et nb2 = ' + resultat);

/**
 * Les écritures simplifiées
 */
nb1 = 15;
nb1 = nb1 + 5;
nb1 += 5;
// -- Je peux procéder de la même manière pour tous les autres opérateurs arithmétiques...