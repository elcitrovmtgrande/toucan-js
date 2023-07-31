const { Toucan } = require('./dist/toucan.min.js');

const toucan = new Toucan({ email: 'tutu@toto.fr '});

console.log(toucan.getToken());

module.exports = Toucan;
