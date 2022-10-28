const {signRequest} = require('./node_modules/lazada-open-platform-sdk/lib/LazadaRequest/signature/index')
const {APP_INFO} = require('./config')

// const sign = signRequest(APP_INFO.APP_SECRET, '/seller/get',{
//     filter: 'all',
//     app_key: '113262',
//     timestamp: String(Date.now()),
//     sign_method: 'sha256',
//     access_token: '50000701521bqGwdjUEWPebCEvgPyyHld1bd1fd87NkaittlebGrvdvvVvsBIcSt'
//   })

const sign2 = signRequest(APP_INFO.APP_SECRET, '/products/get',{
    filter: 'all',
    app_key: '113262', //!! required every request
    timestamp: String(Date.now()), //!! required every request
    sign_method: 'sha256', //!! required every request
    access_token: '50000701521bqGwdjUEWPebCEvgPyyHld1bd1fd87NkaittlebGrvdvvVvsBIcSt' //!! required every request (except refreshToken)
  })

  console.log({sign2});