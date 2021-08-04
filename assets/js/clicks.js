// Нажатие на кнопку для скрола
function scrollClick(){
    var form = document.getElementById("form");
    form.scrollIntoView({behavior: "smooth"});
}

function payClick(){
    // Переменные что воодятся
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (checkErrors(name, email, phone)) return;

    sendMessage(name, lastName, email, phone);
}

function checkErrors(name, email, phone){
    var phoneLenght = phone.length;

    // Массив ошибок
    var errors = new Array();

    // Имя не может быть пустым
    if(name.length == 0){
        errors.push("Имя не может быть пустым!");
    }
    // Имя не может быть коротким
    if(name.length < 3){
        errors.push("Слишком короткое имя!");
    }
    // Проверка правильности написания email
    if(email.length != 0)
    if(email.split('@').length != 2){
        errors.push("Неправильный формат Email!");
    }

    // Проверка правильности написания телефона
    switch (phoneLenght){
        case 9:
            phone = "0" + phone;
        case 10:
            if(phone[0] != '0')
                errors.push("Непрвальный номер телефона!");
        break;
        case 11:
            if(phone[0] != '8' && phone[1] != '0')
                errors.push("Непрвальный номер телефона!");
            phone = phone.slice(1);
        break;
        case 12:
            if(phone[0] != '3' && phone[1] != '8' && phone[2] != '0')
                errors.push("Непрвальный номер телефона!");
            phone = phone.slice(1);
            phone = phone.slice(1);
        break;
        case 13:
            if(phone[0] != '+')
                errors.push("Непрвальный номер телефона!");
            phone = phone.slice(1);
            phone = phone.slice(1);
            phone = phone.slice(1);
        break;
        default:
            errors.push("Непрвальный номер телефона!");
    }

    // Вывод ошибок
    if(errors.length > 0){
        document.getElementById("form_error").style.color = "red";
        document.getElementById("form_error").innerHTML = errors[0];
        return true;
    }
    else{
        document.getElementById("form_error").style.color = "green";
        document.getElementById("form_error").innerHTML = "Спасибо! С вами скоро свяжутся!";
        document.getElementById("name").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        return false;
    }
}

function sendMessage(name, lastName, email, phone){
    // Токен
    var token = "931445029:AAGTVy_BwyX7Pep_UiFnaapLCt7T0_4xdXc";
    // Чат в который отправлять
    var chat_id = -546305318;

    // Имя, фамилия, имейл, и телефон
    var Name = `<b>Имя</b> - ${name} %0A `;
    var LastName = (lastName.length == 0) ? `` : `<b>Фамилия</b> - ${lastName} %0A `;
    var Email = (email.length == 0) ? `` : `<b>Email</b> - ${email} %0A `;
    var Phone = `<b>Тел.</b> - ${phone}`;

    // Сообщение
    message_text = Name + LastName + Email + Phone;

    // Создание ссылки на основе токена, чата и сообщения
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message_text}&parse_mode=html`;

    // Отправка сообщения
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}