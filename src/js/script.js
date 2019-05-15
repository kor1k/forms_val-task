const arrLang = {
    'en': {
        'home': 'Home',
        'about': 'About',
        'contacts': 'Contacts',
        'name-input': 'Your name',
        'email-input': 'Email',
        'pass-input': 'Password',
        'pass-confirm-input': 'Confirm password',
        'terms-input': 'Terms and Condition',
        'register-btn': 'Register'
    },
    'ru': {
        'home': 'Главная',
        'about': 'О нас',
        'contacts': 'Контакты',
        'name-input': 'Ваше имя',
        'email-input': 'Почта',
        'pass-input': 'Пароль',
        'pass-confirm-input': 'Подтвердите пароль',
        'terms-input': 'Соглашаясь с уловиями Вы подтверждаете...',
        'register-btn': 'Зарегестрироваться'
    },
    'esp': {
        'home': 'Сasa',
        'about': 'Acerca de',
        'contacts': 'Contacto',
        'name-input': 'Primer nombre',
        'email-input': 'Correo electronico',
        'pass-input': 'Contraseña',
        'pass-confirm-input': 'Confirmar contraseña',
        'terms-input': 'Términos y Condiciones',
        'register-btn': 'Registro'
    }
};

$(function () {
    var lang = widgetLanguage.valueOf();
    console.log('Current language is: ' + lang);
    $('.lang').each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
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
        message.innerHTML = "Passwords are ok!";
    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match";
    }
}

$('#form-fields__inputs input').on('click keyup', function () {
        // console.log($('#form_checkbox').is(':checked'));
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
