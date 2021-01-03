const fs = require('fs');
const colors = require('colors');


let crearLimite = (base, limite) => {

    for (let v = 1; v <= limite; v++) { console.log(` ${base} * ${v} = ${base * v} `) };
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);

        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`.green);
        });

    });
}



module.exports = {
    crearArchivo,
    crearLimite
}