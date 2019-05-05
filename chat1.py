import paho.mqtt.client as mqtt
import time
from time import sleep
import datetime
import fcntl, socket, struct


def on_connect(self,client, userdata, rc):
	print("Connected with result code "+str(rc))
	self.subscribe("st2",2)
#	self.publish("st2","Let's chat")

def on_message(client, userdata, msg):
	if msg.topic == "st2":
		print(msg.topic," : ",msg.payload)
		print("***********************")
		msg.payload = input("st1:")
		client.publish("st1",msg.payload)
	sleep(1)

client = mqtt.Client()
client.username_pw_set('iotuser', password='iot12345') 
client.on_connect = on_connect
client.on_message = on_message

client.connect("127.0.0.1", 1883, 60)
client.publish("st1","Let's chat")

client.loop_forever()

