const fs = require('fs');

function createData(data) {
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

function createPost(data) {
  var post = require('./data/posts.json');
  post.push({
    id: user.length + 1,
    tittle: data.tittle,
    body: data.body
  })

  fs.writeFileSync(`./data/posts.json`, JSON.stringify(post, null, 2));
  console.log('Data created!');
}

module.exports = {
  createData,
  createPost
}
