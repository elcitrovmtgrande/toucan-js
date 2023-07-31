const {Toucan} = require('./dist/toucan.min.js');

const toucan = new Toucan({ email: 'tutu '});

console.log(toucan);

module.exports = Toucan;
