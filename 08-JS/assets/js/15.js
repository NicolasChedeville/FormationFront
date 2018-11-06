/*
CONSIGNE : 
Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
Considérons un Tableau JS contenant une liste de membre.
---------
ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.
Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.
A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.
---------
ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.
Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.
Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.
---------
ETAPE 3 : 
   
Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
---------
  
  ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
  En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
      A. L'ajout de l'utilisateur dans le tableau.
      B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
      Ex. Merci Hugo ! Tu es maintenant inscrit.
      Voici la liste de nos Membres :
      
          Hugo : 26ans
          Rodrigue : 56ans
          ...
          
      NB : Devra bien entendu s'afficher le 
      
      
      
      qui vient de s'inscrire.
*/
var membres = [
    { 'pseudo': 'Hugo', 'age': 26, 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'pseudo': 'Rodrigue', 'age': 56, 'email': 'rodrigue@hl-media.fr', 'mdp': 'roro' },
    { 'pseudo': 'James', 'age': 78, 'email': 'james@hl-media.fr', 'mdp': 'james8862' },
    { 'pseudo': 'Emilio', 'age': 18, 'email': 'milio@hl-media.fr', 'mdp': 'milioDu62' }
];
// Fonction de Flemmard
l = p => (console.log(p));
w = p => (document.write(p));
a = p => (alert(p));

const bienvenue = document.getElementById('Bienvenue');
const pseudo = document.getElementById('pseudo');
const age = document.getElementById('age');
const email = document.getElementById('email');
const mdp = document.getElementById('mdp');
const pseudoError = document.getElementsByClassName('pseudoError');
const ageError = document.getElementsByClassName('ageError');
const bouton = document.getElementById('submit');
var nb = membres.length;
// je vérifie si le pseudo existe. si c'est le cas alors on afiiche une div avec un erreur et on grise le bouton
function verifPseudo() {

    function cherche(pseudoMembre) {
        //retourne l'objet qui correspond à la condition sinon retourne undefined
        return pseudoMembre.pseudo === pseudo.value;
    }
    var identifiant = membres.find(cherche);
    //l(identifiant);
    if (identifiant) {
        pseudoError[0].setAttribute('style', "display:block");
        bouton.disabled = true;

    } else {
        pseudoError[0].setAttribute('style', "display:none");
        bouton.disabled = false;
    }
    bienvenue.textContent = "Bonjour " + pseudo.value;
    //bienvenue.appendChild(bienvenue);
}
//Ecoute ce qu'il se passe dans le champ input correspondant au pseudo pour executer la fonction verifPseudo
pseudo.addEventListener('input', verifPseudo);


function verifAge() {
    if (age.value < 18) {
        ageError[0].setAttribute('style', "display:block");
        bouton.disabled = true;
    } else {
        ageError[0].setAttribute('style', "display:none");
        bouton.disabled = false;
    }
}
//Ecoute ce qu'il se passe dans le champ input correspondant a l'age pour executer la fonction verifAge
age.addEventListener('input', verifAge);
var ul = document.createElement('ul');

function affichageUser() {
    document.body.appendChild(ul);
    for (let i = 0; i < nb; i++) {
        var li = document.createElement('li');
        li.textContent += membres[i].pseudo + ' : ' + membres[i].age;
        l(li.textContent);
        ul.appendChild(li);
    }

}

function insertUser() {
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    var insert = {
        'pseudo': pseudo.value,
        'age': age.value,
        'email': email.value,
        'mdp': mdp.value
    };
    //l(insert);
    membres.push(insert);
    nb++;
    h2.textContent = 'Merci ' + pseudo.value + ' ! Tu es maintenant inscrit. '
    p.textContent = 'Voici la liste de nos Membres :';
    document.body.appendChild(h2);
    document.body.appendChild(p);
    affichageUser();
}

function action(e) { // objet event passé en argument
    e.preventDefault(); // annule la redirection
}
bouton.onclick = action; //permet d'annuler la redirection du bouton vers la page php
//Ecoute ce qu'il se passe au niveau du bouton et appel la fonction insertUser
bouton.addEventListener('click', insertUser);