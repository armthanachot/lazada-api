const LazadaAPI = require("lazada-open-platform-sdk");
const { APP_INFO } = require("./config")

const aLazadaAPI = new LazadaAPI(APP_INFO.APP_KEY, APP_INFO.APP_SECRET, "THAILAND");

aLazadaAPI.generateAccessToken({ code: APP_INFO.SELLERS[0].AUTH_KEY }).then((response) => {
    const tokenInfo = response; // JSON data from Lazada's API
    console.log({tokenInfo});
});

module.exports = {
    aLazadaAPI
}