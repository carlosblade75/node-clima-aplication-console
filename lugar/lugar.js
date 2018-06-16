const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    // usamos await por el GET nos retorna una promesa
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyC2Ij_V0Lm8Xpe2tnYfBcgizIO6Z3VrmdQ`);

    // console.log(resp.status);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad');
    } else {

        let location = resp.data.results[0].geometry.location;
        let address = resp.data.results[0].formatted_address;

        return {
            direccion: address,
            lat: location.lat,
            lng: location.lng
        };
    }
};

module.exports = {
    getLugarLatLng
};