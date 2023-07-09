import requests

def get_weather(city):
    api_key = ""
    url = f"https://api.weatherapi.com/v1/current.json?key={api_key}&q={city}"

    response = requests.get(url)
    data = response.json()
    if "error" in data:
        print(f"Error: {data['error']['message']}")
        return

    current = data["current"]
    location = data["location"]
    temp_f = current["temp_f"]
    lat = location["lat"]
    lon = location["lon"]
    last_updated = current["last_updated"]
    wind_mph = current["wind_mph"]
    condition = current["condition"]["text"]
    humidity = current["humidity"]
    name = location["name"]
    return {
        'Temperature Fahrenheit': temp_f,
        'Latitude': lat,
        'Longitude': lon,
        'Wind mph': wind_mph,
        'Humidity': humidity,
        'Last Updated': last_updated,
        'Name':name,
        'Condition':condition
    }



