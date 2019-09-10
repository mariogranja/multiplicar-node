
const {argv} = require('./config/yargs')



const {crearArchivo} = require('./multiplicar/multiplicar');

const {listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite).catch(err=> console.log(err));

        console.log('listar');
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e=>console.log(e));
        console.log('crear');
    break;
    default:
        console.log('Comando no reconocido');

}




//console.log(process.argv);



//let parametro = argv[2]
//let base = parametro.split('=')[1]

//console.log(base)

//crearArchivo(base)
//.then(archivo => console.log(`Archivo creado: ${archivo}`))
//.catch(e=>console.log(e));

