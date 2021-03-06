//Подключаем необходимые модули
let db = require('../config')
let auth = require('../config/auth')
var bodyParser = require('body-parser'); 
var jsonParser = bodyParser.json()

module.exports = function(app) {
  //Авторизируем пользователя
  app.post('/auth', jsonParser, async(req, res) => {
  auth.loginUser(req.query.login, req.query.pwd, res);
  });

  app.put('/auth', jsonParser, async(req, res) => {
    //Создаём пользователя
    auth.UserExist(req.body.name, req.body.login, req.body.pwd, req.body.mode, res, auth.createUser)
});

};