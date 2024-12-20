const fs = require('fs');
const colors = require('colors');


//EJEMPLO DE CÓDIGO DE MULTIPLICACIÓN
//TABLAS DE MULTIPLICACION USANDO PROMESAS
//const crearArchivo = ( base = 5) =>{
//
//    return new Promise ((resolve, reject) =>{
//        console.log(`==================`);
//        console.log(' TABLA DEL:', base);
//        console.log(`==================`);
//
//        let salida = '';
//
//        for(let i =1; i<=10; i++){
//            salida += `${ base } x ${ i } = ${ base * i}\n`;
//        }
//
//        console.log(salida);
//
//        fs.writeFileSync(`tabla-${ base }.txt`, salida);
//
//        console.log(`tabla-${ base }.txt creado con exito`);
//    })
//
//    
//}

//EJEMPLO DE CÓDIGO DE MULTIPLICACIÓN
//TABLAS DE MULTIPLICACION USANDO FUNCIÓN ASINCRONA CON ASYNC
const crearArchivo = async ( base = 5, listar =false, hasta =10) =>{

    try {

            let salida = '';
            let consola = '';
    
            for(let i =1; i<=hasta; i++){
                salida += `${ base } x ${ i } = ${ base * i}\n`;
                consola += `${ base } ${'x'.yellow} ${ i } ${ '='.yellow } ${ base * i}\n`;
            }

            if(listar){
                console.log(`==================`.green);
                console.log(' TABLA DEL:'.green, colors.blue(base));
                console.log(`==================`.green);
                console.log(consola);
            }
    
    
            fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
            return `tabla-${ base }.txt creado con exito`;
        
    } catch (err) {
        
    }

}

module.exports = {
    crearArchivo
}