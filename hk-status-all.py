
import requests, json
headers = {
        'Content-Type': 'application/json',
    }

URL = 'https://open.hknetworks.kr/smarthome/queryDeviceStatusAll'


        
data = {
	"userid":"star@star.com",
	"password":"iot123456",
}

data = json.dumps(data)
res = requests.post(URL, data=data,headers=headers)



print (res.json())
