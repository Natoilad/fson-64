export function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  console.log('hello');
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'grayreference@gmail.com', // Ваша адреса електронної пошти
    Password: 'Qwerty123qazwsx', // Пароль для доступу до поштового акаунту
    To: 'sergey_naftusya@ukr.net', // Адреса електронної пошти отримувача
    From: 'grayreference@gmail.com', // Ваша адреса електронної пошти
    Subject: "Запит з форми зворотнього зв'язку",
    Body: "Ім'я: " + name + '<br>Електронна адреса: ' + email,
  }).then(function (message) {
    alert('Повідомлення успішно відправлено.');
  });
}
