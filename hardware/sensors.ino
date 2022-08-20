#include <String.h>

float sensorValueMQ135;
float sensorValueMQ9;
 
void setup()
{
  Serial1.begin(9600);               // the GPRS baud rate   
  Serial.begin(9600);    // the GPRS baud rate 
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

   
  if (Serial1.available())
    Serial.write(Serial1.read());
 
  Serial1.println("AT");
  delay(1000);
 
  Serial1.println("AT+CPIN?");
  delay(1000);
 
  Serial1.println("AT+CREG?");
  delay(1000);
 
  Serial1.println("AT+CGATT?");
  delay(1000);
 
  Serial1.println("AT+CIPSHUT");
  delay(1000);
 
  Serial1.println("AT+CIPSTATUS");
  delay(2000);
 
  Serial1.println("AT+CIPMUX=0");
  delay(2000);
 
  ShowSerialData();
 
  Serial1.println("AT+CSTT=\"bsnlnet\"");//start task and setting the APN,
  delay(1000);
 
  ShowSerialData();
 
  Serial1.println("AT+CIICR");//bring up wireless connection
  delay(3000);
 
  ShowSerialData();
 
  Serial1.println("AT+CIFSR");//get local IP adress
  delay(2000);
 
  ShowSerialData();
 
  Serial1.println("AT+CIPSPRT=0");
  delay(3000);
 
  ShowSerialData();
  
  Serial1.println("AT+CIPSTART=\"TCP\",\"ADD DOMAIN ADDRESS",\"80\"");//start up the connection
  delay(6000);
 
  ShowSerialData();
 
  Serial1.println("AT+CIPSEND");//begin send data to remote server
  delay(4000);
  ShowSerialData();
  
  String str="" + String(sensorValueMQ135) +"&field2="+String(sensorValueMQ9);//ADD URL/API
  Serial.println(str);
  Serial1.println(str);//begin send data to remote server
  
  delay(4000);
  ShowSerialData();
 
  Serial1.println((char)26);//sending
  delay(5000);//waitting for reply, important! the time is base on the condition of internet 
  Serial1.println();
 
  ShowSerialData();
 
  Serial1.println("AT+CIPSHUT");//close the connection
  delay(100);
  ShowSerialData();
} 
void ShowSerialData()
{
  while(Serial1.available()!=0)
  Serial.write(Serial1.read());
  delay(5000); 
  
}
