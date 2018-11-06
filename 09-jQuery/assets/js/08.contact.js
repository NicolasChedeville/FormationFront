$(function(){
    // Fonction de Flemmard
    l = p => (console.log(p));
    w = p => (document.write(p));
    a = p => (alert(p));
    /*-----------------------------
    *   Valider son email
    -------------------------------*/
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    /*----------------------------------------
    * Valider son numéro de téléphone en FR
    ------------------------------------------*/
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }
    // -- Déclaration d'un tableau pour stocker les contacts
    var collectionDeContacts = [];
    var nb=0;

    // -- Fonction pour l'affichage du tableau des contacts
    function affichageTableau(contacts){
        nb=contacts.length;
        $('tbody tr').remove();
        for(let i=0;i<nb;i++){
            $(`
                <tr>
                    <td>`+ contacts[i].nom +`</td>
                    <td>`+ contacts[i].prenom +`</td>
                    <td>`+ contacts[i].email +`</td>
                    <td>`+ contacts[i].tel +`</td>
                </tr>
            `).appendTo('#contacts > tbody');
        }
        $('#contact').get(0).reset();
        // -- Affichage du message de réussite
        $(".alert-contact").show(10).delay(5000).hide(1000);
    }

    // -- Récupération du tableau d'objet stocker dans le navigateur
    // -- Si supporté par le navigateur
    if(typeof localStorage!='undefined' && JSON){
        // -- getItem pour récupérer les données
        collectionDeContacts = JSON.parse(localStorage.getItem('coord'));
        // -- Si on récupère des données
        if(collectionDeContacts != null){
            affichageTableau(collectionDeContacts);
        }else{
            // -- Si pas de données alors on réinitialise notre tableau
            collectionDeContacts = [];
        }
    } else alert("localStorage n'est pas supporté");
    

    // -- On écoute la validation du formulaire
    $('#contact').submit(function(e){
        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- réinitialisation des alerts
        $('#contact .is-valid').removeClass('is-valid');
        $('#contact .is-invalid').removeClass('is-invalid');

        const nom       = $('#nom');
        const prenom    = $('#prenom');
        const email     = $('#email');
        const tel       = $('#tel');
        
        
        // -- Validation du champ "Nom"
        if(nom.val().length === 0){
            // -- on ajoute la classe au input nom
            nom.addClass('is-invalid');
        }else{
            nom.addClass('is-valid');
        }
        // -- Validation du champ "Prénom"
        if(prenom.val().length === 0){
            // -- on ajoute la classe au input prenom
            prenom.addClass('is-invalid');
        }else{
            prenom.addClass('is-valid');
        }
        if(!validateEmail(email.val())){
            // -- on ajoute la classe au input email
            email.addClass('is-invalid');
        }else{
            email.addClass('is-valid');
        }
        if(!validateTel(tel.val())){
            // -- on ajoute la classe au input tel
            tel.addClass('is-invalid');
        }else{
            tel.addClass('is-valid');
        }
        // -- Si je ne trouve pas d'Erreur (si je ne trouve aucune classe is-invalid dans le formulaire)
        if( $(this).find('.is-invalid').length === 0 ){

            // -- On vérifie que l'adresse mail n'est pas déjà dans notre tableau
            function cherche(emailContact) {
                //retourne l'objet qui correspond à la condition sinon retourne undefined
                return emailContact.email === email.val();
            }
            var identifiant = collectionDeContacts.find(cherche);

            // -- Si l'email n'est pas déjà dans le tableau
            if(!identifiant){
                
                
                var insert = {
                    nom     : nom.val(),
                    prenom  : prenom.val(),
                    email   : email.val(),
                    tel     : tel.val()
                };
                // -- Création de l'objet et insertion de celui-ci dans le tableau + incrémentation du nombre d'objet
                collectionDeContacts.push(insert);
                //nb++;
                
                // -- écriture avec la clé 'coords' pour le stockage dans le navigateur
                if(typeof localStorage!='undefined' && JSON){
                    localStorage.setItem('coord',JSON.stringify(collectionDeContacts));
                }else alert("localStorage n'est pas supporté");
                
                // -- On efface ce qu'il se trouve dans les champs input
                affichageTableau(collectionDeContacts);

            }else{
                a('Adresse mail déjà utilisé');
                $('#contact').get(0).reset();
            }
        }else{
            a("Le formulaire n'est pas rempli correctement !!");
            $('#contact').get(0).reset();
        }
    });
});