const LazadaAPI = require("lazada-open-platform-sdk");
const { APP_INFO, TEST_SHOP1 } = require('./config')
const { PRODUCT_PAYLOAD } = require('./constant/product')
const Product = require("./node_modules/lazada-open-platform-sdk/lib/LazadaClient/product").default


const aLazadaAPIWithToken = new LazadaAPI(
    APP_INFO.APP_KEY,
    APP_INFO.APP_SECRET,
    "THAILAND",
    TEST_SHOP1.access_token
);

// aLazadaAPIWithToken.getShipmentProviders().then((response) => {
//     console.log(JSON.stringify(response,null,2));
//   });

// ดึงตรงๆจาก node_modules
// Product.getProducts(APP_INFO.APP_KEY, APP_INFO.APP_SECRET, APP_INFO.GATEWAY, TEST_SHOP1.access_token, {filter:'all'}).then((response) => {
//     console.log(JSON.stringify(response, null, 2));
// })

aLazadaAPIWithToken.getProducts({filter:'all'}).then((response) => { //'must be one of: "all" | "live" | "inactive" | "deleted" | "image-missing" | "pending" | "rejected" | "sold-out"'
    console.log(JSON.stringify(response, null, 2));
}) // ส่งแค่ payload

// aLazadaAPIWithToken.getCategoryTree().then((response)=>{
//     // console.log(JSON.stringify(response,null,2));
// })

// aLazadaAPIWithToken.createProduct({ payload: JSON.stringify(PRODUCT_PAYLOAD) }).then((response) => {
//     console.log(JSON.stringify(response, null, 2));
// })

