var create = require('./create.js');

var args = process.argv.slice(2);
var method = args[0];

switch(method) {

  case 'create_user':
    let email = args[1];
    // create()
    break;
    
  case 'get_user':
    break;

  default:
    console.log('Unknown action!');
}

create({
  email: email,
  password: password,
  password_confirmation: password_confirmation
})
