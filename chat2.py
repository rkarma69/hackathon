import paho.mqtt.client as mqtt
import time
from time import sleep
import datetime
import fcntl, socket, struct


def on_connect(self,client, userdata, rc):
	print("Connected with result code "+str(rc))
	self.subscribe("st1",2)

def on_message(client, userdata, msg):
	if msg.topic == "st1":
		print(msg.topic," : ",msg.payload)
		print("***********************")
		msg.payload = input("st2:")
		client.publish("st2",msg.payload)
	sleep(1)

client = mqtt.Client()
client.username_pw_set('iotuser', password='iot12345') 
client.on_connect = on_connect
client.on_message = on_message

client.connect("127.0.0.1", 1883, 60)

client.loop_forever()

