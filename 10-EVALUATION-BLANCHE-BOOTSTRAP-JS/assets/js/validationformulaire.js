$(function(){
    /**
        * Valider son email
        */
       function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    $('#contact').submit(function(e){
        e.preventDefault();
        // -- réinitialisation des alerts
        $('#contact .is-valid').removeClass('is-valid');
        $('#contact .is-invalid').removeClass('is-invalid');
        $('.alert-danger').remove();
        const nom       = $('#nom');
        const email     = $('#email');
        const message   = $('#message');

        // -- Validation du champ "Nom"
        if(nom.val().length === 0){
            // -- on ajoute la classe au input nom
            nom.addClass('is-invalid');
        }else{
            nom.addClass('is-valid');
        }
        if(!validateEmail(email.val())){
            // -- on ajoute la classe au input email
            email.addClass('is-invalid');
        }else{
            email.addClass('is-valid');
        }
        // -- Validation du champ "Nom"
        if(message.val().length === 0){
            // -- on ajoute la classe au input nom
            message.addClass('is-invalid');
        }else{
            message.addClass('is-valid');
        }
        // -- Si je ne trouve pas d'Erreur (si je ne trouve aucune classe is-invalid dans le formulaire)
        if( $(this).find('.is-invalid').length === 0 ){
            $(this).replaceWith(`
                    <div class="alert alert-success">
                    Votre inscription a bien été prise en compte
                    </div> 
            `);
        }else{
            $(this).prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre inscription. Vérifiez vos informations.
                </div>
            `);
        }
    });

    $('#btn-up').click(function(){
        $("html, body").animate({scrollTop : 0}, 1000);
    });


    
    $(window).scroll(function() {
        var navbar = $('#c-header');
        if($(window).scrollTop() === 0){
            navbar.removeClass('sticky');
        }else{
            navbar.addClass('sticky');
        }

    });
    

});