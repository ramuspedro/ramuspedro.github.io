(function() {
    "use strict";

    $(document).ready(function() {
        /*
            GENERAL FUNCTIONS
        */

        // when open menu, this code is executed
        var openMenu = function() {
            //$('#website-content').fadeToggle();
            if ($('nav').css('display') == "none") {
                $('#menu-icon').attr('class', 'fa fa-times');
            } else {
                $('#menu-icon').attr('class', 'fa fa-bars');
            }
            $('nav').slideToggle('slow');
        }

        /*
            CODE FOR SCROLLING PAGE
        */
        $("a.page-scroll").click(function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                //event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

        $("a.page-scroll-menu").click(function(event) {
            openMenu();
            var target = $(this.getAttribute('href'));
            if (target.length) {
                //event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

        /*
            NAVBAR SECTION
        */
        $('#menu-button').click(function(event) {
            event.preventDefault();
            openMenu();
        });

        /*
            SOBRE SECTION
        */
        // button expand
        $("#expand-button").click(function(event) {
            // prevent the page reload
            event.preventDefault();

            // This will get the content
            if ($(this).html() == "Expandir") {
                // I will change the text of the button to "Ocultar"
                $(this).html("Ocultar");
            } else {
                // I will change the text of the button to "Expandir"
                $(this).html("Expandir");
            }
            $('#hidden-skills').fadeToggle('slow');
        });

        /* CONTATO SECTION */
        $('#submit-contact-form').click(function(event) {
            event.preventDefault();
            $('#alert-message').remove();
            var form = {
                name: $('#name-form').val(),
                email: $('#email-form').val(),
                message: $('#message-form').val()
            };
            if (form.name == "") {
                $('#alert-contact-form').append('<div class="alert alert-danger" id="alert-message" class="division-2rem"><a href class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Atenção!</strong> O campo de NOME não pode ser vazio.</div>');
            } else if (form.email == "") {
                $('#alert-contact-form').append('<div class="alert alert-danger" id="alert-message" class="division-2rem"><a href class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Atenção!</strong> O campo de EMAIL não pode ser vazio.</div>');
            } else if (form.message == "") {
                $('#alert-contact-form').append('<div class="alert alert-danger" id="alert-message" class="division-2rem"><a href class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Atenção!</strong> O campo de MESSAGEM não pode ser vazio.</div>');
            } else {
                $('#submit-contact-form').prop("disabled", true);
                $('#load-icon').show();
                $.ajax({
                    url: 'https://pedroramos.herokuapp.com/portfolio-contact',
                    dataType: 'json',
                    type: 'post',
                    data: form,
                    success: function(data, textStatus, jQxhr) {
                        $('#alert-contact-form').append('<div class="alert alert-success" id="alert-message" class="division-2rem"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sucesso!</strong> Obrigado pela sua mensagem. Assim que possível entrarei em contato. Desde já agradeço seu interesse.</div>');
                        $('#name-form').val("");
                        $('#email-form').val("");
                        $('#message-form').val("");
                        $('#load-icon').hide();
                    },
                    error: function(jqXhr, textStatus, errorThrown) {
                        $('#alert-contact-form').append('<div class="alert alert-danger" id="alert-message" class="division-2rem"><a href class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Desculpe o transtorno!</strong> Sua mensagem não foi enviada. Tente outra vez ou envie-me diretamente através do email <strong>ramuspedro@gmail.com</strong>.</div>');
                        $('#load-icon').hide();
                    }
                });

            }
        });
        // close alert message
        $('#alert-contact-form').delegate('a.close', 'click', function(event) {
            event.preventDefault();
            $('#alert-message').remove();
        });
    });
}());
