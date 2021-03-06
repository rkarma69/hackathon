import paho.mqtt.client as mqtt
from time import sleep
import json



def on_connect(self,client, userdata, rc):
	print("Connected with result code "+str(rc))
	self.subscribe("zigbee2mqtt/0x00158d0002371422",1)

def on_message(client, userdata, msg):
	if msg.topic == "zigbee2mqtt/0x00158d0002371422":
		data = msg.payload
		jdata = json.loads(data)
		print(jdata)
		print ("temperature:",jdata['temperature'])
		print ("humidity:",jdata['humidity'])
		print ("pressure:",jdata['pressure'])
	sleep(1)

client = mqtt.Client()
client.username_pw_set('iotuser', password='iot12345') 
client.on_connect = on_connect
client.on_message = on_message

client.connect("127.0.0.1", 1883, 60)


client.loop_forever()

