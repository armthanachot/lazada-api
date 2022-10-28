import hashlib
import hmac
from datetime import datetime

dt = datetime.now()
tstmp =  int(datetime.timestamp(dt))

def sign(secret,api, parameters):
    print(parameters)
    #===========================================================================
    # @param secret
    # @param parameters
    #===========================================================================
    sort_dict = sorted(parameters)
    
    parameters_str = "%s%s" % (api,
        str().join('%s%s' % (key, parameters[key]) for key in sort_dict))

    h = hmac.new(secret.encode(encoding="utf-8"), parameters_str.encode(encoding="utf-8"), digestmod=hashlib.sha256)

    return h.hexdigest().upper()

print(sign('uYdGFOw5QIoru2s8ikPh8Oy3g0AlUFup','/product/item/get',{'app_key': '113262', 'sign_method': 'sha256', 'timestamp': '1666866769006', 'partner_id': 'lazop-sdk-python-20181207', 'access_token': '50000701b05sRSrdY178aa52fGFUemwUGlGyn0IwsDgbDrpCLT3sspX2euifxMHn', 'item_id': 4209911723}))

#timestamp ที่ใช้ตอนส่ง request ไปหา lazada กับที่ส่งมา genSign ต้องเป็นค่าเดียวก้น