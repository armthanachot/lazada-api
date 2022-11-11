const dotenv = require('dotenv')
dotenv.config()
const APP_INFO = {
    APP_KEY: process.env.APP_KEY,
    APP_SECRET: process.env.APP_SECRET,
    GATEWAY: process.env.GATEWAY,
    SELLERS: [
        {
            SELLER_ID: 'TH1JIN7C6M',
            SHOP_URL: 'https://www.lazada.co.th/shop/1f2bvkbq',
            AUTH_KEY: '0_113262_Ywe6YbuQ04YQSYUnToA52gpa20637'
        }
    ]
}

const TEST_SHOP1 = { app_key: '113262', access_token: '50000700829dhvgr8MoSWouAC4IYjmUfrsgBgdqfm1f209005W1fmgvnVjxHWJKD', country: 'th', refresh_token: '50001700b29gihkApaRUAa3GXiKUgwTiWfeU8nsVe195f9e25KlMnyFxSFjLVVCf', country_user_info_list: [{ country: 'th', user_id: '100245066307', seller_id: '100245066307', short_code: 'TH1JIN7C6M' }], account_platform: 'seller_center', refresh_expires_in: 1977546, expires_in: 604800, account: 'arm1997a@gmail.com', code: '0', request_id: '2101647216669526849532628' }

module.exports = {
    APP_INFO,
    TEST_SHOP1
}