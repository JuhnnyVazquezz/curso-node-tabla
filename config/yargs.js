const argv = require ('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        default: 10,
        describe: 'Es el número hasta que se va a multiplicar la base'
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;