const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=f17f73106f675595b116dff0ec4abee6&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}