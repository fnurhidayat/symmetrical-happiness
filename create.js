const fs = require('fs');

function createData(data) { 
  for (let i in data) {
    if (!data[i]) {
      console.log("Input is not valid!");
      return;
    }
  }

  var user = require('./data/users.json');
  user.push({
    email: data.email,
    password: data.password
  })

  console.log(user);

  fs.writeFileSync(`./data/users.json`, JSON.stringify(user, null, 2));
  console.log('Data created!');
}

module.exports = createData;
