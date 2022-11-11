# -*- coding: utf-8 -*-

from cmath import log
import lazop
import json

# params 1 : gateway url
# params 2 : appkey
# params 3 : appSecret

appKey = '113262'
appSecret = 'uYdGFOw5QIoru2s8ikPh8Oy3g0AlUFup'
accessToken = '50000700829dhvgr8MoSWouAC4IYjmUfrsgBgdqfm1f209005W1fmgvnVjxHWJKD'
refreshToken= '50001700b29gihkApaRUAa3GXiKUgwTiWfeU8nsVe195f9e25KlMnyFxSFjLVVCf'
client = lazop.LazopClient('https://api.lazada.co.th/rest', appKey, appSecret)

# create a api request set GET mehotd
# default http method is POST
# request = lazop.LazopRequest('/category/tree/get','GET')

# simple type params ,Number ,String
# request.add_api_param('language_code','th_TH')

# response = client.execute(request)
# response = client.execute(request,accessToken)

# response type nil,ISP,ISV,SYSTEM
# nil ：no error
# ISP : API Service Provider Error
# ISV : API Request Client Error
# SYSTEM : Lazop platform Error
# print(response.type)

# response code, 0 is no error
# print(response.code)

# response error message
# print(response.message)

# response unique id
# print(response.request_id)

# full response
# print(response.body)

# json_obj = json.dumps(response.body, indent=4, ensure_ascii=False).encode('utf-8')
# with open("response.json","w") as outfile:
#     outfile.write(json_obj.decode())

# ------------ Seller 

# request = lazop.LazopRequest('/seller/get','GET')
# response = client.execute(request, accessToken)
 

# ------------ Products 

# request = lazop.LazopRequest('/products/get','GET')
# request.add_api_param('filter','all')
# response = client.execute(request, accessToken)

# ------------ Product Item

request = lazop.LazopRequest('/product/item/get','GET')
request.add_api_param('item_id',4209911723)
response = client.execute(request, accessToken)
print(response.body)