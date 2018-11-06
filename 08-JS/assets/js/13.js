/*----------------------------------------------------
        La manipulation des contenus
-----------------------------------------------------*/
l = e => console.log(e);
// -- Je souhaite récupérer mon lien Google... Comment procéder ?

const google = document.getElementById('google');
l(google);

// -- Maintenant je souhaite accéder aux information de ce lien..

// -- A : Le lien vers lequel pointe la balise
l(google.href);

// -- B : L'id de la balise
l(google.id);

// -- C : La classe de la balise
l(google.className);

// -- D : Le texte de la balise
l(google.textContent);

/**
 * Maintenant je souhaite modifier le texte de mon lien
 */
google.textContent = 'Mon lien vers GoOooooOOooOOooooOOoOoooOoOgle !';

/*------------------------------------
  * Ajouter un élément dans ma page
--------------------------------------  */

// -- Définition de l'élément
const span = document.createElement('span');
//je donne un id au span
span.id = "monSpan";
//je rajoute du texte
span.textContent = "Mon beau texte en JS";
//je le place dans le lien "#google"
google.appendChild(span);


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */
const titre = document.createElement('h1');
const a = document.createElement('a');

a.textContent = "Titre de mon Article";
a.href = "http://www.allocine.fr/";

a.style.color = "red";
a.style.textDecoration = "none"
titre.appendChild(a);
document.body.appendChild(titre);
//document.body.insertBefore(titre, google);