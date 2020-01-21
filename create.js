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

module.exports = createData;
