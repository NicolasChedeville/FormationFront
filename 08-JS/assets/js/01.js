alert('Fichier JS fonctionnel !');
// Commentaire uniligne raccourci : CTRL + :
/* Commentaire sur plusieurs ligne raccourci : CTRL + MAJ + A */

//  -- 1 : Déclarer un evariabla JS
var prenom;

//  -- 2 : Affectation d'une valeur
prenom = "Nicolas";

//  -- 3 : Affichage de la variable
console.log(prenom);

/*-------------------------------------------
|   ~~~~~~ Les types de variables ~~~~~~    |
--------------------------------------------- */
// -- typeof me permet de connaitre le type de ma cariable
console.log(typeof prenom);
// -- Déclaration et affectation de ma variables
var age = 40;
// -- Connaitre son type
console.log(typeof age);

/*-----------------------------------------------------------------------
|              ~~~~~~ La portée des variables ~~~~~~                    |
|                                                                       |
|    Les variables déclarées directement à la racine du fichier JS,     |
|    sont appelées variables "globales"                                 |
|    Elles sont disponibles dans l'ensemble de notre documents y        |
|    compris dans les fonctions.                                        |
|                                                                       |
|    #####                                                              |
|                                                                       |
|    Les variables déclarées à l'intérieur d'une fonction sont appelées |
|    variables "locales"                                                |
|                                                                       |
|    Elles sont disponibles uniquement dans le scope (l'espace)         |
|    de la fonction                                                     |
|                                                                       |
------------------------------------------------------------------------- */

// -- Les variables de type float
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les variables de type Booléens (vrai ou faux)
var unBooleen = false;
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les constantes
/*********
 **  La déclaration const me permet de créer une constante
 **  accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas 
 **  être modifié par des réaffectations ultérieures.
 **  Une constante ne peut pas être déclarée à nouveau...
 **********/
const host = "localhost";
const user = "root";
const password = "mysql";

// Je ne peux pas faire cela
// user="hugo";
// Uncaught TypeError : Assigment to constant variable.

unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);
// -- La fonction "parseInt()" pour retourner un Entier à partir de mon string
// -- Pour convertir un entier
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Pour convertir un Float
unNombre = "12.55";
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Pour convertir un nombre entier ou float en string
unNombre = 10;
var monString = unNombre.toString();
console.log(monString);
console.log(typeof monString);