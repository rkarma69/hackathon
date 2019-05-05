import paho.mqtt.client as mqtt
from time import sleep
import random
import json

client = mqtt.Client()
client.username_pw_set('iotuser', password='iot12345') 
client.connect("127.0.0.1", 1883, 60)

temperature = 0.0
humidity = 0.0
pressure = 0.0

while True:
 temperature = random.randrange(0,60,1)/2.
 humidity = random.randrange(0,199,1)/2.
 pressure = random.randrange(1000,2600,1)/2.                 
 data = {
        "temperature": temperature,
        "humidity": humidity,
        "pressure": pressure
        }
 jdata = json.dumps(data)
 print(jdata)
 client.publish("mqttTest",jdata)
 sleep(1)

