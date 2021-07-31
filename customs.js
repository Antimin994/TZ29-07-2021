var buttons = document.getElementsByTagName('button');


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
       for (var j = 1; j <= 4; j++) {
        if(j == event.target.dataset.page) {document.querySelector(`.block_${j}`).classList.add('active_block')}
        else {document.querySelector(`.block_${j}`).classList.remove('active_block')}
        }
    });
}


var arr;

fetch('data.json')
 .then(function(response) {
 return response.json();
 })
 .then((data) => {

  var output = [];
 arr = data;

});




var formReg = document.querySelector(".form");


var formButton = document.querySelector(".form_button");

formButton.addEventListener('click', function(event) {
  var emailInput = document.querySelector("#mail").value;
  var passwordInput = document.querySelector("#password").value;

     reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
     if (!emailInput.match(reg)) {alert("Некорректный e-mail");
     document.querySelector("#mail").value="";
     event.preventDefault();
     return false; }

     reg2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
     if (!passwordInput.match(reg2)) {alert("Пароль должен иметь большие и малые символы, а также цифры");
     document.querySelector("#password").value="";
     event.preventDefault();
     return false; }


     for (var i = 0; i < arr.length; i++) {
       console.log(arr[i]);
       if (emailInput === arr[i].email) {
         alert("Данный пользователь уже зарегистрирован!");
         event.preventDefault();
         return false;
       }
     }

      /*var fs = require("fs");
      fs.writeFile("data.json", JSON.stringify(`, {"email" : ${emailInput}, "password" : ${passwordInput}}`))
      */
      let file = document.open('data.json');
      console.log(file);
      file.write(JSON.stringify(`, {"email" : ${emailInput}, "password" : ${passwordInput}}`));
      file.close();


      document.cookie = "login=" + emailInput + ";password=" + passwordInput;

      });


      var formButtonEnter = document.querySelector(".form_button1");
      console.log(formButtonEnter);

      var counter = 0;

      formButtonEnter.addEventListener('click', function(event) {
        var emailInput = document.querySelector("#mail1").value;
        var passwordInput = document.querySelector("#password1").value;


           for (var i = 0; i < arr.length; i++) {
             console.log(arr[i]);

             if (!(emailInput === arr[i].email && passwordInput === arr[i].password)) {
               alert("Неверный пользователь или пароль!");
               counter++;
               event.preventDefault();
               return false;
             }
             if (counter >= 3) {
               confirm('Забыли пароль?');
             }
           }


           document.cookie = "login=" + emailInput + ";password=" + passwordInput;


            });
