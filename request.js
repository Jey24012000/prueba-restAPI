const axios = require("axios");
const BASE_API =  "https://api.chucknorris.io/jokes/random";

const pushDatos= async(dispatch) =>{
    const{
        data: {id,value,icon_url,url},
    } = await axios.get(`${BASE_API}`);

    dispatch({
        id,
        value,
        icon_url,
        url,
    });
};
module.exports = pushDatos;