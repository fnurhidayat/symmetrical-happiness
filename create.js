const fs = require('fs');

function createUser(data) {
  // for (let i in data) {
  //   if (!data[i]) {
  //     console.log("Input is not valid!");
  //     return;
  //   }
  // }
  if (data.password == data.password_confirmation) {
    var user = require('./data/users.json');
    user.push({
      id: user.length + 1,
      name: data.name,
      email: data.email,
      password: data.password
    })

    fs.writeFileSync(`./data/users.json`, JSON.stringify(user, null, 2));
    console.log('Data created!');
  } else {
    console.log('Input is not valid!')
  }
}

function getUser(data) {
  var user = require('./data/users.json');
  console.log(user[data.id - 1])
}

function createPost(data) {
    var post = require('./data/posts.json');
    if (data) {
      post.push({
      id: post.length + 1,
      tittle: data.tittle,
      body: data.body
    })
    fs.writeFileSync(`./data/posts.json`, JSON.stringify(post, null, 2));
    console.log('Data created!');
  } else {
    console.log('Not found!')
  }
}

function getPost(data) {
  var post = require('./data/posts.json');
  console.log(post[data.id - 1])
}


module.exports = {
  createUser,
  getUser,
  createPost,
  getPost
}
