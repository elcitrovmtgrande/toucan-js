const {Toucan} = require('./dist/toucan.min.js');

const toucan = new Toucan({ id: 1, name: 'john' });

console.log(toucan.getToken());

module.exports = Toucan;
