const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

// con options hacemos que directamente nos de las opciones y no los comandos
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {

    let coord = await lugar.getLugarLatLng(direccion);

    let temp = await clima.getClima(coord.lat, coord.lng);
    return temp;
};

getInfo(argv.direccion)
    .then(resp => console.log(`La temperatura en ${ argv.direccion.green } es ${colors.red.underline(resp.temp)  }`))
    .catch(err => console.log(err));