const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, crearLimite } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('entro al listar');
        break;
    case 'creartxt':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch(e => console.log(e));
        break;
    case 'limite':
        crearLimite(argv.base, argv.limite);
        break;

    default:
        console.log('comando no reconocido');
}
// let parametro = argv[2];
// let base = parametro.split('=')[1];