# -*- coding: utf-8 -*-

from cmath import log
import lazop
import json

# params 1 : gateway url
# params 2 : appkey
# params 3 : appSecret

appKey = '113262'
appSecret = 'uYdGFOw5QIoru2s8ikPh8Oy3g0AlUFup'
accessToken = '50000701b05sRSrdY178aa52fGFUemwUGlGyn0IwsDgbDrpCLT3sspX2euifxMHn'
client = lazop.LazopClient('https://api.lazada.co.th/rest', appKey, appSecret)


request = lazop.LazopRequest('/auth/token/refresh','GET')
request.add_api_param('refresh_token','50001701205phAbzh1094b200YHMQbwPGcEFw8PxtgjIOjwFsXHf3BQvAPvKCSA0')
response = client.execute(request)
print(response.body)