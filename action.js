const pushDatos = require("./request");
const length = 25;

const action = async () =>{
    if(datos.length === length){
        return;
    }
    while (datos.length < length){
        datos.push(new Promise(pushDatos));
    }

    datos = await Promise.all(datos);
};
module.exports = action;