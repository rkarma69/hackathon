
import requests, json
headers = {
        'Content-Type': 'application/json',
    }

URL = 'https://open.hknetworks.kr/smarthome/controlDevice'


        
data = {
	"userid":"star@star.com",
	"password":"iot123456",
	"mac":"600194260a36",
        "deviceId":"615458ebd5f1403fb42ded956d66c2cb",
        "command":{
        "type":"turnon"
    }
}

data = json.dumps(data)
res = requests.post(URL, data=data,headers=headers)



print (res.json())
