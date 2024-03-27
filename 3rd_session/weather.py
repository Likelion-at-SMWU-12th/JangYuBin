import requests
import json

city = "Paris"
apikey = "324a3b3df9a342b16a31ad159f91ef92"
lang = "kr"

api = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units=metric"

result = requests.get(api)

data = json.loads(result.text)  # Stirng -> JS의 객체
#print(data)

print(data["name"], "의 날씨입니다.")
print("날씨는", data["weather"][0]["description"], "입니다.")
print("바람은", data["wind"]["speed"], "m/s입니다.")
print("현재 온도는", data["main"]["temp"], "입니다.")
print("하지만 체감 온도는", data["main"]["feels_like"], "입니다.")
print("최저 기온은", data["main"]["temp_min"], "입니다.")
print("최고 기온은", data["main"]["temp_max"], "입니다.")
print("기압은", data["main"]["pressure"], "입니다.")
print("습도는", data["main"]["humidity"], "입니다.")