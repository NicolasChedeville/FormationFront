/*---------------------------------------
 *           Les Evenements
 ----------------------------------------/
 Les évenements vont me permettre de déclencher une 
 fonction, c'est à dire une série d'instructions :
 suite à une action de mon utilisateur.

 Objectif : Être en mesure de capturer ces évenements
 afin d'executer une fonction.

 Les évenements : MOUSE (Souris)
    click : au clic sur un élément ;
    dblclick : au douvle clic ;
    mouseenter : la souris passe au dessus d'un élément ;
    mouseleave : la souris sors de l'élément ;
    mouseover : au passage de la souris.

    https://developer.mozilla.org/fr/docs/Web/API/MouseEvent

Les évenements : KEYBORD (Clavier)
    keyup : une touche du clavier a été relachée;
    keydown : une touche est enfoncée.

    https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

Les évenements : WINDOW (Fenêtre)
    scroll : défilement de la fenêtre ;
    resize : redimentionnement de la fenêtre.

Les évenements : FORM (Formulaire)
    change : pour les éléments <input>, <select> et <textarea>
    submit : à l'envoi (soumission) du formulaire ;
    input : pour capter la saisie de l'utilateur sur un champ <input>

Les écouteurs d'évenements
Pour attacher un évenement à un élément, ou autrement dit,
pour déclarer un écouteur d'évenement qui se chargera de 
déclencher une fonction, je vais utiliser la syntaxe suivante :
-------------------------------------------------------------------------------*/

const p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge() {
    p.style.color = 'red';
}

function changerLaCouleurEnNoir() {
    p.style.color = 'black';
}

p.addEventListener('mouseenter', changerLaCouleurEnRouge);
p.addEventListener('mouseleave', changerLaCouleurEnNoir);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

const input = document.createElement('input');
input.id = "saisi";
input.type = 'text';
input.placeholder = "saisissez un text";
document.body.appendChild(input);

const receptionInput = document.getElementById("saisi");

/**
 * On écoute l'évenement "change" sur le champ "input"
 * et on execute la fonction "alertInput".
 */
function alertInput() {
    alert(input.value);
}
input.addEventListener('change', alertInput);