export function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'your_email@gmail.com', // Ваша адреса електронної пошти
    Password: 'your_password', // Пароль для доступу до поштового акаунту
    To: 'example@example.com', // Адреса електронної пошти отримувача
    From: 'your_email@gmail.com', // Ваша адреса електронної пошти
    Subject: "Запит з форми зворотнього зв'язку",
    Body:
      "Ім'я: " +
      name +
      '<br>Електронна адреса: ' +
      email +
      '<br>Повідомлення: ' +
      message,
  }).then(function (message) {
    alert('Повідомлення успішно відправлено.');
  });
}
