var arrLang = {
    'en': {
        'home': 'Home',
        'about': 'About',
        'contacts': 'Contacts'
    },
    'ru': {
        'home': 'Главная',
        'about': 'О нас',
        'contacts': 'Контакты'
    },
    'sp': {
        'home': 'Сasa',
        'about': 'Acerca de',
        'contacts': 'Contacto'
    }
};

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

function checkPass() {
    var pass1 = document.getElementById('form_pass1');
    var pass2 = document.getElementById('form_pass2');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff8082";

    if (pass1.value.length > 5) {
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "character number ok!"
    } else {
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " you have to enter at least 6 digit!";
        return;
    }

    if (pass1.value === pass2.value) {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "ok!";
    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match";
    }
}

$('#form-fields__inputs input').on('click keyup', function () {
        console.log($('#form_checkbox').is(':checked'));
        if ($('#form_name').val() !== "" && $('#form_email').val() !== "" && $('#form_checkbox').is(':checked') == true && $('#form_pass1').val().length >= 6 && $('#form_pass2').val().length >= 6) {
            console.log($('#form_checkbox').is(':checked'));
            $('.content-side-form__form-submit-btn').addClass('active');
            $('.form-checker').removeClass('active');
            $('#reg-form-submit').click(function () {
                $(this).location.reload(true);
            })
        } else {
            $('.content-side-form__form-submit-btn').removeClass('active');
            $('.form-checker').addClass('active');
        }
    }
);
