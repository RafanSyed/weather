from flask import Flask, jsonify  # import the python Flask framework from flask 
from functions.temp import get_weather # imports the get_weather function from the functions folder in the temp file
from flask_cors import CORS

app = Flask(__name__) # intizales the flask application into the app object
CORS(app)

@app.route('/weather/<city>')  # sets the route of the website (localhost:5000/weather/<city>) <city> being the name of the city
def weather(city): 
    return jsonify(get_weather(city)) #calls the function get_weather from the temp file

if __name__ == '__main__': # excutes the code
    app.run(debug=True)