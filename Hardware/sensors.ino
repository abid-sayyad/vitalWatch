#include <String.h>
#include "DHT.h"
#include <Wire.h>
#include <Adafruit_MLX90614.h>
#include <SoftwareSerial.h>
#include <ArduinoJson.h>

StaticJsonBuffer<200> jsonBuffer; 
SoftwareSerial mySerial(9, 10);

#define DHTPIN 2
#define DHTTYPE DHT11

char t[32];
char deviceID[12] = "101";
char heartbeat = digitalRead(5);
char airQuality;
char humidity;
char longitude;
char latitude;
float sensorValueMQ135;
float sensorValueMQ9;

DHT dht(DHTPIN, DHTTYPE);

Adafruit_MLX90614 mlx = Adafruit_MLX90614();

void setup()
{
  mySerial.begin(9600);               // the GPRS baud rate   
  Serial.begin(9600);    // the GPRS baud rate
  Serial.println("Initializing..........");

  dht.begin(); 
  mlx.begin();
  DynamicJsonBuffer jsonBuffer;
}
 
void loop()
{
   sensorValueMQ135 = analogRead(0);       // read analog input pin 0
   sensorValueMQ9 = analogRead(1);       // read analog input pin 1 
   delay(100);   
         
   Serial.print("\nAirQua(CO2/ NOx/ NH3/ S/ C6H6)=");
   Serial.print(sensorValueMQ135);               // prints the value read

   Serial.print("\nAirQua(Inflamable gasses)=");
   Serial.print(sensorValueMQ9);               // prints the value read

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  delay(2000);
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit (isFahrenheit = true)
  float f = dht.readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  // Compute heat index in Fahrenheit (the default)
  float hif = dht.computeHeatIndex(f, h);
  // Compute heat index in Celsius (isFahreheit = false)
  float hic = dht.computeHeatIndex(t, h, false);

  //Serial.print(" \nHumidity: ");
  //Serial.print(h);
  //Serial.print("%");
  //Serial.print("\nTemperature: ");
  Serial.print(t);
  Serial.print("C ");
  //Serial.println(F("Heat Index "));
  //Serial.print(f);
  //Serial.print(F("F  Heat index: "));
  //Serial.print(hic);
  //Serial.print(F("C "));
  //Serial.print(hif);
  //Serial.println(F("F"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Serial.print("Ambient = "); Serial.print(mlx.readAmbientTempC()); 
  Serial.print("*C\tObject = "); Serial.print(mlx.readObjectTempC()); Serial.println("*C");
  delay(500);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   delay(2000);
  if (mySerial.available())
    Serial.write(mySerial.read());
 
  mySerial.println("AT");
  delay(1000);
 
  mySerial.println("AT+SAPBR=3,1,\"Contype\",\"GPRS\"");
  delay(6000);
  ShowSerialData();
 
  mySerial.println("AT+SAPBR=3,1,\"APN\",\"Jionet\"");//APN
  delay(6000);
  ShowSerialData();
 
  mySerial.println("AT+SAPBR=1,1");
  delay(6000);
  ShowSerialData();
 
  mySerial.println("AT+SAPBR=2,1");
  delay(6000);
  ShowSerialData();
 
 
  mySerial.println("AT+HTTPINIT");
  delay(6000);
  ShowSerialData();
 
  mySerial.println("AT+HTTPPARA=\"CID\",1");
  delay(6000);
  ShowSerialData();
 
  StaticJsonBuffer<200> jsonBuffer;
  JsonObject& object = jsonBuffer.createObject();
  
  object.set("deviceID",deviceID);
  object.set("heartBeat",heartbeat);
  object.set("airQuality",airQuality);
  object.set("temprature",sensorValueMQ135);
  object.set("humidity",humidity);
  
  JsonObject& location = object.createNestedObject("location");
  location["longitude"] = longitude;
  location["latitude"] = latitude;
  location["timestamp"] = h;
  
  object.printTo(Serial);
  Serial.println(" ");  
  String sendtoserver;
  object.prettyPrintTo(sendtoserver);
  delay(4000);
 
  mySerial.println("AT+HTTPPARA=\"URL\",\"https://1ef8-122-174-247-211.in.ngrok.io/api/v1/device/data\""); //Server address
  delay(4000);
  ShowSerialData();
 
  mySerial.println("AT+HTTPPARA=\"CONTENT\",\"application/json\"");
  delay(4000);
  ShowSerialData();
 
 
  mySerial.println("AT+HTTPDATA=" + String(sendtoserver.length()) + ",100000");
  Serial.println(sendtoserver);
  delay(6000);
  ShowSerialData();
 
  mySerial.println(sendtoserver);
  delay(6000);
  ShowSerialData;
 
  mySerial.println("AT+HTTPACTION=1");
  delay(6000);
  ShowSerialData();
 
  mySerial.println("AT+HTTPREAD");
  delay(6000);
  ShowSerialData();
 
  mySerial.println("AT+HTTPTERM");
  delay(10000);
  ShowSerialData();
} 
void ShowSerialData()
{
  while(mySerial.available()!=0)
  Serial.write(mySerial.read());
  delay(5000); 
  
}
