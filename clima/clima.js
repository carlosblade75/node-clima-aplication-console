const axios = require('axios');

const getClima = async(lat, lng) => {

    let _lat = encodeURI(lat);
    let _lng = encodeURI(lng);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ _lat }&lon=${ _lng }&units=metric&appid=a7e2a54ae6456d8adf67b5b06593f715`);

    if (resp.data.cod === 200) {
        return { temp: resp.data.main.temp };
    } else {
        throw new Error('Error', resp.data.message);
    }
};


module.exports = {
    getClima
};