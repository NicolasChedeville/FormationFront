/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique : 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ol / ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale.
*/

var PremierTrimestre = [{
        nom: "LIEGEARD",
        prenom: "Hugo",
        matiere: {
            francais: 12,
            math: 14,
            physique: 8,
            informatique: 18,
            anglais: 15
        }
    },
    {
        nom: "NOUEL",
        prenom: "Rodrigue",
        matiere: {
            francais: 10,
            math: 9,
            physique: 15,
            musique: 16,
            espagnol: 12,
            danse: 8,
            histoire: 14
        }
    },
    {
        nom: "DORDONNE",
        prenom: "Nathanael",
        matiere: {
            italien: 15,
            sport: 17,
            math: 12,
            artplastique: 13,
            allemand: 10,
            siences: 19,
            francais: 16,
            informatique: 11
        }
    },
    {
        nom: "CHEDEVILLE",
        prenom: "Nicolas",
        matiere: {
            francais: 10,
            sport: 18,
            math: 15,
            artplastique: 14,
            anglais: 7,
            physique: 19,
            espagnol: 5,
            informatique: 18,
            electronique: 16,
        }
    },
    {
        nom: "BOUSSAID",
        prenom: "Hocine",
        matiere: {
            francais: 12,
            sport: 15,
            math: 16,
            artplastique: 5,
            anglais: 10,
            physique: 13,
            kabyle: 18,
            informatique: 15,
            histoire: 9
        }
    }
]

// Fonction de Flemmard
l = p => (console.log(p));
w = p => (document.write(p));
a = p => (alert(p));

const nb = PremierTrimestre.length;
w("<ol>");
for (let i = 0; i < nb; i++) {
    const etudiant = PremierTrimestre[i];
    w("<li>" + etudiant.nom + " " + etudiant.prenom + "<ul>");

    var matiereEtudiant = etudiant.matiere;
    //l(Object.entries(matiereEtudient));
    var moyenne = 0,
        nbrMatiere = 0;
    var affiMatiere = Object.entries(matiereEtudiant);
    nbrMatiere = parseInt(affiMatiere.length);
    for (let j = 0; j < nbrMatiere; j++) {
        var note = parseInt(affiMatiere[j][1]);
        w("<li>" + affiMatiere[j][0] + " : " + note + "</li>");
        moyenne += note;
    }
    //l(nbrMatiere);
    moyenne /= nbrMatiere;
    w("<li><strong>" + "Moyenne" + " : " + moyenne.toFixed(2) + "</strong></li>");
    w("</ul></li>");
}
w("</ol>");
//l('---------');
/*******************************
 *       SECONDE METHODE
 *******************************/

w("<hr><p>2nd méthode</p><ol>");
for (let i = 0; i < nb; i++) {
    const etudiant = PremierTrimestre[i];
    w("<li>" + etudiant.nom + " " + etudiant.prenom + "<ul>");

    var matiereEtudiant = etudiant.matiere;
    var moyenne = 0,
        nbrMatiere = 0;
    for (var matiere in matiereEtudiant) {
        //façon d'ecrire abréger
        //w(`<li> ${matiere} : ${matiereEtudiant[matiere]} </li>`);
        w("<li>" + matiere + " : " + matiereEtudiant[matiere] + "</li>");
        moyenne += parseFloat(matiereEtudiant[matiere]);
        nbrMatiere++;
    }
    //l(nbrMatiere);

    moyenne /= nbrMatiere;
    w("<li><strong> Moyenne : " + moyenne.toFixed(2) + "</strong></li>");
    w("</ul></li><br>");
}
w("</ol>");