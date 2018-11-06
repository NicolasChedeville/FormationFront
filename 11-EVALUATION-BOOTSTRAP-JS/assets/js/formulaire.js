$(function(){
    // Au changement dans la boite de sélection
    $('#nomChat').on('change',function(){
        $('.c-formulaire__choix .is-valid').removeClass('is-valid');
        $('.c-formulaire__choix .is-invalid').removeClass('is-invalid');
        $('.alert-danger').remove();
    });
    // Si il y a 15 caractère on enlève le message d'erreur et la bordure rouge
    $('#message').on('change',function(){
        const message = $('#message');
        if(message.val().length > 15){
            $('.c-formulaire__raison .is-valid').removeClass('is-valid');
            $('.c-formulaire__raison .is-invalid').removeClass('is-invalid');
            $('.alert-danger').remove();
        }
    });

    // Au passage de la sourissur toute la section adopter un chat la tête de chat change de couleur
    $('.c-adopter').mouseenter(function(){
        $('.c-adopter__tetedechat--img').css("background-color", "#061339" );
    });
    $('.c-adopter').mouseleave(function(){
        $('.c-adopter__tetedechat--img').css("background-color", "#7885A5" );
    });

    // Vérification des champ pour la validation du formulaire
    $('#choix').submit(function(e){
        e.preventDefault();

        $('#choix .is-valid').removeClass('is-valid');
        $('#choix .is-invalid').removeClass('is-invalid');
        $('.alert-danger').remove();

        const nomChat = $('#nomChat');
        const message = $('#message');
        
        // On vérifie que l'utilisateur à bien choisi le nom d'un chat
        if(nomChat.val() === "-- Sélectionnez --"){
            nomChat.addClass('is-invalid');
        }else{
            nomChat.addClass('is-valid');
        }
        // Validation du nombres de caractères
        if(message.val().length < 15){
            message.addClass('is-invalid');
        }else{
            message.addClass('is-valid');
        }
        // -- Si je ne trouve pas d'Erreur (si je ne trouve aucune classe is-invalid dans le formulaire)
        if( $(this).find('.is-invalid').length === 0 ){
            //Message de réussite
            $(this).replaceWith(`
                    <div class="alert alert-success">
                    Votre demande a bien été prise en compte
                    </div> 
            `);
        }else{
            //Message d'erreur
            $(this).prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre demande. Vérifiez vos informations.
                </div>
            `);
        }
    });
});