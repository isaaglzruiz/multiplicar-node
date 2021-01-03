   const opts = {
       base: {
           demand: true,
           alias: 'b'
       },
       limite: {
           alias: 'l',
           default: 10
       }
   }

   const argv = require('yargs')
       .command('listar', 'imprime en consola la tabla de multiplcar ', opts)
       .command('creartxt', 'se crea un archivo txt con los parmetros en linea de comando -b -l', opts)
       .help()
       .argv;

   module.exports = {
       argv
   }