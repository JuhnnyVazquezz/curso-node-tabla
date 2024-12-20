const { crearArchivo } = require('./helpers/multiplicar');
const argv = require ('./config/yargs');
const colors = require('colors');

console.clear();


console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bassconsole.log('hello'.green); // outputs green text


crearArchivo( argv.b, argv.l, argv.h )
 .then(nombreArchivo => console.log(nombreArchivo.rainbow))
 .catch(err => console.log(err));