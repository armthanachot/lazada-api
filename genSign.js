const { signRequest } = require('./node_modules/lazada-open-platform-sdk/lib/LazadaRequest/signature/index')
const { APP_INFO,TEST_SHOP1 } = require('./config')

// const sign = signRequest(APP_INFO.APP_SECRET, '/seller/get',{
//     filter: 'all',
//     app_key: '113262',
//     timestamp: String(Date.now()),
//     sign_method: 'sha256',
//     access_token: '50000701521bqGwdjUEWPebCEvgPyyHld1bd1fd87NkaittlebGrvdvvVvsBIcSt'
//   })


const timestamp = Date.now()
console.log({ timestamp });
// const sign2 = signRequest(APP_INFO.APP_SECRET, '/auth/token/refresh',{
//     filter: 'all',
//     app_key: '113262', //!! required every request
//     timestamp, //!! required every request
//     sign_method: 'sha256', //!! required every request
//     access_token: '50000701521bqGwdjUEWPebCEvgPyyHld1bd1fd87NkaittlebGrvdvvVvsBIcSt' //!! required every request (except refreshToken)
//   })

/** Sign For Refresh Access Token */
// const refreshAccessTokenSign = signRequest(APP_INFO.APP_SECRET, '/auth/token/refresh', {
//   app_key: '113262', //!! required every request
//   timestamp, //!! required every request
//   sign_method: 'sha256', //!! required every request
//   refresh_token: '500017016341XUfirEWTDYgBT9NW0hKjJkzIvvAEynwrhM1562bc79Q2PrtKIlCg'
// })

// console.log({refreshAccessTokenSign});


/** Sign For Get Shipment Provider */
const shipmentProviderSign = signRequest(APP_INFO.APP_SECRET,'/shipment/providers/get',{
  app_key: TEST_SHOP1.app_key,
  timestamp,
  sign_method:'sha256',
  access_token: TEST_SHOP1.access_token
})

console.log({shipmentProviderSign});