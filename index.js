var create = require('./create');

var args = process.argv.slice(2);
var method = args[0];

switch(method) {

  case 'create_user':
    create.createUser({
      name: args[1],
      email: args[2],
      password: args[3],
      password_confirmation: args[4]  
    })
    break;

  case 'get_user':
    create.getUser({
      id: args[1]
    })
    break;
    
  case 'create_post':
    create.createPost({
      tittle: args[1],
      body: args[2]
    })
    break;

  case 'get_post':
    create.getPost({
      id: args[1]
    })
    break;
    
  default:
    console.log('Unknown action!');
}


