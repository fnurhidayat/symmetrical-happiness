var create = require('./create.js');

var args = process.argv.slice(2);
var method = args[0];

switch(method) {

  case 'createData':
    create({
      name: args[1],
      email: args[2],
      password: args[3],
      password_confirmation: args[4]  
    })
    break;
    
  case 'post':
    break;

  default:
    console.log('Unknown action!');
}


