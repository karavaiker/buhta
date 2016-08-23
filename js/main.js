$(document).ready(function() {
    $(".fancy-modal").fancybox();

    $('input[name="phone"]').mask("+7(999) 999-99-99",{autoclear: true});


    $('input[type="submit"]').click(function () {
            var forform = $(this).parent('.form-order');
           if (forform.valid()) {
               $.ajax({
                   url: '/inc/form-ajax.php',
                   method: 'POST',
                   
                   data: {
                       name: forform.find('input[name="name"]').val(),
                       phone: forform.find('input[name="phone"]').val(),
                       email: forform.find('input[name="email"]').val(),
                       comment: forform.find('input[name="comment"]').val(),
                   }
               }).done(function (xhr) {
                   forform.html(xhr);
               })
           }

    });

    $("#form1").validate({
        rules: {
            name: {
                required: true,
                minlength: 2

            },
            email: {
                required: true,
                email: true
            },

            phone: {
                required: true,
                minlength: 17
            }

        },
        messages: {
            name: {
                required: "Введите имя",
                minlength: "Минимальная длинна имени должна быть больше 1 символа"
            },
            email: {
                required: "Укажите ваш email, чтобы мы могли связаться с вами",
                email: "Email должен быть в формате: name@domain.com"
            },
            phone: {
                required: "Укажите ваш телефон",

            }

        }
    });
    $("#form2").validate({
        rules: {
            name: {
                required: true,
                minlength: 2

            },
            email: {
                required: true,
                email: true
            },

            phone: {
                required: true,
                minlength: 17
            }

        },
        messages: {
            name: {
                required: "Введите имя",
                minlength: "Минимальная длинна имени должна быть больше 1 символа"
            },
            email: {
                required: "Укажите ваш email, чтобы мы могли связаться с вами",
                email: "Email должен быть в формате: name@domain.com"
            },
            phone: {
                required: "Укажите ваш телефон",

            }

        }
    });
    $("#form3").validate({
        rules: {
            name: {
                required: true,
                minlength: 2

            },
            email: {
                required: true,
                email: true
            },

            phone: {
                required: true,
                minlength: 17
            }

        },
        messages: {
            name: {
                required: "Введите имя",
                minlength: "Минимальная длинна имени должна быть больше 1 символа"
            },
            email: {
                required: "Укажите ваш email, чтобы мы могли связаться с вами",
                email: "Email должен быть в формате: name@domain.com"
            },
            phone: {
                required: "Укажите ваш телефон",

            }

        }
    });
});
